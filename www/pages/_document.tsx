import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const isProd = process.env.NODE_ENV === 'production'
const temp = `${<base href="https://discord.sh/" />}`

// Config
import themeConfig from 'configs/themeConfig'


class DiscordSHDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {isProd ? temp : ''}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          {/** This is where a favicon and other header specific items would go */}
          <link
            rel="icon"
            href={`${themeConfig.favicon}`}
            type="image/x-icon"
          />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-C1ZQVDRVHW"
            strategy='beforeInteractive'
          />
          <Script id="google-analytics" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-C1ZQVDRVHW');
            `}
          </Script>
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