import * as styles from "./DetailCard.module.scss";
import { GroupButton } from "shared/components/GroupButton";
import { ICardProps } from "../lib/types";
import clsx from "clsx";
import Star from "shared/assets/icons/Star.svg";
import Forks from "shared/assets/icons/Forks.svg";
import Folder from "shared/assets/icons/Folder.svg";
import Terminal from "shared/assets/icons/Terminal.svg";
import Archive from "shared/assets/icons/Archive.svg";
import Create from "shared/assets/icons/Create.svg";
import { formatDate, formatNumber, isBoolean } from "shared/lib/helpers";
import { Describe } from "shared/components/Describe";

export const DetailCard: React.FC<ICardProps> = ({
  repository,
}): JSX.Element => {
  const {
    stargazers_count,
    forks,
    full_name,
    id,
    html_url,
    owner,
    description,
    language,
    archived,
    created_at,
    pushed_at,
  } = repository || {};

  const data = [
    {
      text: "Количество звезд",
      image: <Star />,
      data: formatNumber(stargazers_count),
    },
    { text: "Количество форков", image: <Forks />, data: formatNumber(forks) },
    { text: "В архиве", image: <Archive />, data: isBoolean(archived) },
    { text: "Язык", image: <Terminal />, data: language },
    { text: "Создано", image: <Folder />, data: formatDate(pushed_at) },
    { text: "Изменено", image: <Create />, data: formatDate(created_at) },
  ];

  return (
    <article className={styles["detail"]}>
      <h3 className={styles["detail__title"]}>Профиль</h3>
      <div className={clsx(styles["detail__header"], styles["header"])}>
        <img
          className={styles["header__img"]}
          src={owner?.avatar_url}
          alt="avatar"
        />
        <div className={styles["header__text"]}>
          <p className={styles["header__name"]}>{full_name}</p>
          <p className={styles["header__description"]}>{description}</p>
        </div>
      </div>
      <div className={styles["detail__describe"]}>
        {data.map((item) => (
          <Describe key={item.text} {...item} />
        ))}
      </div>
      <GroupButton
        className={styles["detail__btn-wrap"]}
        id={id}
        link={html_url}
      >
        <a className={styles["button-child"]} href={html_url} target="blank">
          Открыть репозиторий
        </a>
      </GroupButton>
    </article>
  );
};
