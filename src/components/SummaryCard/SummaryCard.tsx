import GlobalSvgSelector from "../../assets/svg/GlobalSVGSelector";
import styles from "./summaryCard.module.css";

interface Props {
  title: string;
  titleText: string;
  progress: string;
  progressNumber: string;
  indexNumber: string;
  index: string;
}

const SummaryCard = ({ title, titleText, progress, progressNumber, indexNumber, index }: Props) => {

  const topStyle = () => {
    return `${styles.top} ${styles[title]}`;
  }

  const progressStyle = () => {
    return `${styles.progress} ${styles[progress]}`;
  }

  return (
    <article className={styles.summaryCard}>
      <div className={topStyle()}></div>
      <div className={styles.title}>
        {GlobalSvgSelector({ id: title })}
        <h2>{titleText}</h2>
      </div>
      <p className={styles.number}>{indexNumber}</p>
      <p className={styles.index}>{index}</p>
      <div className={progressStyle()}>
        {GlobalSvgSelector({ id: progress })}
        <p>{progressNumber} Today</p>
      </div>
    </article>
  );
};

export default SummaryCard;
