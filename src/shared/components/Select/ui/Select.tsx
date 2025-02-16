import React from "react";
import { observer } from "mobx-react-lite";
import * as styles from "./Select.module.scss";
import { ISelectProps } from "../lib/types";
import { SortValues } from "shared/lib/types";

export const Select: React.FC<ISelectProps> = observer(
  ({ data, value, handleChange }): JSX.Element => {
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      handleChange(event.target.value as SortValues);
    };

    return (
      <select
        className={styles["select"]}
        value={value}
        onChange={handleSortChange}
      >
        {data.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);
