import React from 'react'
import logo1 from '../../images/logo1.png';
import './PageHeader.scss'

export default function PageHeader() {
  return (
    <div className='component-page-header'>
      <div className="container-fluid bg text-center">
        <img src={logo1} className="img-circle mx-auto d-block" alt="launch app icon" />
        <h3>I'm an adventurer</h3>
      </div>
    </div>
  )
}
