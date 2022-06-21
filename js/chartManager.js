


google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(drawVisualization);

function drawChatStatsVisualization() {

    let mapToVisualization = new Map();
    let dataToVisualization = [];

    converterChatToGoogleMap(bank, mapToVisualization, dataToVisualization);

    console.log("dataToVisualization : ", dataToVisualization);
    console.log("mapToVisualization : ", mapToVisualization);

  //   let dataArray = [
  //     ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
  //     ['2004/05',  165,      938,         522,             998,           450,      614.6],
  //     ['2005/06',  135,      1120,        599,             1268,          288,      682],
  //     ['2006/07',  157,      1167,        587,             807,           397,      623],
  //     ['2007/08',  139,      1110,        615,             968,           215,      609.4],
  //     ['2008/09',  136,      691,         629,             1026,          366,      569.6]
  //   ];

  // // Some raw data (not necessarily accurate)
  // var data = google.visualization.arrayToDataTable(dataArray);

  // console.log("dataArray Chart : ", dataArray);
  // console.log("Data Chart : ", data);

  // var options = {
  //   title : 'Monthly Coffee Production by Country',
  //   vAxis: {title: 'Price'},
  //   hAxis: {title: 'Date'},
  //   seriesType: 'bars',
  //   series: {5: {type: 'line'}}
  // };

  // var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  // chart.draw(data, options);


  var data = new google.visualization.DataTable();
  var data1 = new google.visualization.DataTable();
  var data2 = new google.visualization.DataTable();

  
  data1.addColumn('number', 'X');
  data1.addColumn('number', 'Dogs');
  
  data2.addColumn('number', 'X');
  data2.addColumn('number', 'Dogs');

  data1.addRows([
    [0, 0],   [1, 10],  [2, 23],  [3, 17],  [5, 31]
  ]);

  console.log(data1);

  data2.addRows([
    [0, 0],   [1, 15],  [2, 29],  [3, 21],  [4, 31]
  ]);

  console.log(data2);


  data.addColumn('number', 'X');
  data.addColumn('number', 'Dogs');
  data.addColumn('number', 'Cats');

  data.addRows([
    [0, 0, 0],   [1, 10, 15],  [2, 23, 29],  [3, 17, 21], [4, undefined, 31], [5, 31, undefined],[6, 50, 50]
  ]);

  var options = {
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Popularity'
    },
    backgroundColor: '#f1f8e9',
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)'
    },
    width: 900,
    height: 500
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);


  let arrayToDraw = [
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      undefined],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ];

  data = google.visualization.arrayToDataTable(arrayToDraw);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
