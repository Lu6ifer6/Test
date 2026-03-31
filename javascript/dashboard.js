document.addEventListener('DOMContentLoaded', () => {
    // ---- Hamburger Menu Logic ----
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);


    // ---- Chart.js Implementation ----
    const ctx = document.getElementById('taskChart').getContext('2d');

    // Create Gradient for the primary line
    const gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
    gradientFill.addColorStop(0, 'rgba(67, 24, 255, 0.2)'); // Primary color with opacity
    gradientFill.addColorStop(1, 'rgba(67, 24, 255, 0)');

    const taskChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
            datasets: [
                {
                    label: 'Current Data',
                    data: [50, 150, 100, 300, 200, 220, 100, 180, 280, 350, 250, 120],
                    borderColor: '#4318FF', // Primary Blue
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#4318FF',
                    pointBorderWidth: 2,
                    pointRadius: 3,
                    fill: true,
                    tension: 0.4 // Smooth curves
                },
                {
                    label: 'Previous Data',
                    data: [20, 100, 200, 320, 180, 200, 30, 80, 50, 100, 150, 100],
                    borderColor: '#00B5D8', // Light Blue/Cyan
                    borderWidth: 2,
                    borderDash: [5, 5], // Optional styling, though the design has solid lines. Using solid to match UI.
                    pointRadius: 0, // Hide points for the secondary line to match UI
                    fill: false,
                    tension: 0.4 // Smooth curves
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Hide legend to match design
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 400,
                    ticks: {
                        stepSize: 100,
                        color: '#A3AED0',
                        font: { size: 10 }
                    },
                    border: { display: false },
                    grid: {
                        color: '#F4F7FE',
                        drawBorder: false,
                    }
                },
                x: {
                    ticks: {
                        color: '#A3AED0',
                        font: { size: 10 }
                    },
                    border: { display: false },
                    grid: {
                        display: false // Hide vertical grid lines
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });

    // Remove dashed line to match the image exactly (overriding the config above)
    taskChart.data.datasets[1].borderDash = [];
    taskChart.update();
});