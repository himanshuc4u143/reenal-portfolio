import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 1,
      barThickness: 1,
    },
  },
  responsive: true,
  scales: {
    x: {
      display: false, // Hide the x-axis
    },
    y: {
      display: true, // Hide the y-axis
      ticks: {
        font: {
          weight: 'bold', // Set bold font weight for all labels
        },
      }
    },
  },
//   layout: {
//     padding: {
//         left: 50
//     }
//   }
//   plugins: {
//     legend: {
//       position: 'right',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Horizontal Bar Chart',
//     },
//   },
};



const HorizontalChart = () => {
  const [data, setData] = useState({
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [8,9,8,9,8,9,8],
        borderColor: 'red',
        backgroundColor: 'red',
        stack: 1
      },
      {
        label: 'Dataset 2',
        data: [2, 1, 2, 1, 2, 1, 2],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'black',
        stack: 1
      },
    ],
  });

  useEffect(() => {
    // If you need to fetch data dynamically, you can put your fetch logic here
    // and update the state using setData
  }, []);

  return (
    <div style={{ display: 'flex'}}>
      <Bar data={data} options={{
        ...options,
        elements: {
          ...options.elements,
          bar: {
            ...options.elements.bar,
            barPercentage: 0.5, // Adjust bar width as necessary (0.5 for 50% width)
          },
        },
      }} />
    </div>
  );
};

export default HorizontalChart;
