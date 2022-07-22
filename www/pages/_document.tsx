import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'


// Config
import themeConfig from 'configs/themeConfig'


class DiscordSHDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ overflow: 'clip' }}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          {/** This is where a favicon and other header specific items would go */}
          <link 
            rel="icon" 
            href={`${themeConfig.favicon}`} 
            type="image/x-icon" 
          />
          {/** Stylesheets below are for Roboto font and Material Icons */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DiscordSHDocument