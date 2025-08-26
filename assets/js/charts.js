// Chart.js section (projects page). Only run if canvases exist.
const lineCtx = document.getElementById('lineChart');
const barCtx  = document.getElementById('barChart');
if (lineCtx) {
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{ label: 'Revenue (k$)', data: [42,48,51,62,58,70,74,79,85,92,96,110], tension: .35, fill: false }]
    },
    options: { plugins: { legend: { display: true } }, scales: { y: { beginAtZero: false } }, animation: { duration: 1200 } }
  });
}
if (barCtx) {
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Organic','Paid','Email','Referral','Direct'],
      datasets: [{ label: 'Conversions', data: [320, 240, 180, 140, 260] }]
    },
    options: { plugins: { legend: { display: true } }, scales: { y: { beginAtZero: true } }, animation: { duration: 1200 } }
  });
}
