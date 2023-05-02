import styles from './child.module.css';
import Grandchild from 'components/grandchild/grandchild.jsx';
import { useState } from 'react';

export default function Child({ propToChild }) {
  const [childValue, setChildValue] = useState();

  function childHandler(value) {
    setChildValue(value);
    propToChild(value); //其實就是 parentHandler
  }

  return (
    <div className={styles.child}>
      <h2>Child</h2>
      Grandchild 輸入的數字為：{childValue}
      <br />
      <Grandchild propToGrandChild={childHandler} />
    </div>
  );
}
