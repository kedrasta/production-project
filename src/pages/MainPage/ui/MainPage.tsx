import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import debounce from "debounce";
import * as styles from "./MainPage.module.scss";
import { Loader } from "shared/components/Loader";
import { ReposList } from "widgets/ReposList";
import { SORT_OPTIONS } from "shared/lib/constants";
import useRepos from "shared/hooks/useRepos";

const MainPage: React.FC = observer((): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const { handleSortChange, handleViewRepoChange, reposStore } = useRepos();
  const { loading, repositories, totalCount, sortValue } = reposStore;

  const fetchRepositoriesDebounced = useCallback(
    debounce((value: string) => {
      reposStore.setQuery(value);
    }, 900),
    []
  );

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    fetchRepositoriesDebounced(value);
  };

  useEffect(() => {
    return () => {
      fetchRepositoriesDebounced.clear();
    };
  }, [fetchRepositoriesDebounced]);

  return (
    <section className={styles["main"]}>
      <input
        className={styles["main__input"]}
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleChangeInput}
      />
      {loading && <Loader />}
      {repositories.length > 0 && !loading && (
        <ReposList
          repositories={repositories}
          data={{
            page: "Мain",
            total: totalCount,
            sortOptions: SORT_OPTIONS,
            sortValue: sortValue,
          }}
          handleSortChange={handleSortChange}
          handleViewRepoChange={handleViewRepoChange}
        />
      )}
    </section>
  );
});

export default MainPage;
