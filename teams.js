//get all teams from the database
$(document).ready(function(){
    // var template = $("#teamTemplate").html();
    // var result = Mustache.render(template,{"stations": stations});
    // $("#container").html(result);
    var array = [];
    var url = 'getTeams.php';
    $.getJSON(url, function(data){
        // $.each(data, function(index, data){
        //     $('#table').append('<tr>');
        //     $('#table').append('<td>'+data.Stage+'</td>');
        //     $('#table').append('<td>' + "<img src = 'images/" + data.Name.substring(0,3) +"' width = '40' height = '20'>" + '</td>');
        //     $('#table').append('<td>'+data.Name+'</td>');
        //     $('#table').append('<td>'+data.OverallOdds+'</td>');
        //     $('#table').append('<td>'+data.FIFARanking+'</td>');
        //     $('#table').append('</tr>');
        // })
        
        $.each(data, function (index, data) {
            array.push({
                Stage: data.Stage,
                Code: data.Code,
                Img: data.Name.substring(0,3),
                Name: data.Name,
                OverallOdds: parseFloat(data.OverallOdds),
                FIFARankings: parseFloat(data.FIFARanking)
            });

        });
        var template = $('#template').html();
            var result = Mustache.render(template, {'teams': array});
            $('#content').append(result);
    });
            
})


