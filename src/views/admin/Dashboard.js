import React, { useState } from "react";
import { useEffect } from "react";
import { data } from "services/dataService";
// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {

  const [dataCurr, setDataCurr] = useState([])
  const [dataPrev, setDataPrev] = useState([])
  
  useEffect( ()=>{
    datafun()
  },[])

 const datafun = async()=>{
  const userId = localStorage.getItem("userId")
  console.log(userId)
  const response = await data(userId)
  console.log(response.dataPrev)
  if (response.dataPrev){
    setDataCurr(response.dataCurr)
    setDataPrev(response.dataPrev)
    console.log(dataCurr)
    console.log(response)
  }
 }

  
//  dataPrev = {dataPrev}, dataCurr = {dataCurr}
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {dataPrev.length ? <CardLineChart dataPrev = {dataPrev} dataCurr = {dataCurr}/> : <div/>}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {dataPrev.length ? <CardBarChart dataPrev = {dataPrev} dataCurr = {dataCurr} /> : <div/>}
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
