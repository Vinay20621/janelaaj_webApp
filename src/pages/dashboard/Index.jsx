import React, { useState } from "react";
import styles from "./mystyle.module.css";
import SideBar from "../../component/dashboardSideBar/Index.jsx"
import Card from "../../component/card/Index.jsx"
import PieChart from '../../component/pieChart/Index.jsx';
import Table from "../../component/table/Index.jsx"

const userImage="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"

export default function Index() {
  const [isPieChart,setIsPieChart]=useState(false)
  const [isCard,setIsCard]=useState(true)
  const handlePieChart=(val)=>setIsPieChart(val)
  const handleIsCard=(val)=>setIsCard(val)


  return (
    <div className={styles.container}>
      <SideBar isPieChart={isPieChart} isCard={isCard} handlePieChart={handlePieChart} handleIsCard={handleIsCard} />
      
      <div className={styles.rightContent}>
        <div className={styles.header}>
          <input
            type="text"
            placeholder="Search Here"
            className={styles.searchBar}
          />
          <div className={styles.headerLeft}>
            <button className={styles.btn}>Overview</button>
            <img src={userImage} alt="userImage" className={styles.imges} />
          </div>
        </div>        
        
        {isCard && 
        <div className={styles.content}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
}
      {isPieChart && <PieChart />}
     
      </div>

    </div>
  );
}
