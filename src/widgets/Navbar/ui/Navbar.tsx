import { Link } from "react-router-dom";
import * as styles from "./Navbar.module.scss";
import Like from "shared/assets/icons/Like.svg";
import Search from "shared/assets/icons/Search.svg";
import Role from "shared/assets/icons/Role.svg";
import clsx from "clsx";
import { observer } from "mobx-react";
import reposStore from "shared/api/store";

export const Navbar: React.FC = observer((): JSX.Element => {
  const { favoritesId } = reposStore;
  const count = favoritesId.length;

  return (
    <div className={styles["app"]}>
      <Link
        className={clsx(styles["app__link"], styles["app__link--first"])}
        to={"/"}
      >
        <Search />
        <h2 className={styles["app__text"]}>GitHubSearch</h2>
      </Link>
      <Link
        data-count={count}
        className={clsx(styles["app__link"], styles["app__link--count"])}
        to={"/favorites"}
      >
        <Like />
      </Link>
      <Link className={styles["app__link"]} to={"#"}>
        <Role />
      </Link>
    </div>
  );
});
