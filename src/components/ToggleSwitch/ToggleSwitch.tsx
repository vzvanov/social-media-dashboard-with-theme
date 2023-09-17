import { ChangeEvent, useState } from "react";
import styles from "./toggleSwitch.module.css";

interface Props {
  handleChange: () => void;
}


const ToggleSwitch = ({ handleChange }: Props) => {
  const [checked, setChecked] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setChecked(!checked);
    handleChange();
  };

  return (
    <label className={styles.switch}>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleSwitch;
