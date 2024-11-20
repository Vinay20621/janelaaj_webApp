import React from "react";
import styles from './mystyle.module.css'

export default function Index() {
  return (
    <div className={styles.container}>     
        <div className={styles.scrollTable}>

      <table className={styles.table}>
          <td className={styles.columnHeading}>SERVICE NAME</td>
          <td className={styles.columnHeading}>NORMAL AMOUNT</td>
          <td className={styles.columnHeading}>AFTER DISCOUNT</td>       
          
          <tr>
          <td className={styles.column}>ECG</td>
          <td className={styles.column}>Rs.1000</td>
          <td className={styles.column}>500</td>                
          </tr>
          <tr>
          <td className={styles.column}>ECG</td>
          <td className={styles.column}>Rs.1000</td>
          <td className={styles.column}>500</td>                
          </tr>
          <tr>
          <td className={styles.column}>ECG</td>
          <td className={styles.column}>Rs.1000</td>
          <td className={styles.column}>500</td>                
          </tr>
          
      </table>
        </div>
    </div>
  );
}
