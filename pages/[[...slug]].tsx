import axios from "axios";
import Head from 'next/head'
import { IWebsite, IPage } from 'MKL/interfaces'
import { Header, Main, Footer } from 'MKL/structures'
import { GetStaticPaths, GetServerSideProps } from "next";

export default function Index({ website, page, path }: { website: IWebsite, page: IPage, path: string }) {
  console.log(website)
  console.log(page)
  return (
    <>
      <Head>
        <title>{(page.metaData.title ?? page.name) + ' | ' + website.name}</title>
        <meta name="description" content={page.metaData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={(page.metaData.title ?? page.name) + ' | ' + website.name} />
        <meta property="og:description" content={page.metaData.description} />
        <meta property="og:url" content={page.url} />
        <meta property="og:image" content={page.metaData.image} />
        <meta name="site_name" property="og:site_name" content={website.name} />
        <meta name="fb:admins" property="fb:admins" content="100000426992447" />
        <meta name="twitter:site" content="UNrefugees" />
        <meta name="twitter:site:id" content="UNrefugees" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={page.metaData.title ?? page.name + ' | ' + website.name} />
        <meta name="twitter:description" content={page.metaData.description} />
        <meta name="twitter:image" content={page.metaData.image} />
        <link rel="canonical" href={page.url}></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#f2c3c2" />
        <meta name="apple-mobile-web-app-title" content={website.name} />
        <meta name="application-name" content={website.name} />
        <meta name="msapplication-TileColor" content="#f2c3c2" />
        <meta name="theme-color" content="#f2c3c2" />
      </Head>
      <Header {...website} />
      <Main {...page} />
      <Footer {...website} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let path = "/";
  [params?.slug].map((slug) => path += slug?.toString().replace(",","/") + "/");

  axios.defaults.headers.method = 'get';
  axios.defaults.baseURL = process.env.API_HOST;
  axios.defaults.headers.common['ApiKey'] = process.env.API_KEY;

  const website = await axios({ url: '/api/website' });
  const page = await axios({ url: `/api/page/${params?.slug && website.data.routes[path] !== undefined ? website.data.routes[path] : website.data.id}` });

  return { props: { website: website.data, page: page.data, path: path } }
}