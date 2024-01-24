import Head from 'next/head';
import Layout, { siteTitle } from '../component/layout';
import utilStyles from '../styles/utils.module.css';
import Navbar from '../component/Navbar';

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Self Introduction]</p>
          <p>
            (HOMEPAGE.)
          </p>
        </section>

      </Layout>
    </>
      
  );
}