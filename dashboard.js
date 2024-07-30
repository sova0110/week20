//var popCanvas = $("#popChart");
//let popCanvas = document.getElementById("popChart");
//Столбчатый график библотека Chart.js
let popCanvas = document.getElementById("popChart").getContext("2d");

let barChart = new Chart(popCanvas, {
    type: 'bar',
    data: {
      labels: ["Утренние пробежки", "Встречи с друзьями", "Прочитано книг", "Силовые тренировки", "Выполнено ДЗ", "Встречено рассветов", "Прогулки в парке"],
      datasets: [{
        label: 'Достижения',
        data: [7, 2, 1, 3, 1, 2, 4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(19, 99, 132, 0.6)',
        ]
      }]
    },
    options:{
      responsive: false,
      scales: {
        y: {
            beginAtZero: true
        }}
    }
  })
//узловой график бибиотека cytoscape
let cy = cytoscape({
  container: document.getElementById('cy'),
  elements: [{group:'nodes', data:{id:'n1', name:'Постановка цели'}, position: {x:50, y:200}},
  {group:'nodes', data:{id:'n2', name:'Анализ ресурсов'}, position:{x:200, y:100}},
  {group:'nodes', data:{id:'n3', name:'Планирование'}},
  {group:'nodes', data:{id:'n4', name:'ДЕЙСТВИЕ'}},
  {group:'nodes', data:{id:'n5', name:'Настрой на успех'}},
  {group:'edges', data:{id:'e0', source: 'n1', target: 'n2'}},
  {group:'edges', data:{id:'e1', source: 'n1', target: 'n3'}},
  {group:'edges', data:{id:'e2', source: 'n1', target: 'n4'}},
  {group:'edges', data:{id:'e3', source: 'n1', target: 'n5'}},
],
  
  style:[
    {selector: 'node',
  style: {
    'backgroundColor': 'lightblue',
    'label':'data(name)',
  }}
  ]
});
//Линейный график библотека Chart.js
let forexCanvas = document.getElementById("randForex");


let forexData = {
  labels: ["23.07.2024", "24.07.2024", "25.07.2024", "26.07.2024", "27.07.2024"],
  datasets: [{
    label: "Курс (руб.)",
    data: [4.80947, 4.74944, 4.70852, 4.61464, 4.68444],
  }]
};

let chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

let lineChart = new Chart(forexCanvas, {
  type: 'line',
  data: forexData,
  options: chartOptions
});

//
let lineDiv = document.getElementById('line-chart');

let traceA = {
  x: ["23.07.2024", "24.07.2024", "25.07.2024", "26.07.2024", "27.07.2024"],
  y: [4.80947, 4.74944, 4.70852, 4.61464, 4.68444],
  type: 'scatter'
};
let traceB = {
  x: ["23.07.2024", "24.07.2024", "25.07.2024", "26.07.2024", "27.07.2024"],
  y: [11.9740, 11.9062, 11.8263, 11.7408, 11.7296],
  type: 'scatter'
};
let data = [traceA, traceB];

let layout = {
  title:'Динамика курсов юань и рэнд (руб)'
};

Plotly.plot( lineDiv, data, layout );


