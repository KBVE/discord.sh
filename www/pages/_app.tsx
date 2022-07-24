// core imports and libraries
import React from 'react'
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// Loader
import NProgress from 'nprogress'

// Emotion
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// Config
import themeConfig from 'configs/themeConfig'

// Components
import UserLayout from 'layouts/UserLayout'
import ThemeComponent from '@core/theme/ThemeComponent'

// import LoadingLayout from 'layouts/LoadingLayout'

// Contexts
import {
  SettingsConsumer,
  SettingsProvider
} from '@core/context/settingsContext'

// Utils
import { createEmotionCache } from '@core/utils/create-emotion-cache'

// React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// Global css
import 'styles/globals.css'

type ExtendedNextPage = NextPage & {
  getLayout: any
}

// Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: ExtendedNextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// Pace loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 100)
  }, [])

  // Variables
  const getLayout =
    Component.getLayout ??
    ((
      page:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
    ) => <UserLayout>{page}</UserLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName}`}</title>
        <meta
          name="descriptions"
          content={`${themeConfig.templateDescription}`}
        />
        <meta name="keywords" content={`${themeConfig.templateKeywords}`} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return <ThemeComponent settings={settings}>
              {!loading && getLayout(<Component {...pageProps} />)}
              {/* <LoadingLayout loading={loading ?? true} /> */}
            </ThemeComponent>
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  )
}

export default App