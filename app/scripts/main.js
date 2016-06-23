$(document).ready(function () {
    'use strict';
    $('a').smoothScroll({speed: 2000});
    createChart();
    function createChart() {
        $('div.progress').each(function (i, obj) {
            var progressValue = parseInt($(obj).find('div').attr('aria-valuenow'));
            var texte = $(obj).find('div').text();
            var idEle = $(obj).find('div').attr('id');
            var newElement = $('<canvas data-toggle="modal" data-target="#myModal' + idEle + '" height="300" width="700px"></canvas>');
            var backGroundColor;
            var borderColor;
            switch (idEle) {
                case 'programmation':
                    backGroundColor = 'rgba(0, 113, 162, 0.4)';
                    borderColor = 'rgba(0, 113, 162, 1)';
                    break;
                case 'reseau':
                    backGroundColor = 'rgba(0, 150, 0, 0.4)';
                    borderColor = 'rgba(0, 150, 0, 1)';
                    break;
                case 'bdd':
                    backGroundColor = 'rgba(215, 44, 44, 0.4)';
                    borderColor = 'rgba(215, 44, 44, 1)';
                    break;
                case 'virtualisation':
                    backGroundColor = 'rgba(172, 160, 0, 0.4)';
                    borderColor = 'rgba(172, 160, 0, 1)';
                    break;
                case 'web':
                    backGroundColor = 'rgba(172, 160, 236, 0.4)';
                    borderColor = 'rgba(172, 160, 236, 1)';
                    break;
                case 'autres':
                    backGroundColor = 'rgba(130, 149, 38, 0.4)';
                    borderColor = 'rgba(130, 149, 38, 1)';
                    break;
                default:
                    backGroundColor = 'white';
            }
            $(obj).replaceWith(newElement);
            $(newElement).wrap('<div class=\'col-md-4 col-xs-12 can\'></div>');
            var myChart = new Chart(newElement, {
                type: 'doughnut',
                data: {
                    labels: [
                        texte, ''
                    ],
                    datasets: [
                        {
                            data: [progressValue, 100 - progressValue],
                            backgroundColor: [
                                backGroundColor,
                                '#FFFFFF'
                            ],
                            hoverBackgroundColor: [
                                borderColor
                                ,'#FFFFFF'
                            ],
                            borderColor: [
                                borderColor, '#FFFFFF'
                            ],
                            hoverBorderColor:[
                                backGroundColor,'#FFFFFF'
                            ]
                            
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    tooltips: {
                        enabled: false
                    }
                }
            });
        });
    }
});

