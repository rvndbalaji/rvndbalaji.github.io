
google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChart);

      function drawChart()
    {
        var data = google.visualization.arrayToDataTable([
          ['Skill', 'Experience'],
          ['Java | Android', 49],
          ['HTML | CSS | JS | SQL', 20],
          ['Visual Basic', 16],
          ['PHP', 8],
          ['Python', 7],
        ]);

        var options =
        {
          pieHole: 0.35,
          pieSliceText: 'label',
          fontSize: 13,

           legend :
            {
              position: 'labeled',
              textStyle:
                {
                   color: 'white',
                   fontName: 'Russo One' ,
                   bold: false,
                },
                alignment: 'center'
            },
            chartArea:
            {
                 width:'90%',
                 height:'90%'
            },
          slices:
            {
              0: { color : '#F44336', offset : 0.1 },
              1: { color : '#4CAF50', offset : 0.075 },
              2: { color : '#7E57C2', offset : 0.05 },
              3: { color : '#FFEB3B', offset : 0.025 },
              4: { color : '#2196F3', offset : 0.0 },
            },
            pieSliceTextStyle :
            {
                color: 'black',
                fontName: 'Russo One',
                fontSize : 10
            },

          backgroundColor: 'transparent',
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }
