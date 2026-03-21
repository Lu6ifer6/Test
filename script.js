const ctx = document.getElementById('mainChart').getContext('2d');

// Gradient for the chart fill
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Tasks',
            data: [150, 200, 180, 310, 240, 210, 250, 120, 140, 280, 230, 150],
            borderColor: '#6366f1',
            borderWidth: 3,
            fill: true,
            backgroundColor: gradient,
            tension: 0.4, // This creates the smooth curves seen in the UI
            pointRadius: 4,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#6366f1'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
            x: { grid: { display: false } }
        }
    }
});