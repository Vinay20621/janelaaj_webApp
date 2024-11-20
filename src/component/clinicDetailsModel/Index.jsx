import React, { useState } from 'react'
import styles from "./mystyle.module.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TableTimings from '../timingTable/Index'
import TableServices from '../serviceTable/Index'



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

export default function Index({ openClinicModel, closeModel }) {
    const [selectedMenuItem,setSelectedMenuItem]=useState('profile')

    return (
        <div>
            <Modal
                open={openClinicModel}
                onClose={closeModel}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div >
                        <div className={styles.heading}>
                        Clinic Details
                        </div>
                        <div className={styles.inputContainer}>

                            <div className={styles.columnItem}>
                                <div style={{ width: '40%' }}>
                                    <div className={styles.lable}> Name</div>
                                    <input className={styles.inputFeildColumn} type="text" />
                                </div>
                                <div style={{ marginLeft: '100px', width: '40%' }}>
                                    <div className={styles.lable}> Address</div>
                                    <input className={styles.inputFeildColumn} type="text" />
                                </div>
                            </div>                            
                            <div className={styles.columnItem}>
                                <div style={{ width: '40%' }}>
                                    <div className={styles.lable}> City</div>
                                    <input className={styles.inputFeildColumn} type="text" />
                                </div>
                                <div style={{ marginLeft: '100px', width: '40%' }}>
                                    <div className={styles.lable}> State</div>
                                    <input className={styles.inputFeildColumn} type="text" />
                                </div>
                            </div>
                            <div className={styles.columnItem}>
                                <div style={{ width: '40%' }}>
                                    <div className={styles.lable}> Pin</div>
                                    <input className={styles.inputFeildColumn} type="text" />
                                </div>
                                <div style={{ marginLeft: '100px', width: '40%' }}>
                                    <div className={styles.lable}> Timing</div>
                                    <input className={styles.inputFeildColumn} type="text" />
                                </div>
                            </div>
                            <div className={styles.rowItem}>
                                <div className={styles.lable}>Services</div>
                                <input className={styles.inputFeild} type="text" />
                            </div>

                            <div>
                           
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <ul className={styles.listItemBtns}>
                                        <li   className={`${styles.listItemBtn} ${
                    selectedMenuItem==="profile"? styles.selectedItem  : styles.blackColor
                  }`} onClick={()=>setSelectedMenuItem('profile')}>Profile</li>
                                        <li  className={`${styles.listItemBtn} ${
                    selectedMenuItem==="timings"? styles.selectedItem  : styles.blackColor
                  }`} onClick={()=>setSelectedMenuItem('timings')}>Timings</li>
                                        <li  className={`${styles.listItemBtn} ${
                    selectedMenuItem==="services"? styles.selectedItem  : styles.blackColor
                  }`} onClick={()=>setSelectedMenuItem('services')}>Services</li>
                                        <li  className={`${styles.listItemBtn} ${
                    selectedMenuItem==="langues"? styles.selectedItem : styles.blackColor
                  }`} onClick={()=>setSelectedMenuItem('langues')}>Languages</li>

                                    </ul>
                                </div>
                            </div>
                            {
                                selectedMenuItem==="profile" && 
                            <div style={{background:'#F2EFFA',padding:'8px 20px',marginTop:'20px'}}>
                                <div>
                                    <div className={styles.formLable} >About</div>
                                    <div className={styles.formContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, quo ullam esse impedit vitae nobis recusandae voluptatibus consequuntur quidem? Blanditiis, animi.</div>
                                </div>
                                <div>
                                    <div className={styles.formLable}>Specialization</div>
                                    <div className={styles.formContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, quo ullam esse impedit vitae nobis recusandae voluptatibus consequuntur quidem? Blanditiis, animi.</div>
                                </div>
                                <div>
                                    <div className={styles.formLable}>Experience</div>
                                    <div className={styles.formContent}>L Blanditiis, animi.</div>
                                </div>
                                <div>
                                    <div className={styles.formLable}>Why should you select me?</div>
                                    <div className={styles.formContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, quo ullam esse impedit vitae nobis recusandae voluptatibus consequuntur quidem? Blanditiis, animi.</div>
                                </div>
                                <div>
                                    <div className={styles.formLable}>Primary Address</div>
                                    <div className={styles.formContent}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, quo ullam esse impedit vitae nobis recusandae voluptatibus consequuntur quidem? Blanditiis, animi.</div>
                                </div>
                            </div>
                            }
                            {
                                selectedMenuItem==="timings" &&   <TableTimings />
                            }
                            {
                                selectedMenuItem==="services" &&  <TableServices/>
                            }
                            {
                                selectedMenuItem==="langues" &&  
                             <div>
                                <div style={{background:'#F2EFFA',padding:'8px 20px',marginTop:'20px',display:'flex',alignItems:'center'}}>
                                    <ul className={styles.languesBtns}>
                                        <li className={styles.languesBtn}>English</li>
                                        <li className={styles.languesBtn}>Hindi</li>
                                        <li className={styles.languesBtn}>Gujarati</li>
                                        <li className={styles.languesBtn}>Punjabi</li>
                                        <li className={styles.languesBtn}>Marathi</li>


                                    </ul>
                                </div>
                            </div>
                            }
                            

                            <div style={{display:'flex',alignItems:'center',marginTop:'16px'}}>
                                <div className={styles.locationBtns}>
                                Get Location Coordinates
                                </div>
                                <div>
                                    <ul>
                                        <li className={styles.locationBtn}>Latitude</li>
                                        <li className={styles.locationBtn}>Longitude</li>

                                    </ul>
                                    
                                    </div>
                            </div>
                           
                            <div className={styles.rowItem}>
                                <div className={styles.lable}> Clinic Verified</div>
                                <input className={styles.inputFeild} type="text" />
                            </div>
                            <div style={{ marginTop: '28px' }} >
                                <div className={styles.robotFeild}>
                                    <input type="checkbox" />
                                    <span className={styles.checkHeading}> OK</span>
                                </div>
                                <div className={styles.robotFeild}>
                                    <input type="checkbox" />
                                    <span className={styles.checkHeading}> Reject</span>
                                </div>
                                <div className={styles.robotFeild}>
                                    <input type="checkbox" />
                                    <span className={styles.checkHeading}> Waiting for more info</span>
                                </div>
                            </div>
                            <div style={{ marginTop: '40px', marginBottom: '28px', display: 'flex', justifyContent: 'end' }}>
                                <button className={styles.cancelBtn}>Cancel</button>
                                <button className={styles.saveBtn}>Save</button>

                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}