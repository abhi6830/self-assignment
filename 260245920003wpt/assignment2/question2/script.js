function loadScore()
{

var xhr = new XMLHttpRequest();

xhr.open("GET","score.json",true);

xhr.onreadystatechange = function()
{

if(xhr.readyState==4 && xhr.status==200)
{

var data = JSON.parse(xhr.responseText);

document.getElementById("match").innerHTML = data.match;

document.getElementById("venue").innerHTML = "Venue : " + data.venue;

document.getElementById("team1").innerHTML =
data.team1.name + " : " + data.team1.score + "/" + data.team1.wickets;

document.getElementById("team2").innerHTML =
data.team2.name + " : " + data.team2.score + "/" + data.team2.wickets;

document.getElementById("overs").innerHTML = "Overs : " + data.overs;

}

};

xhr.send();

}

loadScore();

setInterval(loadScore,3000);