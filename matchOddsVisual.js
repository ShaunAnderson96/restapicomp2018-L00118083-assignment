$('document').ready(function(){

	$.getJSON("getFilterData.php", function(data){
		console.log(data);

        var stages = _.pluck(data,"description");
        // console.log(stages);

		var svg = d3.select('#body').selectAll("rect").data(data);
        
        //display stages
		svg.enter().append("text")
        .text(function(d) {return d.description; })
        .attr("x", 10)
        .attr("y", function(d,i) {return i * (2000 / stages.length) + 20;
        });
        //HOME TEAM DATA
        //display home team
        svg.enter().append("text")
        .attr("text-anchor", "end")
        .attr("x", 215)
        .attr("y", function(d,i){
        	return i * (2000 / data.length) + 20;
        })
        .text(function(d) {return d.Team1});

        //display home team flag
        svg.enter().append("image")
        .attr('xlink:href', function(d){
        	return `images/` + d.Team1.substring(0,3);
        })
        .attr("x", 220)
        .attr("y", function(d,i){
        	return i * (2000 / data.length) + 6;
        })
        .attr("width", "30")
        .attr("height", "20");

        //display home team odds
        svg.enter().append("rect")
        .attr("x", 260)
        .attr("y", function(d,i){
        	return i * (2000 / data.length) + 7.5;
        })
    
        .attr("width", function(d){
            return (d.Team2Win/(d.Team2Win + d.Draw + d.Team1Win)*100)*500/100 })
        .attr("height", "15")
        .attr("fill", "steelblue");

        //display draw odds
        svg.enter().append("rect")
        .attr("x", function(d){
        	return 260 + (d.Team2Win/(d.Team2Win + d.Draw + d.Team1Win)*100)*500/100
        })
        .attr("y", function(d,i){
        	return i * (2000 / data.length) + 7.5;
        })
        .attr("width", function(d){
        	return (d.Draw/(d.Team1Win + d.Draw + d.Team2Win)*100)*500/100
        })
        .attr("height", "15")
        .attr("fill", "lightgrey");
        //AWAY TEAM DATA
        //Away Team Win Odds
        svg.enter().append("rect")
        .attr("x", function(d){
        	return 260 + ((d.Team2Win/(d.Team2Win + d.Draw + d.Team1Win)*100)*500/100) + ((d.Draw/(d.Team1Win + d.Draw + d.Team2Win)*100)*500/100)
        })
        .attr("y", function(d,i){
        	return i * (2000 / data.length) + 7.5;
        })
        .attr("width", function(d){
        	return (d.Team1Win/(d.Team1Win + d.Draw + d.Team2Win)*100)*500/100
        })
        .attr("height", "15")
        .attr("fill", "blue");

        //Away Team Name
        svg.enter().append("text")
        .attr("x", 810)
        .attr("y", function(d,i){
        	return i * (2000 / data.length) + 20;
        })
        .text(function(d) {return d.Team2});

        //Away Team Flag
        svg.enter().append("image")
        .attr('xlink:href', function(d){
        	return `images/` + d.Team2.substring(0,3);
        })
        .attr("x", 770)
        .attr("y", function(d,i){
        	return i * (2000 / data.length) + 7.5;
        })
        .attr("width", "30")
        .attr("height", "20");
    });
});