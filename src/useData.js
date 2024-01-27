import { useEffect, useState } from 'react';
import './App.css';
import * as d3 from "d3"
import { csv } from 'd3';

const csvURL = `https://gist.githubusercontent.com/amit-vis/1619399752a9aa589bb00501f44506b7/raw/9e392bf69efa3fec6cc1c4511c60e7715073ee2e/week_temperature_sf.csv`

export const useData = ()=>{
    const [data, setData] = useState(null)
    console.log(data)
  
    useEffect(()=>{
      const row = d => {
        d.temprature = +d.temprature;
        d.timestamp = new Date(d.timestamp);
        return d
      }
      csv(csvURL, row).then(setData)
    },[])
    return data
  }