import React, { useState, useEffect } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import './PageBody.scss'

export default function PageBody() {
  return (
    <StaticQuery
      query={graphql`
      {
        prismicPageBody {
          data {
            body {
              richText
            }
          }
        }
      }
    `}
      render={content => (
        <div className='component-page-body'>
          <div className='bg'>
            {content.prismicPageBody != null && (
              <PrismicRichText
                field={content.prismicPageBody.data.body.richText}
                components={{
                  hyperlink: ({ node, children }) => (
                    <a href={node.data.url} className='text-orage underline'>
                      {children}
                    </a>
                  )
                }}
              />
            )}
          </div>
        </div>
      )}
    ></StaticQuery>
  )
}
