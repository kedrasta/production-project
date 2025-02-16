import { IIconButtonProps } from "../lib/types";
import * as styles from "./IconButton.module.scss";

export const IconButton: React.FC<IIconButtonProps> = ({
  children,
  onClick,
}): JSX.Element => {
  return (
    <button className={styles["button"]} onClick={onClick}>
      {children}
    </button>
  );
};
