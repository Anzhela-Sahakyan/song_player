import styles from "./addSOngBtn.module.css";

export default function AddSongBtn() {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.addBtn}>Add new song</button>
    </div>
  );
}
