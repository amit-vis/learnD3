import * as d3 from "d3"
export const message = data =>{
    let message = '';
    message = message + Math.round(d3.csvFormat(data).length/1024)+ 'kb';
    message = message + data.length + 'rows/n';
    message = message + data.columns.length + 'columns';
    return message
  }