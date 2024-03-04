// Translation
import { appWithTranslation } from "next-i18next";
// Others
import NoSSRWrapper from "@/components/NoSSRWrapper";
import Head from "next/head";
import { useEffect } from "react";
import Aos from "aos";
//CSS
import "@/styles/globals.css";
// import "@/styles/normalize.css";
import "@/styles/styles.css";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MyApp = ({ Component, pageProps }) => {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  useEffect(() => {
    Aos.init({
      offset: 100,
    });
  }, []);


  return (
    <>
      <Head>
        <base href="/" />
        <title>ELASTRO</title>
        {/* Add your meta theme color tag */}
        <meta name="theme-color" content="#091C3F" />
        <meta property="og:title" content="elastro" />
        <meta property="og:type" content="website" />
      </Head>
      <NoSSRWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NoSSRWrapper>
    </>
  );
};

export async function getServerSideProps({ Component, router, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default appWithTranslation(MyApp);
