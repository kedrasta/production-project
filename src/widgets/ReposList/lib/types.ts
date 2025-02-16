import { Repository } from "shared/api/lib/types";
import { ISortData, SortValues } from "shared/lib/types";

export interface IReposListProps {
  repositories: Repository[];
  data: {
    page: "Favorites" | "Мain";
    total: string;
    sortOptions: ISortData[];
    sortValue: SortValues;
  };
  handleSortChange: (value: SortValues) => void;
  handleViewRepoChange: (id: string) => void;
}
