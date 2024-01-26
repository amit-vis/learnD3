import { useEffect, useState } from 'react';
import './App.css';
import * as d3 from "d3"
import { csv } from 'd3';

const csvURL = `https://gist.githubusercontent.com/amit-vis/c9b7b5a78cab30620e59d00ade0e0ae4/raw/6e48fd409101417e77642041beef00b3544933d4/UN_PPP2022_Output_PopTot.csv`

export const useData = ()=>{
    const [data, setData] = useState(null)
  
    useEffect(()=>{
      const row = d => {
        d.Population = +d['2100']*1000
        return d
      }
      csv(csvURL, row).then(data=>{
        console.log('fetching data!')
        setData(data.slice(0,10))
      })
    },[])
    return data
  }