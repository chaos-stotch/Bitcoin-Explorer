import React from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
        <div>
            <span>Developed by</span>
            <br />
            <a href="https://chaos-stotch.github.io/chaos/" rel="noreferrer" target={'_blank'}><span>CHAOS DEVELOPMENT</span></a>
        </div>
        <a href="https://github.com/chaos-stotch/Bitcoin-Explorer" rel="noreferrer" target={'_blank'}><BsGithub className='githubLink' /></a>
    </footer>
  )
}

export default Footer