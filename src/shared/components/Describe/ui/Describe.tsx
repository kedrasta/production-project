import * as styles from "./Describe.module.scss";
import { observer } from "mobx-react";
import { IDescribeProps } from "../lib/types";

export const Describe: React.FC<IDescribeProps> = observer(
  ({ text, data, image }): JSX.Element => {
    return (
      <div className={styles["main"]}>
        <div className={styles["main__img"]}>{image}</div>
        <div className={styles["description"]}>
          <p className={styles["description__data"]}>{data}</p>
          <p className={styles["description__text"]}>{text}</p>
        </div>
      </div>
    );
  }
);
