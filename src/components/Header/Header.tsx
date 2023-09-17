import ModeSwitch from "../ModeSwitch/ModeSwitch";
import styles from "./header.module.css";

interface Props {
  colorMode: string;
  handleToggleColorMode: () => void;
}

const Header = ({ colorMode, handleToggleColorMode }: Props) => {
  return (
    <header
      className={styles.header}
    >
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1 className={styles.h1}>Social Media Dashboard</h1>
          <div className={styles.info}>Total Followers: 23,004</div>
        </div>
        <ModeSwitch
          colorMode={colorMode}
          handleToggleColorMode={handleToggleColorMode}
        />
      </div>
    </header>
  );
};

export default Header;
