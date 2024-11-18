import React from "react";
import styles from './mystyle.module.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Whatsapp from "../../assets/images/Whatsapp";
import Message from "../../assets/images/Message";

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Appointments</div>
      <div className={styles.btnGrps}>
        <div>
        <button className={styles.btnTop}>Completed Appointments </button>
        </div>
        <div>
        <button className={styles.btnTop}>Upcoming Appointments </button>
        </div>
      <div><button className={styles.btnTop}>Cancelled Appointments</button></div>
      </div>
      <div className={styles.btnGrp}>
      <div style={{display:'flex'}}>
        <button className={styles.btnTop}>Start Date </button>
      <button className={styles.btnTop}>End Date</button>
      </div>
      <div><button className={styles.btnTop}>Submit</button></div>
      </div>
        <div className={styles.tableHeading} >
            <div>Recent Upcoming appointments</div>
            <div><button className={styles.btn}>Page 1 <MdOutlineKeyboardArrowDown size={25} /></button></div>

        </div>
        <div className={styles.scrollTable}>

      <table className={styles.table}>
          <td className={styles.columnHeading}>S.NO</td>
          <td className={styles.columnHeading}>CLIENT DETAILS</td>
          <td className={styles.columnHeading}>PARTNER DETAILS</td>
          <td className={styles.columnHeading}>SESSION DETAILS</td>
          <td className={styles.columnHeading}>ACTION</td>            
          
          <tr>
          <td className={styles.column}>1</td>
          <td className={styles.column}>
            <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li style={{marginTop:'4px'}}> <Whatsapp/> <Message/></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Appointment Id</li>
                <li>Online</li>
                <li>Booked: 7th October</li>
                <li>App Date: 13th October</li>
                <li>Delhi</li>
                <li>Rs. 4500</li>
                <li>Send reminder to both client partners</li>
            </ul>
          </td>
          <td className={styles.column}>
            <ul>
            <li>Send reminder to both client partners</li>
            </ul>
          </td>
          </tr>
          <tr>
          <td className={styles.column}>1</td>
          <td className={styles.column}>
            <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Appointment Id</li>
                <li>Online</li>
                <li>Booked: 7th October</li>
                <li>App Date: 13th October</li>
                <li>Delhi</li>
                <li>Rs. 4500</li>
                <li>Send reminder to both client partners</li>
            </ul>
          </td>
          <td className={styles.column}>
            <ul>
            <li>Send reminder to both client partners</li>
            </ul>
          </td>
          </tr>
          <tr>
          <td className={styles.column}>1</td>
          <td className={styles.column}>
            <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>                
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Appointment Id</li>
                <li>Online</li>
                <li>Booked: 7th October</li>
                <li>App Date: 13th October</li>
                <li>Delhi</li>
                <li>Rs. 4500</li>
                <li>Send reminder to both client partners</li>
            </ul>
          </td>
          <td className={styles.column}>
            <ul>
            <li>Send reminder to both client partners</li>
            </ul>
          </td>
          </tr>
          <tr>
          <td className={styles.column}>1</td>
          <td className={styles.column}>
            <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Appointment Id</li>
                <li>Online</li>
                <li>Booked: 7th October</li>
                <li>App Date: 13th October</li>
                <li>Delhi</li>
                <li>Rs. 4500</li>
                <li>Send reminder to both client partners</li>
            </ul>
          </td>
          <td className={styles.column}>
            <ul>
            <li>Send reminder to both client partners</li>
            </ul>
          </td>
          </tr>
          <tr>
          <td className={styles.column}>1</td>
          <td className={styles.column}>
            <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Appointment Id</li>
                <li>Online</li>
                <li>Booked: 7th October</li>
                <li>App Date: 13th October</li>
                <li>Delhi</li>
                <li>Rs. 4500</li>
                <li>Send reminder to both client partners</li>
            </ul>
          </td>
          <td className={styles.column}>
            <ul>
            <li>Send reminder to both client partners</li>
            </ul>
          </td>
          </tr>
          <tr>
          <td className={styles.column}>1</td>
          <td className={styles.column}>
            <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Appointment Id</li>
                <li>Online</li>
                <li>Booked: 7th October</li>
                <li>App Date: 13th October</li>
                <li>Delhi</li>
                <li>Rs. 4500</li>
                <li>Send reminder to both client partners</li>
            </ul>
          </td>
          <td className={styles.column}>
            <ul>
            <li>Send reminder to both client partners</li>
            </ul>
          </td>
          </tr>
          <tr>
          <td className={styles.column}>1</td>
          <td className={styles.column}>
            <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Muskan</li>
                <li>User Id: 245687</li>
                <li>Delhi</li>
                <li></li>
            </ul>
          </td>
          <td className={styles.column}>
          <ul>
                <li>Appointment Id</li>
                <li>Online</li>
                <li>Booked: 7th October</li>
                <li>App Date: 13th October</li>
                <li>Delhi</li>
                <li>Rs. 4500</li>
                <li>Send reminder to both client partners</li>
            </ul>
          </td>
          <td className={styles.column}>
            <ul>
            <li>Send reminder to both client partners</li>
            </ul>
          </td>
          </tr>
      </table>
        </div>
    </div>
  );
}
