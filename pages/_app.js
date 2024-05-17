import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "@/components/theme-provider"



export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <NextNProgress
            color="red"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
    <Layout>
    <Component {...pageProps} />
    </Layout>
  
    </ThemeProvider>
  )

}
