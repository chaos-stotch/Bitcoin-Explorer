import React, {useState} from 'react'
import {Line} from 'react-chartjs-2'
import { Difficulty } from './Difficulty'
import {Chart as ChartJS} from 'chart.js/auto'
import './networkGraph.css'

function NetworkGraph() {
  const [userData, setUserData] = useState({
    labels: Difficulty.map((data) => data.year),
    datasets: [{
      label: "Network Difficulty",
      data: Difficulty.map((data) => data.bitcoinPrice),
      backgroundColor:'#1ABC9C',
      borderColor: '#2C3A47'
    }]
  })
  
  return (
    <div>
      <div className="graph">
        <Line data={userData} options={{responsive: true}} />
      </div>
    </div>
  )
}

export default NetworkGraph