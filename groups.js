$('document').ready(function(){

        var url = 'getTeamGroups.php';
       
        $.getJSON(url, function(data){
            var a = _.where(data, {"Stage" : "A"});
                 _.each(a, function(d){
                    $('#groupA').append('<tr>');
                    $('#groupA').append('<td>' + "<img src = 'images/" + d.Team.substring(0,3) +"' width = '40' height = '20'>" + '</td>');
                    $('#groupA').append('<td>'+d.Team+ '(' + d.Team.substring(0,3) + ')' +'</td>');
                    $('#groupA').append('<td>'+d.Played+'</td>');
                    $('#groupA').append('<td>'+d.W+'</td>');
                    $('#groupA').append('<td>'+d.D+'</td>');
                    $('#groupA').append('<td>'+d.L+'</td>');
                    $('#groupA').append('<td>'+d.Pts+'</td>');
                    $('#groupA').append('</tr>');
                })
            var b = _.where(data, {"Stage" : "B"});
                 _.each(b, function(d){
                    $('#groupB').append('<tr>');
                    $('#groupB').append('<td>' + "<img src = 'images/" + d.Team.substring(0,3) +"' width = '40' height = '20'>" + '</td>');
                    $('#groupB').append('<td>'+d.Team+ '(' + d.Team.substring(0,3) + ')' +'</td>');
                    $('#groupB').append('<td>'+d.Played+'</td>');
                    $('#groupB').append('<td>'+d.W+'</td>');
                    $('#groupB').append('<td>'+d.D+'</td>');
                    $('#groupB').append('<td>'+d.L+'</td>');
                    $('#groupB').append('<td>'+d.Pts+'</td>');
                    $('#groupB').append('</tr>');
                })
             var c = _.where(data, {"Stage" : "C"});
                 _.each(c, function(d){
                    $('#groupC').append('<tr>');
                    $('#groupC').append('<td>' + "<img src = 'images/" + d.Team.substring(0,3) +"' width = '40' height = '20'>" + '</td>');
                    $('#groupC').append('<td>'+d.Team+ '(' + d.Team.substring(0,3) + ')' +'</td>');
                    $('#groupC').append('<td>'+d.Played+'</td>');
                    $('#groupC').append('<td>'+d.W+'</td>');
                    $('#groupC').append('<td>'+d.D+'</td>');
                    $('#groupC').append('<td>'+d.L+'</td>');
                    $('#groupC').append('<td>'+d.Pts+'</td>');
                    $('#groupC').append('</tr>');
                })
            var d = _.where(data, {"Stage" : "D"});
                 _.each(d, function(d){
                    $('#groupD').append('<tr>');
                    $('#groupD').append('<td>' + "<img src = 'images/" + d.Team.substring(0,3) +"' width = '40' height = '20'>" + '</td>');
                    $('#groupD').append('<td>'+d.Team+ '(' + d.Team.substring(0,3) + ')' +'</td>');
                    $('#groupD').append('<td>'+d.Played+'</td>');
                    $('#groupD').append('<td>'+d.W+'</td>');
                    $('#groupD').append('<td>'+d.D+'</td>');
                    $('#groupD').append('<td>'+d.L+'</td>');
                    $('#groupD').append('<td>'+d.Pts+'</td>');
                    $('#groupD').append('</tr>');
                })
            var e = _.where(data, {"Stage" : "E"});
                 _.each(e, function(d){
                    $('#groupE').append('<tr>');
                    $('#groupE').append('<td>' + "<img src = 'images/" + d.Team.substring(0,3) +"' width = '40' height = '20'>" + '</td>');
                    $('#groupE').append('<td>'+d.Team+ '(' + d.Team.substring(0,3) + ')' +'</td>');
                    $('#groupE').append('<td>'+d.Played+'</td>');
                    $('#groupE').append('<td>'+d.W+'</td>');
                    $('#groupE').append('<td>'+d.D+'</td>');
                    $('#groupE').append('<td>'+d.L+'</td>');
                    $('#groupE').append('<td>'+d.Pts+'</td>');
                    $('#groupE').append('</tr>');
                })

             var f = _.where(data, {"Stage" : "F"});
                _.each(f, function(d){
                   $('#groupF').append('<tr>');
                   $('#groupF').append('<td>' + "<img src = 'images/" + d.Team.substring(0,3) +"' width = '40' height = '20'>" + '</td>');
                   $('#groupF').append('<td>'+d.Team+ '(' + d.Team.substring(0,3) + ')' +'</td>');
                   $('#groupF').append('<td>'+d.Played+'</td>');
                   $('#groupF').append('<td>'+d.W+'</td>');
                   $('#groupF').append('<td>'+d.D+'</td>');
                   $('#groupF').append('<td>'+d.L+'</td>');
                   $('#groupF').append('<td>'+d.Pts+'</td>');
                   $('#groupF').append('</tr>');
               })
            var g = _.where(data, {"Stage" : "G"});
                _.each(g, function(d){
                   $('#groupG').append('<tr>');
                   $('#groupG').append('<td>' + "<img src = 'images/" + d.Team.substring(0,3) +"' width = '40' height = '20'>" + '</td>');
                   $('#groupG').append('<td>'+d.Team+ '(' + d.Team.substring(0,3) + ')' +'</td>');
                   $('#groupG').append('<td>'+d.Played+'</td>');
                   $('#groupG').append('<td>'+d.W+'</td>');
                   $('#groupG').append('<td>'+d.D+'</td>');
                   $('#groupG').append('<td>'+d.L+'</td>');
                   $('#groupG').append('<td>'+d.Pts+'</td>');
                   $('#groupG').append('</tr>');
               })
             var h = _.where(data, {"Stage" : "H"});
                _.each(h, function(d){
                   $('#groupH').append('<tr>');
                   $('#groupH').append('<td>' + "<img src = 'images/" + d.Team.substring(0,3) +"' width = '40' height = '20'>" + '</td>');
                   $('#groupH').append('<td>'+d.Team+ '(' + d.Team.substring(0,3) + ')' +'</td>');
                   $('#groupH').append('<td>'+d.Played+'</td>');
                   $('#groupH').append('<td>'+d.W+'</td>');
                   $('#groupH').append('<td>'+d.D+'</td>');
                   $('#groupH').append('<td>'+d.L+'</td>');
                   $('#groupH').append('<td>'+d.Pts+'</td>');
                   $('#groupH').append('</tr>');
               })

            
        })
       
    });

    