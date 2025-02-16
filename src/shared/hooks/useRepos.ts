import reposStore from "shared/api/store";
import { SortValues } from "shared/lib/types";

const useRepos = () => {
  const handleSortChange = (value: SortValues) => {
    reposStore.sortValue = value;
    reposStore.fetchRepositories();
  };

  const handleViewRepoChange = (id: string) => {
    reposStore.fetchRepositoryById(id);
  };

  return {
    handleSortChange,
    handleViewRepoChange,
    reposStore,
  };
};

export default useRepos;
