import React, { useContext, useState } from "react";
import styles from "./mystyle.module.css";
import SideBar from "../../component/dashboardSideBar/Index.jsx"
import Card from "../../component/card/Index.jsx"
import PieChart from '../../component/pieChart/Index.jsx';
import Table from "../../component/table/Index.jsx"
import Onboarding from '../onboarding/index.jsx'
import { createMenuContex } from "../../contex/MenuContex.jsx";

const userImage="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"

export default function Index() {
  const { selectedMenu,setSelectedMenu} =useContext(createMenuContex)


  return (
    <div className={styles.container}>
      <SideBar  />
      
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

        {
          selectedMenu?.includes("onBoarding") && 
        <div className={styles.content}>
          <Onboarding />         
        </div>
        }
         {
          selectedMenu?.includes("appointment") && 
        <div className={styles.content}>
          <PieChart />       
        </div>
        }
     
      </div>

    </div>
  );
}
