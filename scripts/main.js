"use strict";$(document).ready(function(){function a(){$("div.progress").each(function(a,r){var e,t,o=parseInt($(r).find("div").attr("aria-valuenow")),d=$(r).find("div").text(),i=$(r).find("div").attr("id"),s=$('<canvas data-toggle="modal" data-target="#myModal'+i+'" height="300" width="700px"></canvas>');switch(i){case"programmation":e="rgba(0, 113, 162, 0.4)",t="rgba(0, 113, 162, 1)";break;case"reseau":e="rgba(0, 150, 0, 0.4)",t="rgba(0, 150, 0, 1)";break;case"bdd":e="rgba(215, 44, 44, 0.4)",t="rgba(215, 44, 44, 1)";break;case"virtualisation":e="rgba(172, 160, 0, 0.4)",t="rgba(172, 160, 0, 1)";break;case"web":e="rgba(172, 160, 236, 0.4)",t="rgba(172, 160, 236, 1)";break;case"autres":e="rgba(130, 149, 38, 0.4)",t="rgba(130, 149, 38, 1)";break;default:e="white"}$(r).replaceWith(s),$(s).wrap("<div class='col-md-4 col-xs-12 can'></div>");new Chart(s,{type:"doughnut",data:{labels:[d,""],datasets:[{data:[o,100-o],backgroundColor:[e,"#FFFFFF"],hoverBackgroundColor:[t,"#FFFFFF"],borderColor:[t,"#FFFFFF"],hoverBorderColor:[e,"#FFFFFF"]}]},options:{maintainAspectRatio:!1,responsive:!0,tooltips:{enabled:!1}}})})}$("a").smoothScroll({speed:2e3}),a()});