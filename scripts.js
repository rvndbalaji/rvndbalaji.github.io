
google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChart);

      function drawChart()
    {
        var data = google.visualization.arrayToDataTable([
          ['Skill', 'Experience'],
          ['Java | Android', 22],
          ['C | C++', 12],
          ['Visual Basic', 12],
          ['HTML 5',11],
          ['CSS 3', 11],
          ['JavaScript', 10],
          ['SQL', 9],
          ['PHP', 6.5],
          ['Python', 6.5],
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
              0: { color : '#EC2025', offset : 0.1 },
              1: { color : '#607D8B', offset : 0.08 },
              2: { color : '#AB47BC', offset : 0.07 },
              3: { color : '#E44D26', offset : 0.06 },

              4: { color : '#008DD2', offset : 0.05 },

              5: { color : '#FFEB3B', offset : 0.04 },
              6: { color : '#8BC34A', offset : 0.03 },
              7: { color : '#9575CD', offset : 0.02 },
              8: { color : '#4DB6AC', offset : 0.0 },

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
