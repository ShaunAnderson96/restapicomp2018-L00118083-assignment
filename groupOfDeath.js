window.onload = function(){
// var dataArray = [100, 200, 300, 400, 200, 100, 300];

// var svg = d3.select("#body").append("svg")
//           .attr("height","100%")
//           .attr("width","100%");

// svg.selectAll("rect")
//     .data(dataArray)
//     .enter().append("rect")
//           .attr("height","50")
//           .attr("width",function(d, i) {return (d)})
//           .attr("x", "50")
//           .attr("fill", "steelblue")
//           .attr("y",function(d, i) {return (i * 60)});
$.getJSON('getTeams.php', function(data){
    groupData = data;
    console.log(groupData);
    var display = [];
    var lbl = ['A','B','C','D','E','F','G','H'];
    var svg = d3.select("#body").append('svg').attr("width", "100%").attr("height", "100%");
    
    var a = _.where(groupData, {"Stage" : "A"});
     _.each(a, function(data){
     a = data.FIFARanking;
    });
    var b = _.where(groupData, {"Stage" : "B"});
    _.each(b, function(data){
        b = data.FIFARanking;
    });
    var c = _.where(groupData, {"Stage" : "C"});
    _.each(c, function(data){
        c = data.FIFARanking;
    });
    var d = _.where(groupData, {"Stage" : "D"});
    _.each(d, function(data){
        d = data.FIFARanking;
    });
    var e = _.where(groupData, {"Stage" : "E"});
    _.each(e, function(data){
    e = data.FIFARanking;
    });
    var f = _.where(groupData, {"Stage" : "F"});
    _.each(f, function(data){
    f = data.FIFARanking;
    });
    var g = _.where(groupData, {"Stage" : "G"});
    _.each(g, function(data){
    g = data.FIFARanking;
    });
    var h = _.where(groupData, {"Stage" : "H"});
    _.each(h, function(data){
    h = data.FIFARanking;
    });

    display.push(a, b, c, d, e, f, g, h);
    console.log(display);
    var min = d3.min(display);
    var elements = svg.selectAll("rect").data(display);
    elements.enter().append('rect')
    .attr("x", 25)
    .attr("y", function(d, i){return i*60;})
    .attr("width", function(d, i){return d* 1.5;})
    .attr("height", 50)
    .attr("fill", function(d){
        if(d == min)
            return "red";
        else
        return "steelblue";});

    elements.enter().append('text')
    .attr("x", 0)
    .attr("y", function(d, i){return 30 + i*60;})
    .attr('font-size', '1.2em')
    .attr('fill', 'black')
    .text( function(d, i){ return lbl[i];});
    
    elements.enter().append('text')
    .attr("x", function(d, i){ return (display[i]*1.4)+10;})
    .attr("y", function(d, i){return 30 + i*60;})
    .attr('font-size', '1em')
    .attr('fill', 'white')
    .text(function(d, i){return display[i];});         
});
}