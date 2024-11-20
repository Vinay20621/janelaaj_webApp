import React, { useContext, useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import LoginImage from "../../assets/images/login.json";
import styles from "./mystyle.module.css";
import Logo from '../../assets/images/logo.png'
import Capta from '../../assets/images/capta.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { AuthCreateContex } from "../../contex/AuthContex";
import { ToastContainer, toast } from 'react-toastify';
// import ReCAPTCHA from "react-google-recaptcha";
import 'react-toastify/dist/ReactToastify.css';
const url = 'https://techvictus.com:8325'
export default function Index() {
    const [loading, setLoading] = useState(false)
    const [inputFeild, setInputFeild] = useState({
        email: '',
        password: ''
    })
    const [checkbox, setCheckbox] = useState(false)
    const { setAuthorized } = useContext(AuthCreateContex)
    const recaptcha = useRef(null);
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            if ((!inputFeild?.email) || (!inputFeild?.password)) {
                toast("required feild!");
                return
            }
            if (!checkbox) {
                toast('pls check checkbox')
                
                return
            }
            // if(!recaptcha.current.getValue()){
            //     toast.error('Please Submit Captcha')
            //   }
            setLoading(true)
            const res = await axios.post(`${url}/operation/login`, inputFeild)
            if (res?.status === 200) {
                setLoading(false)
                localStorage.setItem('unwinnd-token', JSON.stringify(res?.data))
                navigate('/dashboard')
                setAuthorized(true)
                return
            }
            setLoading(false)
            setAuthorized(false)
            navigate('/')
        } catch (error) {
            console.log(error?.response.data)
            setLoading(false)
            toast(error?.response.data)
            setAuthorized(false)
            navigate('/')
        }

    }
    useEffect(() => {
        const getToken = JSON.parse(localStorage.getItem('unwinnd-token'))
        if (getToken) {
            if (jwtDecode(getToken).exp >= Date.now() / 1000) {
                navigate('/dashboard')
            }
        }

    }, [])

    return (
        <>
        <div>
        <ToastContainer
        toastStyle={{
          backgroundColor: '#FF3B3BCC',
          color: 'white',
        }}
        closeButton={<span style={{ color: 'white' }}>✖</span>}
      />

      </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Lottie animationData={LoginImage} />

                </div>
                <div className={styles.right}>
                    <div className={styles.logo}>
                        <div>
                            <img src={Logo} alt="logo" />
                        </div>
                        <ul style={{ marginLeft: '6px' }}>
                            <li style={{ color: "#121212", fontSize: '22px', fontWeight: 800 }}>Unwinnd</li>
                            <li style={{ color: "#121212", fontSize: '12px', fontWeight: 500 }}>Connecting emotions</li>
                        </ul>
                    </div>
                    <div className={styles.formStyle}>
                        <div>
                            <div className={styles.lable}> Email Address</div>
                            <input className={styles.inputFeild} value={inputFeild.email} onChange={(e) => setInputFeild({ ...inputFeild, email: e.target.value })} type="email" />
                        </div>
                        <div style={{ marginTop: '48px' }}>
                            <div className={styles.lable}> Password</div>
                            <input className={styles.inputFeild} value={inputFeild.password} onChange={(e) => setInputFeild({ ...inputFeild, password: e.target.value })} type="password" />
                        </div>
                        <div className={styles.robotFeild}>
                            <input type="checkbox" defaultChecked={checkbox} onChange={() => setCheckbox((prev) => !prev)} />
                            <span className={styles.heading}> i'm not a robot</span>
                            <span>
                                <img src={Capta} className={styles.imagesCapta} alt="capta" />
                            </span>
                        </div>
                        <div style={{ marginTop: '120px' }}>
                            <span className={styles.btn} onClick={(e) => handleSubmit(e)} disabled={true}> Login</span>
                        </div>
                        {/* <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} ref={recaptcha}/> */}
                    </div>
                </div>
            </div>
        </>
    );
}