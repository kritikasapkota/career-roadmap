import styles from './addcareer.module.css';

export default function AddCareer() {
  return (
    <div className={styles.add}>
      <h2>Add New Career</h2>
      <form>
        <input type="text" placeholder="Career Name" />
        <textarea placeholder="Steps (comma separated)"></textarea>
        <input type="text" placeholder="Image URL or path" />
        <button type="submit">Add Career</button>
      </form>
    </div>
  );
}
