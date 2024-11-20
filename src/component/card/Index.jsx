import React, { useState } from 'react'
import styles from "./mystyle.module.css";
import { MdVerified } from "react-icons/md";
import Arrow from '../../assets/images/Arrow';
import PartnerDetailsModel from "../partnerDetailsModel/index"
import ClinicDetailModel from '../clinicDetailsModel/Index'
const userImage = "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"

export default function Index({ partner_profile_photo,partner_id, name, role, mode, clinic_name, location, profile_verified, clinic_verified, goLive }) {
  const [openPartnerModel, setOpenPartnerModel] = useState(false)
  const [openClinicModel, setOpenClinicModel] = useState(false)
  const [isActive,setIsActive]=useState({
    profile_status:profile_verified,
    clinic_status:clinic_verified,
    site_verification_status:2,
    subscription_status:2,
    go_live_status:goLive
  })
  const handleProfileStatus=(value)=>{
    setIsActive({...isActive,profile_status:value})
  }
useState(()=>{
  setIsActive({
    profile_status:profile_verified,
    clinic_status:clinic_verified,
    site_verification_status:2,
    subscription_status:2,
    go_live_status:goLive
  })
},[profile_verified,clinic_verified, goLive])
  const closePartnerModel = () => setOpenPartnerModel(false)
  const closeClinicModel = () => setOpenClinicModel(false)

  return (
    <>
      <div className={styles.container}>
        {
          openPartnerModel && 
        <PartnerDetailsModel partner_id={partner_id} openPartnerModel={openPartnerModel} closeModel={closePartnerModel} handleProfileStatus={handleProfileStatus} />
        }
        <ClinicDetailModel openClinicModel={openClinicModel} closeModel={closeClinicModel} />

        <div className={styles.header}>
          <img src={partner_profile_photo} alt="image" className={styles.imges} />
          <div className={styles.content}>
            <ul style={{ marginLeft: '12px' }}>
              <li style={{ fontSize: '18px', fontWeight: 700, color: '#282828', textAlign: 'start', display: 'flex', alignItems: 'center', gap: '8px' }}>{name} {profile_verified === 1 ? <MdVerified color='green' /> : <></>} </li>
              <li style={{ marginTop: '6px', fontSize: '16px', fontWeight: 600, color: '#4B4B4B', textAlign: 'start' }}>
                {role}
              </li>
            </ul>
          </div>


        </div>
        <div className={styles.list}>
          <ul>
            <li className={styles.listHeading}>MODE</li>
            {
              mode?.split(',').map((i) => <li className={styles.listsubHeading}>{i}</li>)
            }

          </ul>
          <ul>
            <li className={styles.listHeading}>CLINIC NAME</li>
            <li className={styles.listsubHeading}>{clinic_name}</li>

          </ul>
          <ul>
            <li className={styles.listHeading}>LOCATION</li>
            <li className={styles.listsubHeading}>{location}</li>

          </ul>
          <ul>
            <li className={styles.listHeading} >Partner Details</li>
            <li className={styles.listBtn} onClick={() => setOpenPartnerModel(true)} >CLICK FOR MORE</li>

          </ul>
          <ul>
            <li className={styles.listHeading}>CLINIC DETAILS</li>
            <li className={styles.listBtn} onClick={() => setOpenClinicModel(true)}>CLICK FOR MORE</li>

          </ul>
          <ul>
            <li className={styles.listHeading}>VERIFICATION STATUS</li>
            <li className={styles.listsubHeading}>Verification {profile_verified ? <>Complete</> : <>Incomplete</>}</li>

          </ul>
        </div>
        <div>
          <div className={styles.commentHeading}>
            Comments*
          </div>
          <input type="text" className={styles.commentBox} />
        </div>
        <div className={styles.status} >
          <button className={`${styles.statusBtn} ${isActive?.profile_status === 1 ? styles.greenBackground : styles.redBackground
            }`}>Profile Verification</button>
          <Arrow size={30} />
          <button className={`${styles.statusBtn} ${isActive?.clinic_status === 1 ? styles.greenBackground : styles.redBackground
            }`}>Clinic Verification</button>
          <Arrow size={30} />
          <button className={`${styles.statusBtn} ${isActive?.site_verification_status === 1 ? styles.greenBackground : styles.redBackground
            }`}>Site Verification</button>
          <Arrow size={30} />
          <button className={`${styles.statusBtn} ${isActive?.subscription_status === 1 ? styles.greenBackground : styles.redBackground
            }`}>Subscription</button>
          <Arrow size={30} />
          <button className={`${styles.statusBtn} ${isActive?.go_live_status ? styles.greenBackground : styles.redBackground
            }`}>GO LIVE</button>
        </div>

      </div>
    </>
  )
}
