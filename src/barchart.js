import { useEffect, useState } from 'react';
import './App.css';
import * as d3 from "d3"
import { csv,arc,scaleBand,scaleLinear,max,format } from 'd3';
import { message } from './message';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 960;
const height = 500;
const margin = {top: 20, right: 30, bottom: 70, left: 220}

const pieArc = arc()
  .innerRadius(0)
  .outerRadius(width)

export function BarChart(){
  const data = useData();

  if(!data){
    return <pre>Loading....</pre>
  }
  console.log(data[0])

  const innerHeight = height-margin.top - margin.bottom;
  const innerWidth = width-margin.left - margin.right;

  const yValue = d => d.Country;
  const xValue = d => d.Population;

  const siFormat = format('.2s')
  const xAxisTickFormat = tickValue=>siFormat(tickValue).replace("G", "B")

  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0,innerHeight])
    .paddingInner(0.15)

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0,innerWidth])

    console.log(xScale.ticks())
    return(
        <>
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <AxisBottom 
            xScale={xScale} 
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
             />
            <AxisLeft yScale={yScale} />
            <text className='axis-label' 
            x={innerWidth/2} 
            y={innerHeight+60} 
            textAnchor='middle'>Population</text>
            <Marks 
            data={data} 
            xScale={xScale} 
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            toolTipFormat={xAxisTickFormat}
            />
          </g>
        </svg>
        </>
    )
}