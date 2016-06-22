$(document).ready(function(){
  'use strict';
  $('a').smoothScroll({speed: 2000});
  
 var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
        data: [
            9,
            9,
            7,
            6,
            4
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "Programmation",
        "Réseau",
        "Base de données",
        "Virtualisation",
        "Autres"
    ]
    }
});
});