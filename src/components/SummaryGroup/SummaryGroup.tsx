
import { Summary } from "../../data/summary";
import SummaryCard from "../SummaryCard/SummaryCard";
import styles from "./summaryGroup.module.css";

interface Props {
  summary: Summary[];
}

const SummaryGroup = ({ summary }: Props) => {

  return (
    <div className={styles.summary}>
      <div className="content"></div>
      {summary.map((item) => {
        return (
          <SummaryCard
            key={item.id}
            index={item.index}
            indexNumber={item.indexNumber}
            progress={item.progress}
            progressNumber={item.progressNumber}
            title={item.title}
            titleText={item.titleText}
          />
        );
      })}
    </div>
  );
};

export default SummaryGroup;
