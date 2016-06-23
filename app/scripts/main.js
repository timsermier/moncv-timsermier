$(document).ready(function () {
    'use strict';
    $('a').smoothScroll({speed: 2000});
    createChart();
    function createChart() {
        $('div.progress').each(function (i, obj) {
            var progressValue = parseInt($(obj).find('div').attr('aria-valuenow'));
            var texte = $(obj).find('div').text();
            var idEle = $(obj).find('div').attr('id');
            var newElement = $('<canvas data-toggle="modal" data-target="#myModal' + idEle + '" height="200" width="635px"></canvas>');
            var backGroundColor;
            switch (idEle) {
                case 'programmation':
                    backGroundColor = '#5bc0de';
                    break;
                case 'reseau':
                    backGroundColor = '#5cb85c';
                    break;
                case 'bdd':
                    backGroundColor = '#d9534f';
                    break;
                case 'virtualisation':
                    backGroundColor = '#fdc236';
                    break;
                case 'autres':
                    backGroundColor = '#878B00';
                    break;
                default:
                    backGroundColor = 'white';
            }
            $(obj).replaceWith(newElement);
            $(newElement).wrap('<div class=\'col-md-6 col-xs-12 can\'></div>');
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

