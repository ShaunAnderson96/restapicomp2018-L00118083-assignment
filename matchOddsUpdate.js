$(document).ready(function(){
   
    window.onload = function() {
        displayData();
        var arr = [];
        // location.reload();
         setInterval(displayData, 5000);
    };

        function displayData() {
            $.getJSON('matchesInPlay.php', function(data){
            arr = data;
           
            $.each(arr, function(index, element){
                //merge objects into one object 
                $.extend(element, {team1short: element.Team1.substring(0,3).toLowerCase()});
                $.extend(element, {team2short: element.Team2.substring(0,3).toLowerCase()});
                $.extend(element, {short1: element.Team1.substring(0,3)}); //get team1 code
                $.extend(element, {short2: element.Team2.substring(0,3)}); //get team2 code
            
            });
        
        var template = $('#template').html();
        var result = Mustache.render(template, {'musData': arr});
            $('#table').html(result);
            });
        }
    
});