const ctx = document.getElementById('softSkillsChart').getContext('2d');

const softSkillsChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Trabajo en equipo', 'Comunicación', 'Creatividad', 'Resolución de problemas', 'Organización', 'Adaptabilidad'],
    datasets: [{
      label: 'Nivel',
      data: [75, 60, 90, 65, 85, 70],
      backgroundColor: 'rgba(0,255,209,0.12)',
      borderColor: '#00ffd1',
      borderWidth: 2,
      pointBackgroundColor: '#00ffd1',
      pointBorderColor: '#071428',
      pointHoverBackgroundColor: '#7a5cff',
      pointHoverBorderColor: '#071428'
    }]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { display: true, color: '#000000ff', stepSize: 20 },
        angleLines: { color: 'rgba(255,255,255,0.04)' },
        grid: { color: 'rgba(255,255,255,0.03)' },
        pointLabels: { color: '#cfeef3', font: { size: 12, family: 'Orbitron, Poppins' } }
      }
    },
    plugins: {
      legend: { labels: { color: '#cfeef3', font: { family: 'Orbitron, Poppins' } } },
      tooltip: { backgroundColor: '#071428', titleColor: '#00ffd1', bodyColor: '#cfeef3' }
    }
  }
});