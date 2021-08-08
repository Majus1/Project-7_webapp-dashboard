// Variables
const alertCancleButton = document.querySelector("#alert-cancle-button");
const alertNotificationBar = document.querySelector("#alert-notification-bar");

// THE BASE
alertCancleButton.addEventListener("click", ()=> {
    alertNotificationBar.style.display="none";
});



// THE GRAPHS



// ::::: Daily Traffic graph :::::
var ctx = document.getElementById('dailyTrafic');
var dailyTraficChart = new Chart(ctx, {
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
        },
        plugins: {
            legend: {
                display: false
            }
            
        }
    }
});


// ::::: Web Traffic graph :::::
var chartCanvas2 = document.querySelector("#webTraffic");
var webTrafficChart = new Chart(chartCanvas2, {
    type: "line",
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', "27-3", "4-10", "11-17", "18-24", "25-31"],

        datasets: [{
            label: "Houryl",
            data : [600, 1200, 1750, 1250, 2250, 2000, 1000, 2000, 1000, 2600, 1300],
            backgroundColor:['rgba(0, 47, 47, 0.7)'],
            borderColor: "rgba(0, 47, 47, 0.7)",
            fill: true
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// ::::: The daily traffic graph tabs :::::
const hourylTab = document.querySelector("#hourly-tab").focus();
const dailylTab = document.querySelector("#daily-tab");
const weeklylTab = document.querySelector("#weekly-tab");
const monthlylTab = document.querySelector("#monthly-tab");
