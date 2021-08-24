// Variables
const alertCancleButton = document.querySelector("#alert-cancle-button");
const alertNotificationBar = document.querySelector("#alert-notification-bar");
const submissionSuccessButton = document.querySelector("#submission-successfull-cancle-button");
const submissionSuccessNotification = document.querySelector("#submission-successfull-notification-bar");
const submissionFailButton = document.querySelector("#submission-fail-cancle-button");
const submissionFailNotification = document.querySelector("#submission-fail-notification-bar");
// ::::: The overall traffic graph tabs :::::
const chronologicalTabBar = document.querySelector("#chronological-tab-bar");
const hourylTab = document.querySelector("#hourly-tab");
const dailylTab = document.querySelector("#daily-tab");
const weeklylTab = document.querySelector("#weekly-tab");
const monthlylTab = document.querySelector("#monthly-tab");
hourylTab.focus();
// ::::: The inputs and buttons :::::
const messageUserSendBtn = document.querySelector("#message-user-send-btn");

// THE BASE
alertCancleButton.addEventListener("click", ()=> {
    // Cancles the alert notification.
    let notificationDot = document.querySelector(".notification-dot");
    alertNotificationBar.style.display="none";
    notificationDot.style.display="none";
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
}
createHourlyTrafficGraph();

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
}

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
}

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
}

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
    }
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
                data : [200, 100, 200],
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
            aspectRatio: 1.9,
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
}
createMobileTrafficGraph();

// ::::: GENERATE Notification on send button click :::::
// • Function check the content of the text area and respods.
// • By creating a fail notification.
// • By creating a success notification.
messageUserSendBtn.addEventListener("click", (e)=> {
    const messageUserTextarea= document.querySelector("#user-message"); 
    let messageUserNotification= document.querySelector("#message-user-notification"); 
    let searchForUser = document.querySelector("#user-search");

    if (messageUserTextarea.value ==="" || searchForUser.value ==="") {
        // Checks if there is anything is written in the textarea if not code runs.
        // Checks if user is selected if not code runs.
        messageUserNotification.innerHTML=`
        <div id="submission-fail-notification-bar">
            <p>User isn’t selected or message field is empty</p>
            <b class ="cancle-button" id="submission-fail-cancle-button">x</b>
        </div>`;
    } else if (messageUserTextarea.value !=="" && searchForUser.value !=="") {
        // Checks if there is anything is written in the textarea and if user is selecte. If both true code runs
        messageUserNotification.innerHTML=`
        <div id="submission-successfull-notification-bar">
            <p>Message was sent</p>
            <b class ="cancle-button" id="submission-successfull-cancle-button">x</b>
        </div>`;
    }
});

// ::::: ENABLES notification button cancelation :::::
// Onec a notification bar has apeard in the DOM it can now be cancle.
document.addEventListener("click", (e)=> {
    let messageUserNotification= document.querySelector("#message-user-notification");
    let messageUserNotificationSuccess = document.querySelector("#submission-successfull-notification-bar");
    let messageUserNotificationSuccesCancleBtn = messageUserNotification.querySelector("#submission-successfull-cancle-button");
    let messageUserNotificationFail = document.querySelector("#submission-fail-notification-bar");
    let messageUserNotificationFailCancleBtn = messageUserNotification.querySelector("#submission-fail-cancle-button");
    if (e.target===messageUserNotificationSuccesCancleBtn) {
        // Eddects only notification success
        console.log(e.target);
        messageUserNotificationSuccess.remove();
        console.log(`Notification now removed`);
    } else if (e.target===messageUserNotificationFailCancleBtn) {
        console.log(e.target);
        messageUserNotificationFail.remove();
        console.log(`Notification now removed`);
    }
});
// Continue working on the upper event listener .