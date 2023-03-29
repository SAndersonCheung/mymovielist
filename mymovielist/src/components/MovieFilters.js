import styles from "../styles/components/MovieFilters.module.scss";
import "../styles/components/Selected.scss";
import { useState } from "react";

const MovieFilters = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className={styles.Filters}>
      <div className={styles.Filter_Wrap}>
        <p id={[selected] == 0 ? "selected" : ""}>
          <a
            href="#"
            onClick={() => setSelected(0)}
            className={styles.Filter_Link}
          >
            All
          </a>
        </p>
        <p id={[selected] == 1 ? "selected" : ""}>
          <a
            href="#"
            onClick={() => setSelected(1)}
            className={styles.Filter_Link}
          >
            To Watch
          </a>
        </p>
        <p id={[selected] == 2 ? "selected" : ""}>
          <a
            href="#"
            onClick={() => setSelected(2)}
            className={styles.Filter_Link}
          >
            Seen
          </a>
        </p>
        <p id={[selected] == 3 ? "selected" : ""}>
          <a
            href="#"
            onClick={() => setSelected(3)}
            className={styles.Filter_Link}
          >
            Dropped
          </a>
        </p>
      </div>
    </div>
  );
};
export default MovieFilters;
