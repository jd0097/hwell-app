import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "@/next-seo.config";
import Script from 'next/script'
import Head from "next/head";
import * as gtag from '../lib/gtag'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
