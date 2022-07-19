import React, { useState, useEffect } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Cookies from 'universal-cookie'
import { PrismicRichText } from '@prismicio/react'
import './PopUp.scss'

const MAX_POP_UP_DELAY = 2 // days
const COOKIE_KEY = 'closing_time'

export default function PopUp () {
  const cookies = new Cookies()
  // Initially no popup
  const [isShowPopUp, setIsShowPopUp] = useState(false)

  const handlePopupClose = () => {
    // Store current closing time
    cookies.set(COOKIE_KEY, new Date().toISOString(), { path: '/' })

    setIsShowPopUp(false)

    // Get pop up container using css class
    const popUpContainer = Array.from(
      document.getElementsByClassName(
        'component-popup'
      ) as HTMLCollectionOf<HTMLElement>
    )[0]

    // Hide container
    if (popUpContainer != undefined || popUpContainer != null) {
      popUpContainer.style.display = 'none'
    }
  }

  // This react callback runs when the page is loaded.
  useEffect(() => {
    // Get close time
    const popUpClosingTime = cookies.get(COOKIE_KEY)
    if (popUpClosingTime == null) {
      // If no coockie found, we show popup
      setIsShowPopUp(true)
      return
    }

    const now = new Date()
    const d = new Date(popUpClosingTime)

    const diffTime = Math.abs(now.getTime() - d.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays >= MAX_POP_UP_DELAY) {
      // If wait time more than or equal to 2 days we show pop up
      setIsShowPopUp(true)
      return
    }

  }, [])

  return (
    <StaticQuery
    // Query for prismic document
    query={graphql`
      {
        prismicPopup {
          data {
            body {
              richText
            }
            title {
              text
            }
          }
        }
      }
    `}
    render={content => (
      <div className='component-popup'>
        {content.prismicPopup != null && isShowPopUp && (
          <div className='popup-layout'>
            <div className='popup-ui'>
              <div className='flex'>
                <h1 className='p-2 text-white'>
                  {content.prismicPopup.data.title.text}
                </h1>
                <a
                  href='#'
                  onClick={() => handlePopupClose()}
                  className='ml-auto p-2 text-orange'
                >
                  CLOSE X
                </a>
              </div>
              <div className='flex'>
              <div className='p-2'>
                <PrismicRichText
                  field={content.prismicPopup.data.body.richText}
                  components={{
                    hyperlink: ({ node, children }) => (
                      <a href={node.data.url} className='text-white underline'>
                        {children}
                      </a>
                    ),
                    paragraph: ({ children }) => (
                      <p className='text-white'>{children}</p>
                    )
                  }}
                />
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
    )}
  ></StaticQuery>
  )
}
