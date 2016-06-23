$(document).ready(function () {
    'use strict';
    $('a').smoothScroll({speed: 2000});
    createChart();
    function createChart() {
        $('div.progress').each(function (i, obj) {
            var progressValue = parseInt($(obj).find('div').attr('aria-valuenow'));
            var texte = $(obj).find('div').text();
            var idEle = $(obj).find('div').attr('id');
            var newElement = $('<canvas height="200" width="635px"></canvas>');
            var backGroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            $(obj).replaceWith(newElement);
            $(newElement).wrap("<div class='col-md-6 col-xs-12 can'></div>");

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
                                backGroundColor
                            ]
                        }]
                },
                options: {
                    tooltipFontSize: 10,
                    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>hrs",
                    percentageInnerCutout: 100,
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

