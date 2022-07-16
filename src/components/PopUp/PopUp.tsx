import React, { useState, useEffect } from 'react'
// import { graphql, StaticQuery } from 'gatsby'
// import Cookies from 'universal-cookie'
// import PopUpBody from './PopUpBody'
import './PopUp.scss'

const MAX_POP_UP_DELAY = 2 // days
const COOKIE_KEY = 'POPUP_CLOSE_TIME'

export default function PopUp () {
//   const cookies = new Cookies()
  // Initially no popup
  const [isShowPopUp, setIsShowPopUp] = useState(false)

  /*const handlePopupClose = () => {
    // Store current closing time
    cookies.set(COOKIE_KEY, new Date().toISOString(), { path: '/' })

    setIsShowPopUp(false)

    // Get pop up container using css class
    const popUpContainer = Array.from(
      document.getElementsByClassName(
        'component-announcement'
      ) as HTMLCollectionOf<HTMLElement>
    )[0]

    // Hide container
    if (popUpContainer != undefined || popUpContainer != null) {
      popUpContainer.style.display = 'none'
    }
  }*/

  // This react callback runs when the page is loaded.
//   useEffect(() => {
    // Get close time
    // const popUpClosingTime = cookies.get(COOKIE_KEY)
    // if (popUpClosingTime == null) {
    //   // If no coockie found, we show popup
    //   setIsShowPopUp(true)
    //   return
    // }

    // const now = new Date()
    // const d = new Date(popUpClosingTime)

    // const diffTime = Math.abs(now.getTime() - d.getTime())
    // const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    // if (diffDays >= MAX_POP_UP_DELAY) {
    //   // If wait time more than or equal to 2 days we show pop up
    //   setIsShowPopUp(true)
    //   return
    // }

//   }, [])

  return (
        <div className='component-popup'>
            <div className='popup-layout'>
              <div className='popup-ui'>
                <div className='flex'>
                  <p className='p-2 text-white'>
                    11/04/1991
                  </p>
                  <a href='#' className='ml-auto p-2 text-orange'>
                    CLOSE X
                  </a>
                </div>
                <div className='flex'>
                    <div className='p-2 text-white'>
                    <p>testing is finejkdfbhdvbjsbvhjvbhjvdbhjvdshjsvbhjbsjkbsfjkbjksb</p>
                    </div>
                    </div>
              </div>
            </div>
        </div>
  )
}
