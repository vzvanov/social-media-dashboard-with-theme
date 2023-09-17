
import { Overview } from "../../data/overview";
import OverviewCard from "../OverviewCard/OverviewCard";
import styles from "./overviewGroup.module.css";

interface Props {
  overview: Overview[];
}

const OverviewGroup = ({ overview }: Props) => {

  return (
    <div className={styles.overview}>
      {/* <h2 className={styles.title}>Overview - Today</h2> */}
      {overview.map((item) => {
        return (
          <OverviewCard
            key={item.id}
            index={item.index}
            indexNumber={item.indexNumber}
            progress={item.progress}
            progressNumber={item.progressNumber}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

export default OverviewGroup;
