// Variables
const alertCancleButton = document.querySelector("#alert-cancle-button");
const alertNotificationBar = document.querySelector("#alert-notification-bar");

// THE BASE
alertCancleButton.addEventListener("click", ()=> {
    alertNotificationBar.style.display="none";
});

// THE GRAPHS

// Web Traffic graph
var ctx = document.getElementById('dailyTrafic');
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', "S"],

        datasets: [{
            label: 'Number of visitors to website',
            data: [60, 120, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(0, 47, 47)'
            ]
        }]

    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('webTraffic');
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', "S"],

        datasets: [{
            label: 'Number of visitors to website',
            data: [60, 120, 175, 125, 225, 200, 100],
            backgroundColor: [
                'red'
            ]
        }]

    },
    options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
          },
          tooltip: {
            mode: 'index'
          },
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
});