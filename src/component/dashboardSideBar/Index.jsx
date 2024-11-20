import React, { useContext, useState } from "react";
import styles from "./mystyle.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { BsDatabase } from "react-icons/bs";
import Logo from '../../assets/images/logo.png'
import { createMenuContex } from "../../contex/MenuContex";

export default function Index() {
    const { selectedMenu,setSelectedMenu} =useContext(createMenuContex)    
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
          <li  className={!selectedMenu.includes("onBoarding") ? styles.menuItems : styles.menuSelected}  onClick={()=>setSelectedMenu("onBoarding")}>
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
                selectedMenu.includes("onBoarding") && 
            <ul  className={styles.subMenu} >
                <li 
                className={`${styles.subMenuItems} ${
                    selectedMenu==="onBoarding-all-partner"? styles.blueColor : styles.blackColor
                  }`}
                 onClick={()=>setSelectedMenu('onBoarding-all-partner')}>All Partners</li>
                <li  className={`${styles.subMenuItems} ${
                    selectedMenu==="onBoarding-verified-partner"? styles.blueColor : styles.blackColor
                  }`} onClick={()=>setSelectedMenu('onBoarding-verified-partner')}>Verified Partners</li>
                <li  className={`${styles.subMenuItems} ${
                    selectedMenu==="onBoarding-unverified-partner"? styles.blueColor : styles.blackColor
                  }`} onClick={()=>setSelectedMenu('onBoarding-unverified-partner')}>Unverified Partners</li>

            </ul>
            }
            <li  className={!selectedMenu.includes("appointment") ? styles.menuItems : styles.menuSelected} onClick={()=>setSelectedMenu("appointment")}>
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
               selectedMenu.includes("appointment") && 
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
