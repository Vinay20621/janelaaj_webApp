import React, { useState } from "react";
import styles from "./mystyle.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { BsDatabase } from "react-icons/bs";
import Logo from '../../assets/images/logo.png'

export default function Index({handlePieChart,handleIsCard,isPieChart,isCard}) {
    const handleOnBoarding=()=>{
        handleIsCard(true)
        handlePieChart(false)
    }
    const handleAppointment=()=>{
        handlePieChart(true)
        handleIsCard(false)
    }
  return (
    <div className={styles.sideBar}>
        <div className={styles.logo}>
            <div>
            <img src={Logo} alt="logo" />
            </div>
          <ul style={{marginLeft:'6px'}}>
            <li style={{ color: "#FFFFFF", fontSize:'22px' }}>Unwinnd</li>
            <li style={{ color: "#FFFFFF",fontSize:'12px' }}>Connecting emotions</li>
          </ul>
        </div>
        <div className={styles.menuList}>
          <ul>
          <li  className={!isCard ? styles.menuItems : styles.menuSelected}  onClick={()=>handleOnBoarding()}>
          <BsDatabase  style={{
                marginRight:'8px'

            }} />
            ON BOARDING
            <MdOutlineKeyboardArrowRight
            size={"25px"}
            style={{
               marginLeft:'4px'

            }}
            />
            </li>
            {
                isCard && 
            <ul  className={styles.subMenu} >
                <li className={styles.subMenuItems}>All Partners</li>
                <li className={styles.subMenuItems}>Unverified Partners</li>
                <li className={styles.subMenuItems}>Verified Partners</li>

            </ul>
            }
            <li  className={!isPieChart ? styles.menuItems : styles.menuSelected}  onClick={()=>handleAppointment()}>
            <BsDatabase  style={{
                marginRight:'8px'

            }} />
                APPOINMENT
                <MdOutlineKeyboardArrowRight
                size={"25px"}
            style={{
                 marginLeft:'4px'

            }}/>
            </li>
            {
                isPieChart && 
            <ul  className={styles.subMenu} >
                <li className={styles.subMenuItems}>Appointment Booked</li>
                <li className={styles.subMenuItems}>Feedback</li>
                <li className={styles.subMenuItems}>Complaints Raised</li>

            </ul>
            }
            <li className={styles.menuItems}>
            <BsDatabase  style={{
                marginRight:'8px'

            }} />
                USER BEHAVIOUR
                <MdOutlineKeyboardArrowRight
                size={"25px"}
            style={{
                 marginLeft:'4px'

            }}/>
            </li>
            <li className={styles.menuItems}>
            <BsDatabase  style={{
                marginRight:'8px'

            }} />
                PATNER BEHAVIOUR
                <MdOutlineKeyboardArrowRight
                size={"25px"}
            style={{
                 marginLeft:'4px'

            }}/>
            </li>
            <li className={styles.menuItems}>
            <BsGraphUp 
            style={{
                marginRight:'8px'

            }}/>            
                TRENDS
                <MdOutlineKeyboardArrowRight
                size={"25px"}
            style={{
                 marginLeft:'4px'

            }}/></li>
            <li className={styles.menuItems}>
            <BsDatabase   style={{
                marginRight:'8px'

            }}/>
                REVENUE
                <MdOutlineKeyboardArrowRight
                size={"25px"}
            style={{
                 marginLeft:'4px'

            }}/>
            </li>
            <li  className={styles.menuItems}>
            <BsDatabase  style={{
                marginRight:'8px'

            }} />
                COMPLAINTS
                <MdOutlineKeyboardArrowRight
                size={"25px"}
            style={{
                 marginLeft:'4px'

            }}/>
            </li>
            <li className={styles.menuItems}>
            <BsDatabase  style={{
                marginRight:'8px'

            }} />
                APPROVALS
                <MdOutlineKeyboardArrowRight
                size={"25px"}
            style={{
                 marginLeft:'4px'

            }}/>
            </li>
            

            
          </ul>
        </div>
      </div>
  )
}
