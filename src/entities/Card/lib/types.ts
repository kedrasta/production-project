import { Repository } from "shared/api/lib/types";

export interface ICardProps {
  repository: Repository;
  handleChange: (id: string) => void;
}
