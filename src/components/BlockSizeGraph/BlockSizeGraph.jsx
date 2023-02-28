import React, {useState} from 'react'
import {Line} from 'react-chartjs-2'
import {BitcoinPrice} from './Data'
import {Chart as ChartJS} from 'chart.js/auto'

function BlockSizeGraph() {
  const [userData, setUserData] = useState({
    labels: BitcoinPrice.map((data) => data.year),
    datasets: [{
      label: "Avarege Block Size",
      data: BitcoinPrice.map((data) => data.bitcoinPrice),
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

export default BlockSizeGraph
