"use strict";$(document).ready(function(){$("a").smoothScroll({speed:2e3});var a=document.getElementById("myChart");new Chart(a,{type:"pie",data:{datasets:[{data:[9,9,7,6,4],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],label:"My dataset"}],labels:["Programmation","Réseau","Base de données","Virtualisation","Autres"]}})});