import styles from './grandchild.module.css';

export default function Grandchild({ propToGrandChild }) {
  function grandChildHandler(value) {
    propToGrandChild(value); //其實就是childHandler
  }

  return (
    <div className={styles.grandchild}>
      <h2>Grandchild</h2>
      請輸入數字：
      <br />
      <input
        className={styles.input}
        type='number'
        onChange={event => {
          grandChildHandler(event.target.value);
        }}
      />
    </div>
  );
}
