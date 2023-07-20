import "../styles/global.css"
import "react-toastify/dist/ReactToastify.css"
import "aos/dist/aos.css"
import type {AppProps} from "next/app"
import type {NextPage} from "next"
import {ReactElement, ReactNode, useCallback, useEffect, useState} from "react"
import {MantineProvider} from "@mantine/core"
import {Router} from "next/router"
import {Provider} from "react-redux"
import store from "../redux/store"
import {buttonStyles, checkboxStyles, defaultFonts, inputStyles} from "../theme"
import {LoaderAnimation} from "../components/sharedComponent/ScreenLoader"
import {ApolloProvider} from "@apollo/client"
import client from "../lib/apolloClient"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)
  const [loading, setLoading] = useState(true)

  const handlePageScroll = useCallback(() => {
    setTimeout(() => {
      if (typeof window !== undefined && window.location.hash) {
        const pageSection = document.getElementById(
          window.location.hash.substring(1)
        )
        if (pageSection && pageSection.offsetTop) {
          window.scrollTo({
            top: pageSection.offsetTop,
            behavior: "smooth",
          })
        }
      }
    })
  }, [])
  useEffect(() => {
    setLoading(false)
    handlePageScroll()
  }, [handlePageScroll])
  Router.events.on("routeChangeStart", () => {
    setLoading(true)
  })
  Router.events.on("routeChangeComplete", () => {
    setLoading(false)
    handlePageScroll()
  })

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <MantineProvider
          theme={{
            globalStyles: theme => ({
              body: {
                ...theme.fn.fontStyles(),
                backgroundColor: theme.colors.white,
                color: theme.colors.black,
                lineHeight: theme.lineHeight,
              },
              a: {
                textDecoration: "none",
                color: theme.colors.brand[0],
              },
              html: {
                scrollBehavior: "smooth",
              },
            }),
            black: "#141414",
            colors: {
              brand: [
                "#020217",
                "#060746",
                "#0B0C7D",
                "#0e10a4",
                "#1314d3",
                "#2c2eec",
              ],
            },
            primaryColor: "brand",
            primaryShade: 2,
            fontFamily: defaultFonts,

            headings: {
              fontFamily: defaultFonts,
              sizes: {
                h2: {fontWeight: 700, fontSize: "24px", lineHeight: 1.35},
                h3: {fontWeight: 600, fontSize: "18px", lineHeight: 1.25},
              },
            },

            components: {
              Input: {
                styles: () => ({
                  input: inputStyles.input,
                  label: inputStyles.label,
                }),
              },
              InputWrapper: {
                styles: () => ({
                  label: inputStyles.label,
                }),
              },
              PasswordInput: {
                styles: () => ({
                  innerInput: inputStyles.input,
                }),
              },
              Button: {
                styles: () => buttonStyles,
              },
              Checkbox: {
                styles: () => checkboxStyles,
              },
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          {loading ? (
            <LoaderAnimation />
          ) : (
          <>
            {getLayout(
              <>
                <Component {...pageProps} />
              </>
            )}
          </>
          )}
        </MantineProvider>
      </ApolloProvider>
    </Provider>
  )
}
