import { ISortData, SortValues } from "shared/lib/types";

export interface ISelectProps {
  data: ISortData[];
  value: SortValues;
  handleChange: (value: SortValues) => void;
}
