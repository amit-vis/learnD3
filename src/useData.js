import { useEffect, useState } from 'react';
import './App.css';
import * as d3 from "d3"
import { csv } from 'd3';

const csvURL = `https://gist.githubusercontent.com/amit-vis/e77b668ae2278d9c396a7f5547650edd/raw/eec2bb31b892aa48c70186b34b5221e8e90bef03/iris.csv`

export const useData = ()=>{
    const [data, setData] = useState(null)
    console.log(data)
  
    useEffect(()=>{
      const row = d => {
        d.sepal_length = +d.sepal_length;
        d.sepal_width = +d.sepal_width;
        d.petal_length = +d.petal_length;
        d.petal_width = +d.petal_width;
        return d
      }
      csv(csvURL, row).then(setData)
    },[])
    return data
  }