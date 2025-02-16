import { observer } from "mobx-react";
import { useEffect } from "react";
import * as styles from "./ FavoritesPage.module.scss";
import { ReposList } from "widgets/ReposList";
import { Loader } from "shared/components/Loader";
import { Breadcrumbs } from "shared/components/Breadcrumbs";
import { SORT_OPTIONS } from "shared/lib/constants";
import useRepos from "shared/hooks/useRepos";

const FavoritesPage: React.FC = observer((): JSX.Element => {
  const { handleSortChange, handleViewRepoChange, reposStore } = useRepos();
  const { favRepositories, favoritesId, loading, sortValue } = reposStore;
  const total = favoritesId.length.toString();

  useEffect(() => {
    reposStore.fetchFavorites();
  }, [total, sortValue]);

  return (
    <section className={styles["main"]}>
      <Breadcrumbs />
      {favRepositories.length > 0 ? (
        <ReposList
          repositories={favRepositories}
          data={{
            page: "Favorites",
            total: total,
            sortOptions: SORT_OPTIONS,
            sortValue: sortValue,
          }}
          handleSortChange={handleSortChange}
          handleViewRepoChange={handleViewRepoChange}
        />
      ) : !loading ? (
        <p className={styles["main__text"]}>No favorite repositories.</p>
      ) : (
        <Loader />
      )}
    </section>
  );
});

export default FavoritesPage;
