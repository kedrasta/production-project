import { makeObservable, observable, action } from "mobx";
import axios from "axios";
import { BASE_URL } from "./lib/constants";
import { Repository } from "./lib/types";
import { SortValues } from "shared/lib/types";

class ReposStore {
  query: string = "";
  repositories: Repository[] = [];
  favRepositories: Repository[] = [];
  favoritesId: string[] = [];
  totalCount: string = "";
  sortValue: SortValues = "stars";
  detailedRepo: Repository | null = null;
  loading: boolean = false;
  error: null | string = null;

  constructor() {
    makeObservable(this, {
      query: observable,
      repositories: observable,
      favRepositories: observable,
      favoritesId: observable,
      loading: observable,
      sortValue: observable,
      detailedRepo: observable,
      error: observable,
      fetchRepositories: action,
      toggleFavorites: action,
      fetchFavorites: action,
      fetchRepositoryById: action,
    });

    this.loadFavoritesFromLocalStorage();
  }

  setQuery(value: string) {
    this.query = value;
    this.fetchRepositories();
  }

  async fetchRepositories() {
    if (this.query) {
      this.loading = true;

      try {
        const response = await axios.get(
          `${BASE_URL}search/repositories?q=${this.query}&sort=${this.sortValue}&order=desc&per_page=100`
        );
        this.repositories = response.data.items;
        this.totalCount = response.data.total_count;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    } else {
      this.repositories = [];
    }
  }

  async fetchFavorites() {
    this.loading = true;
    if (this.favoritesId.length > 0) {
      this.favRepositories = [];
      try {
        const requests = this.favoritesId.map((id) =>
          axios.get(`${BASE_URL}repositories/${id}`)
        );
        const responses = await Promise.all(requests);
        this.favRepositories = responses.map((response) => response.data);
        this.sortFavorites();
      } catch (error) {
        this.error = error.message;
      }
    } else {
      this.favRepositories = [];
    }
    this.loading = false;
  }

  async fetchRepositoryById(id: string) {
    this.loading = true;
    this.error = null;

    try {
      const response = await axios.get(`${BASE_URL}repositories/${id}`);
      this.detailedRepo = response.data;
      localStorage.setItem("lastRepoId", id);
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  }

  toggleFavorites(repoId: string) {
    const isFavorite = this.favoritesId.includes(repoId);
    if (isFavorite) {
      this.favoritesId = this.favoritesId.filter((id) => id !== repoId);
    } else {
      if (!this.favoritesId.includes(repoId)) {
        this.favoritesId.push(repoId);
      }
    }
    this.saveFavoritesToLocalStorage();
  }

  sortFavorites() {
    const { sortValue } = this;

    if (sortValue === "stars") {
      this.favRepositories.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );
    } else if (sortValue === "alphabetical") {
      this.favRepositories.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  saveFavoritesToLocalStorage() {
    localStorage.setItem("favoritesId", JSON.stringify(this.favoritesId));
  }

  loadFavoritesFromLocalStorage() {
    const storedFavorites = localStorage.getItem("favoritesId");
    if (storedFavorites) {
      this.favoritesId = JSON.parse(storedFavorites);
    }
  }
}

const reposStore = new ReposStore();
export default reposStore;
