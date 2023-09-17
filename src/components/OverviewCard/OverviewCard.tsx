import GlobalSvgSelector from "../../assets/svg/GlobalSVGSelector";
import styles from "./overviewCard.module.css";

interface Props {
  title: string;
  index: string;
  indexNumber: string;
  progress: string;
  progressNumber: string;
}

const OverviewCard = ({ title, progress, progressNumber, indexNumber, index }: Props) => {

  const progressStyle = () => {
    return `${styles.progress} ${styles[progress]}`;
  }

  return (
    <article className={styles.overviewCard}>
      <div className={styles.row}>
        <h2 className={styles.index}>{index}</h2>
        {GlobalSvgSelector({ id: title })}
      </div>
      <div className={styles.row}>
        <p className={styles.number}>{indexNumber}</p>
        <div className={progressStyle()}>
          {GlobalSvgSelector({ id: progress })}
          <p>{progressNumber}%</p>
        </div>
      </div>
    </article>
  );
};

export default OverviewCard;
