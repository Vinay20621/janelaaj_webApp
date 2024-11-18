import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const PieChart = () => {
    const data = {
        labels: ['Completed Appointments', 'Upcoming Appointments', 'Cancelled Appointments'],
        datasets: [
            {
                data: [40, 34, 33],
                backgroundColor: ['#5A33CF', '#B175F5', '#A557FF'],
                borderColor: '#F2F0F7',  
                borderWidth: 4,   
            },
        ],
    };
    const dataRight = {
        labels: ['Offline', 'Online'],
        datasets: [
            {
                data: [40, 60],
                backgroundColor: ['#502E7F', '#7948BB'],
                borderColor: '#F2F0F7',  
                borderWidth: 4,   
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: false, 
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div  style={styles.container}> 
        <div style={styles.leftContent}>
        <div style={styles.heading}>
        Total Appointments Booked  : 100
            </div>
        <div style={styles.chartContainer}>
            <div style={styles.header}>
                <span style={styles.headerText} >Pie</span>
            </div>
            <div style={styles.chartWrapper}>
                <div style={{width:'40%'}}>
                <Pie data={data} options={options} />
                </div>
                <div style={styles.legend}>
                    <p style={styles.legendItem}><span style={styles.dot('#5A33CF')}></span> Completed Appointments 40%</p>
                    <p style={styles.legendItem}><span style={styles.dot('#B175F5')}></span> Upcoming Appointments 34%</p>
                    <p style={styles.legendItem}><span style={styles.dot('#A557FF')}></span> Cancelled Appointments 33%</p>
                </div>
            </div>
        </div>
        <div><span style={styles.arrowBtn}>Turn to bar graph <MdOutlineKeyboardArrowDown size={30}/></span></div>
        <div>
           <ul style={styles.btnList}>
            <li style={styles.list}> <button style={styles.btn1}>Completed Appointments</button></li>
            <li > <button style={styles.btn2}>Upcoming Appointments</button></li>
            <li > <button style={styles.btn3}>Cancelled Appointments</button></li>
            </ul> 
        </div>     
            </div> 
        
            <div style={styles.rightContent}>
        <div style={styles.heading}>
        Average Appointment Rating :  
        <FaStar color='#FFC700' style={{marginLeft:'2px'}} />
        <FaStar color='#FFC700' />
        <FaStar color='#FFC700' />
        <FaStar color='#FFC700' />
        <FaStar color='#FFC700' />

            </div>
        <div style={styles.chartContainer}>
            <div style={styles.header}>
                <span style={styles.headerText}>Pie</span>
            </div>
            <div style={styles.chartWrapper}>
                <div style={{width:'60%'}}>
                <Pie data={dataRight} options={options} />
                </div>
                <div style={styles.legend}>
                    <p style={styles.legendItem}><span style={styles.dot('#5A33CF')}></span> Offline 40%</p>
                    <p style={styles.legendItem}><span style={styles.dot('#B175F5')}></span> Online 60%</p>
                </div>
            </div>
        </div>
        <div><span style={styles.arrowBtn}>Turn to bar graph <MdOutlineKeyboardArrowDown size={30}/></span></div>
        <div>
           <ul style={styles.btnList}>
            <li style={styles.list}> <button style={styles.btn11}>Offline</button></li>
            <li > <button style={styles.btn12}>Online</button></li>
            </ul> 
        </div>     
            </div> 

           


        </div>
    );
};
const styles = {
    leftContent:{
        width:'50%',
    },
    rightContent:{
        width:'40%',
    },
    container:{
        display:'flex',
        justifyContent:'space-between',
        margin:'22px'
    },
    btnList:{
        listStyle: 'none',
    },
    heading:{
        fontSize:'1rem',
        fontWeight:700,
        display:'flex',
        alignItems:'center'
    },
    btn1:{
        padding:'10px',
        backgroundColor:'#502E7F',
        marginTop:'10px',
        color:'#ffffff',
        border: "2px solid transparent",
        borderRadius:'8px'
    },
    btn2:{
        padding:'10px',
        backgroundColor:'#9874D3',
        marginTop:'10px',
        color:'#ffffff',
        border: "2px solid transparent",
        borderRadius:'8px'
    },
    btn3:{
        padding:'10px',
        backgroundColor:'#7948BB',
        marginTop:'10px',
        color:'#ffffff',
        border: "2px solid transparent",
        borderRadius:'8px'
    },
    btn11:{
        padding:'10px',
        backgroundColor:'#502E7F',
        marginTop:'10px',
        color:'#ffffff',
        border: "2px solid transparent",
        borderRadius:'8px'
    },
    btn12:{
        padding:'10px',
        backgroundColor:'#7948BB',
        marginTop:'10px',
        color:'#ffffff',
        border: "2px solid transparent",
        borderRadius:'8px'
    },
    chartContainer: {
        padding: '20px',
        borderRadius: '24px',
        backgroundColor: '#F2F0F7',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
        marginTop:'10px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',     
        borderBottom: "1.4px solid #A6A6A6"   
    },
    headerText: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#5A33CF',
    },
    arrowBtn:{
        display: 'flex',
        alignItems: 'center',
        color:'#757575',
        marginTop:'12px'
    },
    chartWrapper: {
        display:'flex',
        alignItems: 'center',
    },
    legendItem: {
        fontSize: '12px',
        color: '#5A33CF',
        marginBottom: '6px',
    },
    dot: (color) => ({
        display: 'inline-block',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: color,
        marginRight: '8px',
    }),
};

export default PieChart;

