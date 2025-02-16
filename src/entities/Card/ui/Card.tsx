import * as styles from "./Card.module.scss";
import Star from "shared/assets/icons/Star.svg";
import Forks from "shared/assets/icons/Forks.svg";
import { Link } from "react-router-dom";
import { GroupButton } from "shared/components/GroupButton";
import { ICardProps } from "../lib/types";

export const Card: React.FC<ICardProps> = ({
  repository,
  handleChange,
}): JSX.Element => {
  const {
    owner: { avatar_url },
    stargazers_count,
    forks,
    name,
    full_name,
    id,
    html_url,
  } = repository;

  return (
    <article className={styles["card"]}>
      <img
        className={styles["card__img"]}
        src={avatar_url}
        alt="BigCo Inc. logo"
      />
      <span className={styles["card__counter"]}>
        <Star />
        {stargazers_count}
      </span>
      <span className={styles["card__counter"]}>
        <Forks />
        {forks}
      </span>
      <div className={styles["card__text-wrap"]}>
        <span className={styles["card__name"]}>@{name}</span>
        <span className={styles["card__full-name"]}>{full_name}</span>
      </div>
      <GroupButton className={styles["card__btn-wrap"]} id={id} link={html_url}>
        <Link
          className={styles["button-child"]}
          to={"/repos"}
          onClick={() => handleChange(id)}
        >
          Подробнее
        </Link>
      </GroupButton>
    </article>
  );
};
