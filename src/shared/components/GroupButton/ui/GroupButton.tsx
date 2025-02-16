import * as styles from "./GroupButton.module.scss";
import { IconButton } from "shared/components/IconButton";
import Like from "shared/assets/icons/Like.svg";
import Link from "shared/assets/icons/Link.svg";
import reposStore from "shared/api/store";
import { observer } from "mobx-react";
import { IGroupButtonProps } from "../lib/types";
import clsx from "clsx";

export const GroupButton: React.FC<IGroupButtonProps> = observer(
  ({ className, id, link, children }): JSX.Element => {
    const { favoritesId } = reposStore;

    const isFavorite = favoritesId.includes(id);

    const handleChange = (id: string) => {
      reposStore.toggleFavorites(id);
    };

    const copy = require("clipboard-copy");

    return (
      <div className={className}>
        <IconButton onClick={() => handleChange(id)}>
          <Like
            stroke={"black"}
            width={32}
            height={18}
            className={clsx({ [styles["svg-favorite"]]: isFavorite })}
          />
        </IconButton>
        <IconButton onClick={() => copy(link)}>
          <Link width={31} height={18} />
        </IconButton>
        {children}
      </div>
    );
  }
);
