import Child from 'components/child/child.jsx';
import Sibling from 'components/sibling/sibling.jsx';
import styles from './parent.module.css';
import { useState } from 'react';

export default function Parent() {
  const [parentValue, setParentValue] = useState();

  function parentHandler(value) {
    setParentValue(value);
  }

  return (
    <div className={styles.parent}>
      <h2>Parent</h2>
      Grandchild 輸入的數字為：{parentValue}
      <div className={styles.kids}>
        <Child propToChild={parentHandler} />
        <Sibling propToSibling={parentValue} />
      </div>
    </div>
  );
}
