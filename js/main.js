const pieData = [
  {
    name: 'Google',
    value: 30,
    color: '#ef553a',
  },
  {
    name: 'Amazon',
    value: 600,
    color: '#00aced',
  },
  {
    name: 'Facebook',
    value: 100,
    color: '#8BC34A',
  },
];

const options = {
  responsive: true,
  title: {
    display: true,
    position: 'top',
    text: 'Pie Chart',
    fontSize: 18,
    fontColor: '#111',
  },
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: '#333',
      fontSize: 16,
    },
  },
};
new Chart(document.getElementById('pie').getContext('2d')).Pie(pieData);
