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
        <title>Elastos - Destiny Calls</title>
        { /* Add your meta theme color tag */ 
          <meta name="theme-color" content="#091C3F" />
        }
        <meta name="description" content="The Destiny Calls Program combines Elastos and Bitcoin Layer 2 technologies with Smart Web to enhance Web3 growth, emphasizing user empowerment and equity. Utilizing BeL2, EVM contracts, and Elastos’ identity/storage tools, it accelerates progress towards an interconnected world." />
        
        /* Google / Search Engine Tags */
        <meta itemprop="name" content="Elastos - Destiny Calls" />
        <meta itemprop="description" content="The Destiny Calls Program combines Elastos and Bitcoin Layer 2 technologies with Smart Web to enhance Web3 growth, emphasizing user empowerment and equity. Utilizing BeL2, EVM contracts, and Elastos’ identity/storage tools, it accelerates progress towards an interconnected world." />
        <meta itemprop="image" content="http://destinycalls.elastos.info/assets/images/thumbnail.png" />

        /* Facebook Meta Tags */
        <meta property="og:url" content="https://destinycalls.elastos.info" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Elastos - Destiny Calls" />
        <meta property="og:description" content="The Destiny Calls Program combines Elastos and Bitcoin Layer 2 technologies with Smart Web to enhance Web3 growth, emphasizing user empowerment and equity. Utilizing BeL2, EVM contracts, and Elastos’ identity/storage tools, it accelerates progress towards an interconnected world." />
        <meta property="og:image" content="http://destinycalls.elastos.info/assets/images/thumbnail.png" />

        /* Twitter Meta Tags */
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elastos - Destiny Calls" />
        <meta name="twitter:description" content="The Destiny Calls Program combines Elastos and Bitcoin Layer 2 technologies with Smart Web to enhance Web3 growth, emphasizing user empowerment and equity. Utilizing BeL2, EVM contracts, and Elastos’ identity/storage tools, it accelerates progress towards an interconnected world." />
        <meta name="twitter:image" content="http://destinycalls.elastos.info/assets/images/thumbnail.png" />
        <meta name="twitter:site" content="@ElastosInfo" />

        /*
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="900" />
        <meta name="twitter:image" content="https://destinycalls.elastos.info/assets/images/thumbnail.jpg" />
        */        
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
