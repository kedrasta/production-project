import * as styles from "./ReposList.module.scss";
import { Card } from "entities/Card";
import { Select } from "shared/components/Select";
import { IReposListProps } from "../lib/types";

export const ReposList: React.FC<IReposListProps> = ({
  repositories,
  data,
  handleSortChange,
  handleViewRepoChange,
}): JSX.Element => {
  return (
    <section>
      <div className={styles["main"]}>
        <span className={styles["main__text"]}>
          {data.page === "Favorites"
            ? `Favorites: ${data.total || "0"}`
            : `Result: ${data.total || "0"} repositories`}
        </span>
        <Select
          handleChange={handleSortChange}
          value={data.sortValue}
          data={data.sortOptions}
        />
      </div>
      <div className={styles["main__list"]}>
        {repositories.map((i) => (
          <Card key={i.id} repository={i} handleChange={handleViewRepoChange} />
        ))}
      </div>
    </section>
  );
};
