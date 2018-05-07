<?php
    $conn = mysqli_connect('localhost', 'root', '');
    mysqli_select_db($conn, 'worldcup2018');
    $sql = "select * from matches";
    $data = mysqli_query($conn, $sql);
?>
<html>
<head>
  <script type="text/javascript" src="jquery-3.3.1.min.js"></script> 
  <script type="text/javascript" src="underscore.js"></script> 
  <!-- <script type="text/javascript" src="mustache.js"></script> -->
  <script src="matchOddsUpdate.js"></script>
</head>
<body>
  <nav>
    <a href="teams.html">Teams</a> |
    <a href="groups.html">Groups</a> |
    <a href="filterMatches.html">Filter Matches</a> |
    <a href="matchesInPlay.html">Matches in Play</a> |
    <a href="matchOddsUpdate.php">Match Odds Update</a> |
    <a href="groupOfDeath.html">Group of Death Visual</a> |
    <a href="teams.html">Match Odds Visual</a> 
</nav>
<hr>
<h1 id = "header">Match Odds Update [PHP]</h1>

<table border=1>
    <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Stage</th>
        <th></th>
        <th>Team1</th>
        <th>1</th>
        <th></th>
        <th>X</th>
        <th></th>
        <th>2</th>
        <th></th>
        <th>Team2</th>
        <th></th>
        <th>Prediction</th>
    </tr>

    <?php
        while($row = mysqli_fetch_array($data)) {
            echo"<tr><form action= updateOdds.php method=post>";
            echo "<td>". $row['Date']."</td>";
            echo "<td>". $row['Time']."</td>";
            echo "<td>". $row['Stage']."</td>";
            echo "<td><img style='height: 20px; width: 40px' src='images/". strtolower(substr($row['Team1'],0,3))."'></td>";
            echo "<td>". $row['Team1']."</td>";
            echo "<td><input type= text size='10' name= team1win value='". $row['Team1Win']."'></td>";
            echo "<td><input type= submit size='10' value='Update!'></td>";
            echo "<td><input type= text size='10' name=draw value='". $row['Draw']."'></td>";
            echo "<td><input type= submit size='10' value='Update!'></td>";
            echo "<td><input type= text size='10' name= team2win value='". $row['Team2Win']."'></td>";
            echo "<td><input type= submit size='10' value='Update!'></td>";
            echo "<td>". $row['Team2']."</td>";
            echo "<td><img style='height: 20px; width: 40px' src='images/". strtolower(substr($row['Team2'],0,3))."'></td>";
            echo "<td>". $row['Prediction']."</td>";
            echo "<input type=hidden name=id value='".$row['MatchID']."'>";
            echo "</form></tr>";
        }
    
    ?>
</table>


<!-- <script id="template" type="text/template">
    <table border =1>
        <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Stage</th>
            <th></th>
            <th>Team 1</th>
            <th>1</th>
            <th></th>
            <th>X</th>
            <th>2</th>
            <th></th>
            <th>Team2</th>
            <th></th>
            <th>Predicition</th>
        </tr>
        {{#musData}}
        <tr>
            <td>{{Date}}</td>
            <td>{{Time}}</td>
            <td>{{description}}</td>
            <td><img src="images/{{team1short}}" width="40" height= "20"></td>
            <td>{{Team1}} ({{short1}})</td>
            <td><input value="{{Team1Win}}"></input></td>
            <td><button id="one">Update!</button></td>
            <td><input value="{{Draw}}"></input></td>
            <td><button id="draw">Update!</button></td>
            <td><input value="{{Team2Win}}"></input></td>
            <td><button id="2">Update!</button></td>
            <td>{{Team2}} ({{short2}})</td>
            <td><img src="images/{{team2short}}" width="40" height= "20"></td>
            <td>{{Prediction}}</td>
        </tr>
        {{/musData}}
    </table>
</script> -->

<div id="table" style="border: 1px;"></div>

<hr>
<footer style="text-align:center;margin-top:2px">Shaun Anderson | L00118083 &copy; 2018</footer>
</body>
</html>
