$('document').ready(function(){

    $.getJSON("getFilterData.php", function(data){
       //GLOBAL VARIABLE FOR DATA
        var gameData = data;

       //GROUPS VARIABLES 
       //get single piece of data from table
       var plucked = _.pluck(gameData, "description");
       //make the data plucked unique to stop reptition
       var stageData = _.uniq(plucked);

       //
       //pluck teams from table
       var pluckTeam1 = _.pluck(gameData, "Team1");
       var pluckTeam2 = _.pluck(gameData, "Team2");
       //combine 2 arrays into the 1
        var union = pluckTeam1.concat(pluckTeam2);
        union = _.unique(union);
        // console.log(union);

	    var sortedStage = _.each(stageData, function(element){
            $('#stage').append(`<option>${element}</option>`);
            // console.log(sortedStage);
        })
        var sortedTeam = _.each(union, function(element){
            $('#team').append(`<option>${element}</option>`);
            // console.log(sortedTeam);

        })

        $('#team').change(function(){
            $('#stage').val('All');
            var teams = [];
            var selectedVal = $('#team').val();
            // console.log(selectedVal);
            if(selectedVal == 'All'){
                teams = gameData;
                console.log(teams);
            }else{
                var teams1 = _.where(gameData, {Team1: selectedVal});
                var teams2 = _.where(gameData, {Team2: selectedVal});
                teams = _.union(teams1, teams2);
                // console.log(teams);
            }

              musData = [];
              this.Team1 = gameData.Team1;
              this.Team2 = gameData.Team2;
              $.each(teams, function(index, d){
                musData.push({
                    date: d.Date,
                    time: d.Time,
                    stage: d.description,
                    matchid: d.MatchID,
                    team1: d.Team1,
                    team1win: d.Team1Win,
                    team1short: d.Team1.substring(0, 3),
                    team1img: d.Team1.substring(0, 3).toLowerCase(),
                    team2: d.Team2,
                    team2win: d.Team2Win,
                    team2short: d.Team2.substring(0, 3),
                    team2img: d.Team2.substring(0, 3).toLowerCase(),
                    draw: d.Draw,
                    predicition: d.Prediction
                
                });
                // console.log(musData);
                var template = $('#template').html();
                var result = Mustache.render(template, {'musData': musData});
                $('#table').html(result);
            
               });
            });
               ///////////////////////GROUPS///////////////////////////////
               $('#stage').change(function(){
                   $('#team').val('All');
                var groups = [];
                var selectedSVal = $('#stage').val();
                // console.log(selectedVal);
                if(selectedSVal == 'All'){
                    groups = gameData;
                    console.log(groups);
                }else{
                    // var teams1 = _.where(gameData, {Team1: selectedVal});
                    // var teams2 = _.where(gameData, {Team2: selectedVal});
                    groups = _.where(gameData, {description: selectedSVal});
                    console.log(groups);
                }
    
                  musData = [];
                  this.Team1 = gameData.Team1;
                  this.Team2 = gameData.Team2;
                  $.each(groups, function(index, d){
                    musData.push({
                        date: d.Date,
                        time: d.Time,
                        stage: d.description,
                        matchid: d.MatchID,
                        team1: d.Team1,
                        team1win: d.Team1Win,
                        team1short: d.Team1.substring(0, 3),
                        team1img: d.Team1.substring(0, 3).toLowerCase(),
                        team2: d.Team2,
                        team2win: d.Team2Win,
                        team2short: d.Team2.substring(0, 3),
                        team2img: d.Team2.substring(0, 3).toLowerCase(),
                        draw: d.Draw,
                        predicition: d.Prediction
                    
                    });
                    // console.log(musData);
                    var template = $('#template').html();
                    var result = Mustache.render(template, {'musData': musData});
                    $('#table').html(result);
                
                   });
            
        });
       
         
    });
});
