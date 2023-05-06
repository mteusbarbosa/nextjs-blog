import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Me chamo Mateus Barbosa, sou de Natal-RN e tenho o anseio de me tornar Sênior em Front-end. Sou técnico em informática e tecnólogo em Sistemas para Internet, ambos pelo IFRN . Atualmente possuo habilidades em HTML, CSS, JavaScript, TypeScript e Framework Angular.</p>

        <Link href="/posts/first-post">Posts</Link>
      </section>
    </Layout>
  );
}