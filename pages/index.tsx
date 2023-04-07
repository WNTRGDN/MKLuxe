import Head from 'next/head'
import { IWebsite } from 'MKL/interfaces/index'
import { Main } from '@/structures/index'

export default function Index({ website }: { website: IWebsite }) {
  return (
    <>
      <Head>
        <title>{'Home | ' + website.name}</title>
        <meta name="keywords" content={website.keywords} />
        <meta name="description" content={website.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={'Home | ' + website.name} />
        <meta property="og:description" content="" />
        <meta property="og:url" content={process.env.SITE_URL} />
        <meta property="og:image" content="https://www.unrefugees.org.au/media/tqohcgsg/our-work-er-syria-unhcr-staff-and-child-on-lesvos-big.jpg" />
        <meta name="site_name" property="og:site_name" content={website.name} />
        <meta name="fb:admins" property="fb:admins" content="100000426992447" />
        <meta name="twitter:site" content="UNrefugees" />
        <meta name="twitter:site:id" content="UNrefugees" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={'Home | ' + website.name} />
        <meta name="twitter:description" content={website.description} />
        <meta name="twitter:image" content="https://www.unrefugees.org.au/media/pr1duw4w/unhcr-twitter-card-png.png" />
        <link rel="canonical" href={process.env.SITE_URL}></link>
      </Head>
      <Main {...website} />
    </>
  )
}

export async function getServerSideProps() {
  var headers = new Headers();

  headers.append("WntrID", String(process.env.WNTR_ID));
  headers.append("ApiKey", String(process.env.API_KEY));

  const data = await fetch(process.env.API_HOST + "/page/get?id=" + process.env.SITE_ID, {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  });

  const website = await data.json();

  return { props: { website } }
}