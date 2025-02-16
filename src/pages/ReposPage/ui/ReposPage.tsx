import { observer } from "mobx-react";
import reposStore from "shared/api/store";
import * as styles from "./ ReposPage.module.scss";
import { Breadcrumbs } from "shared/components/Breadcrumbs";
import { useEffect } from "react";
import { Loader } from "shared/components/Loader";
import { DetailCard } from "entities/DetailCard";

const ReposPage: React.FC = observer((): JSX.Element | null => {
  const { detailedRepo, loading } = reposStore;
  const savedRepoId = localStorage.getItem("lastRepoId");

  useEffect(() => {
    if (!detailedRepo && savedRepoId) {
      reposStore.fetchRepositoryById(savedRepoId);
    }
  }, [detailedRepo, savedRepoId]);

  return !loading ? (
    <section className={styles["main"]}>
      <Breadcrumbs />
      <DetailCard repository={detailedRepo} />
    </section>
  ) : (
    <Loader />
  );
});

export default ReposPage;
