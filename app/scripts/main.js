$(document).ready(function(){
  'use strict';
  $('a').smoothScroll({speed: 2000});
	/*$("div.progress").replaceWith( "<canvas id=\"myChart\"></canvas>" );	
  var progressValue[];
  var label[];
  for( var i = 0; i < 5; i++ ) {
    progressValue[i] = parseInt( $("div.progress-bar").attr('aria-valuenow'););
	label[i] = "test"
	}
	
	var ctx = document.getElementById('myChart');
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
		labels: [
		],
		datasets: [
			{
				data: [progressValue[], 100 - progressValue[]],
				backgroundColor: [
					"#FF6384",
					"#FFFFFF"
				],
				hoverBackgroundColor: [
					"#FF6384",
					"#FFFFFF"
				]
			}]
	}
	});*/
	createChart();
	function createChart(){
		$('div.progress').each(function(i, obj) {
			var progressValue = parseInt($(obj).find("div").attr('aria-valuenow'));
			var idEle = $(obj).find("div").attr('id');
			//console.log(idEle);
			//$(obj).replaceWith( "<canvas id=\"" + idEle + "\"></canvas>" );
			var newElement = $( "<canvas></canvas>" );
			$(obj).replaceWith(newElement);
			var myChart = new Chart(newElement, {
				type: 'doughnut',
				data: {
				labels: [
					"test", ""
				],
				datasets: [
					{
						data: [progressValue, 100 - progressValue],
						backgroundColor: [
							"#FF6384",
							"#FFFFFF"
						],
						hoverBackgroundColor: [
							"#FF6384",
							"#FFFFFF"
						]
					}]
			}
			});
		});
	}
});

