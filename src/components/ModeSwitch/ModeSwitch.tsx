import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import styles from "./modeswitch.module.css";

interface Props {
  colorMode: string;
  handleToggleColorMode: () => void;
}

const ModeSwitch = ({ colorMode, handleToggleColorMode }: Props) => {
  return (
    <div
      className={styles.modeswitch}
    >
      <div className={styles.row}>
        <div className={styles.mode}>{colorMode}</div>
        <ToggleSwitch
          handleChange={handleToggleColorMode}
        />
      </div>
    </div>
  );
};

export default ModeSwitch;
