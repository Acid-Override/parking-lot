import styles from './controls.module.scss'
import generateNumberPlate from "../../utils/generateNumberPlate.js"

export const Controls = ({ add }) => {
  return (
    <div className={styles.control}>
      <button onClick={() => add(generateNumberPlate())}>PARK!</button>
    </div>
  );
};