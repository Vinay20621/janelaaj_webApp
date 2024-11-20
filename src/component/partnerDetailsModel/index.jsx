import React, { useEffect, useState } from 'react'
import styles from "./mystyle.module.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
const url = 'https://techvictus.com:8325'

const style = {
    position: 'absolute',
    top: '55%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    height: '95%',
    bgcolor: 'background.paper',
    //   border: '4px solid transparent',
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
};

export default function Index({partner_id, openPartnerModel, closeModel, handleProfileStatus }) {
    const [partnerData,setPartnerData]=useState([])
    const [inputValue,setInputValue]=useState({
        partner_id:partner_id,
        partner_comment:'noo',
        partner_verified_status:0
    })
    const getPartnerData=async()=>{
        try {
            const res=await axios.get(`${url}/operation/get-partner?partner_id=${partner_id}`)
            console.log({res})
            const data=res?.data
            setPartnerData(data)
            setInputValue({...inputValue,
                partner_verified_status:data?.partner_profile_verified_status,
                partner_comment:data?.partner_profile_verified_comments
            })
        } catch (error) {
            
        }
    }
    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
            const {res}=await axios.post(`${url}/operation/update-partner`,inputValue)
            closeModel()
            handleProfileStatus(inputValue?.partner_verified_status)
            
        } catch (error) {
            
        }
    }

    useEffect(()=>{

            getPartnerData()
    },[])
    useEffect(()=>{
console.log({inputValue})
    },[inputValue])

    return (
        <div>
            <Modal
                open={openPartnerModel}
                onClose={closeModel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div >
                        <div className={styles.heading}>
                            Partner Details
                        </div>
                        <div className={styles.inputContainer}>

                            <div className={styles.columnItem}>
                                <div style={{ width: '40%' }}>
                                    <div className={styles.lable}> Name</div>
                                    <input className={styles.inputFeildColumn} disabled type="text" value={partnerData?.ppm_name} />
                                </div>
                                <div style={{ marginLeft: '100px', width: '40%' }}>
                                    <div className={styles.lable}> Date of Brith</div>
                                    <input className={styles.inputFeildColumn} value={new Date(partnerData?.ppm_dob)} disabled type="text" />
                                </div>
                            </div>
                            <div className={styles.columnItem}>
                                <div style={{ width: '40%' }}>
                                    <div className={styles.lable}> Id Proof</div>
                                    <input className={styles.inputFeildColumn} value={partnerData?.ppm_id_proof_id}  type="text" 
                                    onClick={() => {
                                        if (partnerData?.ppm_id_proof_id) {
                                            window.open(partnerData.ppm_id_proof_id, '_blank');
                                        } else {
                                            alert('No valid link available');
                                        }
                                    }} 
                                    />                                    
                                </div>
                                <div style={{ marginLeft: '100px', width: '40%' }}>
                                    <div className={styles.lable}> Certificate Proof</div>
                                    <input className={styles.inputFeildColumn} value={partnerData?.partner_RCI_image_id}  type="text"
                                     onClick={() => {
                                        if (partnerData?.partner_RCI_image_id) {
                                            window.open(partnerData?.partner_RCI_image_id, '_blank');
                                        } else {
                                            alert('No valid link available');                                            
                                        }
                                    }} 
                                    />
                                </div>
                            </div>
                            <div className={styles.rowItem}>
                                <div className={styles.lable}>Education</div>
                                <input className={styles.inputFeild} value={partnerData?.education} disabled type="text" />
                            </div>
                            <div className={styles.columnItem}>
                                <div style={{ width: '40%' }}>
                                    <div className={styles.lable}> Experience</div>
                                    <input className={styles.inputFeildColumn} disabled  value={`${partnerData?.partner_experience ? partnerData?.partner_experience:0} year`} type="text" />
                                </div>
                                <div style={{ marginLeft: '100px', width: '40%' }}>
                                    <div className={styles.lable}> RCI Registration</div>
                                    <input className={styles.inputFeildColumn} value={partnerData?.partner_RCI_licence_no} disabled type="text" />
                                </div>
                            </div>
                            <div className={styles.rowItem}>
                                <div className={styles.lable}> Partner Verified</div>
                                <input className={styles.inputFeild} value={inputValue?.partner_comment} onChange={(e)=>setInputValue({...inputValue,partner_comment:e.target.value})} type="text" />
                            </div>
                            <div style={{ marginTop: '28px' }} >
                                <div className={styles.robotFeild}>
                                    <input type="checkbox" checked={inputValue?.partner_verified_status===1} onChange={()=>setInputValue({...inputValue,partner_verified_status:1})} />
                                    <span className={styles.checkHeading}> OK</span>
                                </div>
                                <div className={styles.robotFeild}>
                                    <input type="checkbox" checked={inputValue?.partner_verified_status===2} onChange={()=>setInputValue({...inputValue,partner_verified_status:2})} />
                                    <span className={styles.checkHeading}> Reject</span>
                                </div>
                                <div className={styles.robotFeild}>
                                    <input type="checkbox" checked={inputValue?.partner_verified_status===3} onChange={()=>setInputValue({...inputValue,partner_verified_status:3})} />
                                    <span className={styles.checkHeading} > Waiting for more info</span>
                                </div>
                            </div>
                            <div style={{ marginTop: '40px', marginBottom: '28px', display: 'flex', justifyContent: 'end' }}>
                                <button className={styles.cancelBtn} onClick={()=>closeModel(true)}>Cancel</button>
                                <button className={styles.saveBtn} onClick={(e)=>handleSubmit(e)}>Save</button>

                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}