import styles from './sibling.module.css';

export default function Sibling({ propToSibling }) {
  return (
    <div className={styles.sibling}>
      <h2>Sibling</h2>
      Grandchild 輸入的數字 為：
      <br />
      {propToSibling}
    </div>
  );
}
