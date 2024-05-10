import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import { ThemeProvider } from "@/components/theme-provider"



export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )

}
