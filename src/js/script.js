//Side-bar hiding

const sections = document.querySelectorAll('.section');
const sideBar = document.querySelector('.side-bar');
const topHamburger = document.querySelector('.top-bar__hamburger');
const sideHamburger = document.querySelector('.side-bar .top__hamburger');

const sectionLoop = () => {
    for (let section of sections) {
        section.classList.toggle('hidden');
    }
};

topHamburger.addEventListener('click', () => {
    sideBar.classList.toggle('hidden');
    sectionLoop();
});

sideHamburger.addEventListener('click', () => {
    sideBar.classList.toggle('hidden');
    sectionLoop();
});

//Chart.js

const ctx = document.getElementById('chart').getContext('2d');

const chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [{
            // 4
            label: 'Signups',
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
        },
        {
            label: 'FTD',
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
        },
        {
            label: 'Earned',
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
            // 7
            hidden: true,
        }]
    },
    options: {
        legend: false,
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }
});

console.log(chart);
