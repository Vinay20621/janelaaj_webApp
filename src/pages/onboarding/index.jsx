import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import Card from '../../component/card/Index'
import { createMenuContex } from "../../contex/MenuContex";
import styles from "./mystyle.module.css";
const url = 'https://techvictus.com:8325'
export default function Index({details}) {
    const [allPartner,setAllPartnerData]=useState([])
    const { selectedMenu} =useContext(createMenuContex)
    const getAllPartner=async()=>{
        try {
            let res;
            if(selectedMenu==="onBoarding"){
                res=await axios.get(`${url}/operation/all-partner?partner_type=-1`)

            }
            if(selectedMenu==="onBoarding-verified-partner"){
                res=await axios.get(`${url}/operation/all-partner?partner_type=1`)

            }
           if(selectedMenu==="onBoarding-unverified-partner"){
                res=await axios.get(`${url}/operation/all-partner?partner_type=0`)

            }
            if(selectedMenu==="onBoarding-all-partner"){
                res=await axios.get(`${url}/operation/all-partner?partner_type=-1`)

            }
            const data=res?.data
            console.log({data})
            setAllPartnerData(data)
        } catch (error) {
            setAllPartnerData([])
        }
    }
    
    useEffect(() => { 
        getAllPartner()
    }, [selectedMenu])

    return (
        <>
                {
            selectedMenu==='onBoarding-all-partner' && <div className={styles.heading}>ALL PARTNERS</div>
        }
        {
            selectedMenu==='onBoarding-verified-partner' && <div className={styles.heading}>VERIFIED PARTNERS</div>
        }
        {
            selectedMenu==='onBoarding-unverified-partner' && <div className={styles.heading}>UNVERIFIED PARTNERS</div>
        }
        <div style={{zIndex:0}}>

        
        {
            allPartner?.map((i)=><Card partner_profile_photo={i?.partner_profile_photo} partner_id={i?.partner_id} name={i?.ppm_name} profile_photo={i?.partner_profile_photo} role={i?.role_name} mode={i?.services} clinic_name={i?.lm_name} location={`${i?.lm_address_line_1} ${i?.lm_district?i?.lm_district:''}`}
            profile_verified={i?.partner_profile_verified_status} clinic_verified={i?.is_clinic_verified} goLive={i?.is_plm_ready_to_go_live}
            />)
        }
        </div>
        

        </>
    );
}