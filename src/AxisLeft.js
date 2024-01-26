export const AxisLeft = ({yScale, innerWidth, tickOffSet})=>
yScale.ticks().map(tickValue=> (
  <g className="tick" transform={`translate(0,${yScale(tickValue)})`}>
  <line x2={innerWidth}/>
  <text
  key={tickValue} 
  style={{textAnchor: 'end'}} 
  x={tickOffSet} dy=".32em" 
  >{tickValue}</text>
  </g>
))