import React from "react";
import styles from './mystyle.module.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Whatsapp from "../../assets/images/Whatsapp";
import Message from "../../assets/images/Message";

export default function Index() {
  return (
    <div className={styles.container}>     
        <div className={styles.scrollTable}>

      <table className={styles.table}>
          <td className={styles.columnHeading}>DAY</td>
          <td className={styles.columnHeading}>SLOT</td>
          <td className={styles.columnHeading}>AMOUNT</td>       
          
          <tr>
          <td className={styles.column}>Mon</td>
          <td className={styles.column}>11:00 A.M-2:30 P.M</td>
          <td className={styles.column}>Rs.1000</td>                
          </tr>
          <tr>
          <td className={styles.column}>Mon</td>
          <td className={styles.column}>11:00 A.M-2:30 P.M</td>
          <td className={styles.column}>Rs.1000</td>                
          </tr>
          <tr>
          <td className={styles.column}>Mon</td>
          <td className={styles.column}>11:00 A.M-2:30 P.M</td>
          <td className={styles.column}>Rs.1000</td>                
          </tr>
          
      </table>
        </div>
    </div>
  );
}
