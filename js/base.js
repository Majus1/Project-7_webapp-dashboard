// Variables
const alertCancleButton = document.querySelector("#alert-cancle-button");
const alertNotificationBar = document.querySelector("#alert-notification-bar");
// ::::: The overall traffic graph tabs :::::
const chronologicalTabBar = document.querySelector("#chronological-tab-bar");
const hourylTab = document.querySelector("#hourly-tab");
const dailylTab = document.querySelector("#daily-tab");
const weeklylTab = document.querySelector("#weekly-tab");
const monthlylTab = document.querySelector("#monthly-tab");
hourylTab.focus();


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

// ::::: Web Traffic graph 1 :::::
function createHourlyTrafficGraph() {
    var chartCanvas2 = document.querySelector("#hourlyTraffic");
    var webTrafficChart = new Chart(chartCanvas2, {
        type: "line",
        data: {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', "27-3", "4-10", "11-17", "18-24", "25-31"],
    
            datasets: [{
                label: "Houryl",
                data : [1808, 912, 2413, 1272, 268, 1070, 2688, 2211, 1000, 1098, 424],
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
};
createHourlyTrafficGraph()

// ::::: GENERATE Web Traffic graph 2 fnction :::::
function createDailyTrafficGraph() {
    var chartCanvas2 = document.querySelector("#dailyTraffic");
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
};

// ::::: GENERATE Web Traffic graph 3 fnction :::::
function createWeeklyTrafficGraph() {
    var chartCanvas2 = document.querySelector("#weeklyTraffic");
    var webTrafficChart = new Chart(chartCanvas2, {
        type: "line",
        data: {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', "27-3", "4-10", "11-17", "18-24", "25-31"],

            datasets: [{
                label: "Houryl",
                data : [2165, 1764, 2688, 942, 1598, 611, 730, 2542, 1000, 1299, 2150],
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
};

// ::::: GENERATE Web Traffic graph 4 fnction :::::
function createMonthlyTrafficGraph() {
    var chartCanvas2 = document.querySelector("#monthlyTraffic");
    var webTrafficChart = new Chart(chartCanvas2, {
        type: "line",
        data: {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', "27-3", "4-10", "11-17", "18-24", "25-31"],

            datasets: [{
                label: "Houryl",
                data : [1190, 224, 875, 2135, 2483, 757, 730, 1201, 2392, 1040, 2840],
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
};

// ::::: GENERATE WEB TRAFFIC GRAPH FUNCTION :::::
// • When clicked on a tab it will display its coresponding graph.
// • It will do so by removing the curent graph in #graph-container.
// • And adding a new one.
chronologicalTabBar.addEventListener("click", (event) => {
    let graphContainer = document.querySelector("#graph-container");
    
    switch (event.target.id) {
        // With event.target.id we can determine witch button was pressed.
        case "hourly-tab":
            // Inserts the canvas element with the coresponding class
            graphContainer.innerHTML=`<canvas id="hourlyTraffic" class="graph" width="400" height="200"></canvas>`;
            createHourlyTrafficGraph();
            console.log("you clicked the hourly");
        break;
        case "daily-tab":
            // Inserts the canvas element with the coresponding class
            graphContainer.innerHTML=`<canvas id="dailyTraffic" class="graph" width="400" height="200"></canvas>`;
            createDailyTrafficGraph();
            console.log("you clicked the daily");
        break;
        case "weekly-tab":
            // Inserts the canvas element with the coresponding class
            graphContainer.innerHTML=`<canvas id="weeklyTraffic" class="graph" width="400" height="200"></canvas>`;
            createWeeklyTrafficGraph();
            console.log("you clicked the weekly");
        break;
        case "monthly-tab":
            // Inserts the canvas element with the coresponding class
            graphContainer.innerHTML=`<canvas id="monthlyTraffic" class="graph" width="400" height="200"></canvas>`;
            createMonthlyTrafficGraph();
            console.log("you clicked the monthly");
        break;
    };
});

// ::::: GENERATE Mobile Traffic graph 4 fnction :::::
function createMobileTrafficGraph() {
    var chartCanvas2 = document.querySelector("#mobileTraffic");
    var webTrafficChart = new Chart(chartCanvas2, {
        type: "doughnut",
        data: {
            labels: ['Desktop', 'Tablet', 'Phones'],

            datasets: [{
                label: "Houryl",
                data : [200, 200, 200],
                backgroundColor: [
                    'rgba(0, 47, 47, 0.7)',
                    'rgba(0, 47, 47, 0.5)',
                    'rgba(0, 47, 47, 0.2)'
                ],
                borderColor: ["rgba(0, 47, 47, 0.7)"], 
                fill: true
            }
        ]
        },
        options: { 
            scales: {
                y: {
                    beginAtZero: true,
                    display:false
                }
            },
            plugins: {
                legend: {
                    position: `right`
                }
            }
        }
    });
};
createMobileTrafficGraph()