import React, {useState} from 'react'
import {Bar} from 'react-chartjs-2'
import {BitcoinPrice} from './Data'
import {Chart as ChartJS} from 'chart.js/auto'

function HashrateGraph() {
  const [userData, setUserData] = useState({
    labels: BitcoinPrice.map((data) => data.year),
    datasets: [{
      label: "Hashrate",
      data: BitcoinPrice.map((data) => data.bitcoinPrice),
      backgroundColor:'#1ABC9C',
      borderColor: '#2C3A47'
    }]
  })
  
  return (
    <div>
      <div className="graph v2">
        <Bar data={userData} options={{responsive: true}} />
      </div>
    </div>
  )
}

export default HashrateGraph