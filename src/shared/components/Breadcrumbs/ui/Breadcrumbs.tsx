import { useNavigate } from "react-router-dom";
import * as styles from "./Breadcrumbs.module.scss";
import Back from "shared/assets/icons/Back.svg";

export const Breadcrumbs = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["main"]} onClick={() => navigate(-1)}>
      <Back />
      <span className={styles["main__button"]}>Back</span>
    </div>
  );
};
