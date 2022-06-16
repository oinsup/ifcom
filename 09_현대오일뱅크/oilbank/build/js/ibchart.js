$(document).ready(function(){

    //유종별 수송량 일반유
    var ib02 = {
        initialize: function() {
            var initData = {
                "chart": {
                    "plotBackgroundColor": null,
                    "plotBorderWidth": 0,
                    "plotShadow": false
                },
                "colors": ["#017DD1", "#F8B250", "#00AC6C",  "#6947DF",],
                "title": {
                    "text": '일반유',
                    "align": 'center',
                    "verticalAlign": 'middle',
                    "y": 85
                },
                "tooltip": {
                    "pointFormat": '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                "plotOptions": {
                    "pie": {
                        "dataLabels": {
                            "enabled": true,
                            "distance": -50,
                            "style": {
                                "fontWeight": 'bold',
                                "color": 'white',
                            }
                        },
                        "startAngle": -90,
                        "endAngle": 90,
                        "center": ['50%', '75%']
                    }
                },
                "series": this.data
            };

            createIBChart("ib-container02", "myChart02", {
                width: "100%",
                height: "50%"
            });

            myChart02.setOptions(initData);

            this.doAction();
        },
        data: [{
            "type": "pie",
            "name": "일반유 수송량",
            "innerSize": "50%",
            "data": [
                ["현대글로비스", 84],
                ["롯데글로벌로지스(주)", 6],
                ["대한통운", 6],
                ["농협물류(주)", 4],

            ]
        }],
        doAction: function() {
            myChart02.draw();
        }
    };
    ib02.initialize();

    //유종별 수송량 LPG
    var ib03 = {
        initialize: function() {
            var initData = {
                "chart": {
                    "plotBackgroundColor": null,
                    "plotBorderWidth": 0,
                    "plotShadow": false
                },
                "colors": ["#017DD1", "#F8B250"],
                "title": {
                    "text": 'LPG',
                    "align": 'center',
                    "verticalAlign": 'middle',
                    "y": 85
                },
                "tooltip": {
                    "pointFormat": '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                "plotOptions": {
                    "pie": {
                        "dataLabels": {
                            "enabled": true,
                            "distance": -50,
                            "style": {
                                "fontWeight": 'bold',
                                "color": 'white',
                            }
                        },
                        "startAngle": -90,
                        "endAngle": 90,
                        "center": ['50%', '75%']
                    }
                },
                "series": this.data
            };

            createIBChart("ib-container03", "myChart03", {
                width: "100%",
                height: "50%"
            });

            myChart03.setOptions(initData);

            this.doAction();
        },
        data: [{
            "type": "pie",
            "name": "LPG 수송량",
            "innerSize": "50%",
            "data": [
                ["(주)성준로지스", 58],
                ["세일로지스", 42],

            ]
        }],
        doAction: function() {
            myChart03.draw();
        }
    };
    ib03.initialize();


})
