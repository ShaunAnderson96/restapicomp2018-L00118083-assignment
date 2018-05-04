window.onload = function(){
var dataArray = [100, 200, 300, 400, 200, 100, 300];

var svg = d3.select("#body").append("svg")
          .attr("height","100%")
          .attr("width","100%");

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
          .attr("height","50")
          .attr("width",function(d, i) {return (d)})
          .attr("x", "50")
          .attr("fill", "steelblue")
          .attr("y",function(d, i) {return (i * 60)});
          
}