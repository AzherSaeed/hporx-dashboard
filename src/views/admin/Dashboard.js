import React , {useState , useEffect} from "react";
import { Switch, Route, Redirect , useHistory } from "react-router-dom";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  const history = useHistory()

  const [tokenVarification, settokenVarification] = useState(false)

  const validaionToken = localStorage.getItem('validation')

  useEffect(() => {
      if(validaionToken){
        settokenVarification(true)
      }
  }, [validaionToken])


  useEffect(() => {
    return () => {
      settokenVarification(false)
      localStorage.removeItem('validation')
    }
  },[])

  useEffect(() => {
    if(validaionToken && tokenVarification){
      history.replace('/auth')
    }
  },[validaionToken , tokenVarification])




  

  



  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
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
