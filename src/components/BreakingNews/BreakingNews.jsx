import React, {useEffect, useState} from 'react'
import './breakingNews.css'
import axios from 'axios'

const client = axios.create({
  baseURL: "https://api.blockchair.com/bitcoin/stats" 
});

function BreakingNews() {
  const [circulation, setCirculation] = useState([]);

  useEffect(() => {
    client.get().then((response) => {
      setCirculation(response.data.data.circulation.toString().slice(0, 8))
    });
  }, []);

  return (
    <div className='BreakingNews'>
      <div className="ticker">
      <div className='ticker__item'>Bitcoin is a moral imperative</div>
        <div className='ticker__item'>21,000,000/∞</div>
        <div className='ticker__item'>{circulation} Bitcoins in circulation</div>
        <div className='ticker__item'>Bitcoin: A Peer-to-Peer Electronic Cash System</div>
        <div className='ticker__item'>Have Fun Staying Poor</div>
        <div className='ticker__item'>There is no second best</div>
        <div className='ticker__item'>God be praised</div>
      </div>
    </div>
  )
}

export default BreakingNews
