
import { useEffect, useState } from 'react';
import './App.css';
import * as d3 from "d3"
import { csv,arc,pie } from 'd3';
import { message } from './message';
import { BarChart } from './barchart';

const csvURL = `https://gist.githubusercontent.com/amit-vis/d6ac94c376bfd6a3d73693ba569d45ba/raw/cssnamedcolor.csv`

const width = 960;
const height = 500;
const centerX = width/2
const centerY = height/2

const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width)

function App() {

  const [data, setData] = useState(null)

  useEffect(()=>{
    csv(csvURL).then(data=>{
      console.log('fetching data!')
      setData(data)
    })
  },[])

  if(!data){
    return <pre>Loading....</pre>
  }
  

  // const circleRadius = 30;
  // const initialMousePosition = {x:width/2, y:height/2 }
  // const [mousePosition, setMousePosition] = useState(initialMousePosition);

  // const handleMouseMove = (event)=>{
  //   const {clientX, clientY} = event;
  //   setMousePosition({x: clientX, y:clientY})
  // }
  console.log(data)
  const colorPie = pie().value(1)
  return (
    <>
    {/* <svg width={width} height={height} onMouseMove={handleMouseMove}>
//       <circle 
//       r={circleRadius}
//       cx={mousePosition.x}
//       cy={mousePosition.y}
//       >

//       </circle>
//     </svg> */}
    {/* <svg width={width} height={height}>
//       <g transform={`translate(${centerX},${centerY})`}>
//     {colorPie(data).map((d, i)=>(<path
//     style={{fill: d.data['\tRGB hex value']}} 
//      {/* <line y2={innerHeight} stroke='black'/> */}
             {/* <text style={{textAnchor: 'middle'}} dy=".71em" y={innerHeight + 3}>{tickValue}</text> */}
 {/*</>d={pieArc({startAngle: i/data.length*2*Math.PI*/}
 {/*  endAngle: (i+1)/data.length*2*Math.PI})}
//       d={pieArc(d)}
//       >
        
//       </path>))}}
      
//     </g>
//     </svg> */}
    <BarChart/>
     </>
  );
}

export default App;
