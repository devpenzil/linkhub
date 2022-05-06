import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="emerald">
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </div>
  );
}

export default MyApp;
