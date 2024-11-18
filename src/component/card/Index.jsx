import React from 'react'
import styles from "./mystyle.module.css";
import { MdVerified } from "react-icons/md";
import { RxArrowRight } from "react-icons/rx";
import Arrow from '../../assets/images/Arrow';
const userImage="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"

export default function Index() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <img src={userImage} alt="userImage"  className={styles.imges} />
            <div className={styles.content}>
            <ul style={{padding:'6px'}}>
                <li>RITIKA BENIWAL <MdVerified  color='green'/></li>
                <li style={{marginTop:'3px'}}>
                Counselling Psychologist
                </li>

            </ul>
            </div>


        </div>
        <div className={styles.list}>
            <ul>
                <li className={styles.listHeading}>MODE</li>
                <li className={styles.listsubHeading}>Online</li>

            </ul>
            <ul>
                <li className={styles.listHeading}>CLINIC NAME</li>
                <li className={styles.listsubHeading}>Happy Psychotherapy</li>

            </ul>
            <ul>
                <li className={styles.listHeading}>LOCATION</li>
                <li className={styles.listsubHeading}>Rohini Delhi</li>

            </ul>
            <ul>
                <li className={styles.listHeading}>Partner Details</li>
                <li className={styles.listBtn}>CLICK FOR MORE</li>

            </ul>
            <ul>
                <li className={styles.listHeading}>CLINIC DETAILS</li>
                <li className={styles.listBtn}>CLICK FOR MORE</li>

            </ul>
            <ul>
                <li className={styles.listHeading}>VERIFICATION STATUS</li>
                <li className={styles.listsubHeading}>Verification Complete</li>

            </ul>
        </div>
        <div>
        <div className={styles.commentHeading}>
Comments*
        </div>
        <input type="text" className={styles.commentBox} />
        </div>
        <div className={styles.status} >
        <button className={styles.statusBtn}>Profile Verification</button>
        <Arrow size={30}/>
        <button className={styles.statusBtn}>Clinic Verification</button>
        <Arrow size={30}/>
        <button className={styles.statusBtn}>Site Verification</button>
        <Arrow size={30}/>
        <button className={styles.statusBtn}>Subscription</button>
        <Arrow size={30}/>
        <button className={styles.statusBtn}>GO LIVE</button>

        </div>
        
      
    </div>
  )
}
