
google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChart);

      function drawChart()
    {
        var data = google.visualization.arrayToDataTable([
          ['Skill', 'Experience'],
          ['Java/Android', 50],
          ['Visual Basic', 20],
          ['HTML/CSS', 10],
          ['PHP',  10],
          ['Python', 10],

        ]);

        var options =
        {
          pieHole: 0.4,
          pieSliceText: 'label',
          fontSize: 13,
           legend :
            {
              position: 'none',
            },
            chartArea:
            {
                 width:'100%',
                 height:'100%'
            },
          slices:
            {
              0: { color : '#8BC34A' },
              1: { color : '#8BC34A' }
            },

          backgroundColor: 'transparent',
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }
