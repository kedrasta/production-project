import * as styles from "./styles/index.scss";

import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  return (
    <div className={styles["app"]}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
