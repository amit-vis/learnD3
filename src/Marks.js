import { line, curveNatural } from "d3";
import './AxisBottom.css'

export const Marks = ({data, xScale, yScale, xValue, yValue, toolTipFormat, circleRadius})=>
<g className="mark">
<path 
fill="none"
stroke="black"
d={line()
.x(d=>xScale(xValue(d)))
.y(d=> yScale(yValue(d)))
.curve(curveNatural)(data)}/>
{
// data.map(d=>(
// <circle
//   cx={xScale(xValue(d))} 
//   cy={yScale(yValue(d))} 
//   r={circleRadius}
//   >
//     <title>{toolTipFormat(xValue(d))}</title>
//   </circle>
//   ))
}
</g>