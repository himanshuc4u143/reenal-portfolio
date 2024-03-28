import React from 'react';
//import './barChart.css';

function ProgressBar({ value }) {
  return (
    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <div className="progress-bar" style={{ width: `${value}%`, height: '20px' }}></div>
    </div>
  );
}

function BarChart() {
  return (
    <div style={{ width: '100%', margin: '0 auto', justifyContent: 'center' }} id='blogs'>
      <div style={{ border: '1px solid black', textAlign: 'center' }}>
        <table style={{width: '80%'}}>
          <thead>
            <tr>
              <th colSpan="2"><h1>TechStack</h1></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Java</td>
              <td style={{ width: '80%' }}><ProgressBar value={0} /></td>
            </tr>
            <tr>
              <td>React</td>
              <td style={{ width: '80%' }}><ProgressBar value={25} /></td>
            </tr>
            <tr>
              <td>MySQL</td>
              <td style={{ width: '80%' }}><ProgressBar value={50} /></td>
            </tr>
            <tr>
              <td>CSS</td>
              <td style={{ width: '80%' }}><ProgressBar value={75} /></td>
            </tr>
            <tr>
              <td>JSZ</td>
              <td style={{ width: '80%' }}><ProgressBar value={100} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BarChart;
