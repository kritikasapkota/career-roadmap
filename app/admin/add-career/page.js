import styles from './addcareer.module.css';

export default function AddCareer() {
  return (
    <div className={styles.add}>
      <h2 className={styles.heading}>Add New Career</h2>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Career Name"
          className={styles.input}
        />
        <textarea
          placeholder="Steps (comma separated)"
          className={styles.textarea}
        ></textarea>
        <input
          type="text"
          placeholder="Image URL or path"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add Career
        </button>
      </form>
    </div>
  );
}
