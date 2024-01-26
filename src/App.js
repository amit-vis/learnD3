
import { useEffect, useState } from 'react';
import './App.css';
import * as d3 from "d3"
import { csv,scaleLinear,max,format, extent, arc } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 960;
const height = 500;
const margin = {top: 20, right: 30, bottom: 70, left: 90}

const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width)
function App() {
  const data = useData();

  if(!data){
    return <pre>Loading....</pre>
  }
  console.log(data[0])

  const innerHeight = height-margin.top - margin.bottom;
  const innerWidth = width-margin.left - margin.right;

  const xValue = d => d.sepal_length;
  const xAxisLabel = "Sepal Length";
  const xAxisLabelOffset = 50;

  const yValue = d => d.sepal_width;
  const yAxisLabel = "Sepal Width";
  const yAxisLabelOffset = 40

  const siFormat = format('.2s')
  const xAxisTickFormat = tickValue=>siFormat(tickValue).replace("G", "B")

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0,innerWidth])
    .nice()

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0,innerHeight])

    console.log(xScale.ticks())
  return (
    <>
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>

            <AxisBottom 
            xScale={xScale} 
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffSet={5}
             />
            <AxisLeft 
            yScale={yScale}
            innerWidth={innerWidth}
            tickOffSet={5}
             />

            <text className='axis-label'
            textAnchor='middle'
            transform={`translate(${-yAxisLabelOffset},${innerHeight/2}) rotate(-90)`}
            >{yAxisLabel}</text>

            <text className='axis-label' 
            x={innerWidth/2} 
            y={innerHeight+xAxisLabelOffset} 
            textAnchor='middle'>{xAxisLabel}</text>
            <Marks 
            data={data} 
            xScale={xScale} 
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            toolTipFormat={xAxisTickFormat}
            circleRadius={7}
            />
          </g>
        </svg>
        </>
  );
}

export default App;
