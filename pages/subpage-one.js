import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App | Subpage One</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Subpage One
        </h1>

        <p>Aenean nec aliquam nunc, sit amet euismod nisi. Morbi ac libero vitae purus suscipit imperdiet eu ut massa. Maecenas risus ligula, sagittis eget tempus placerat, facilisis vitae metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean metus nunc, semper non mi in, varius consequat leo. Aliquam at ex a tortor malesuada facilisis finibus vitae nibh. Donec justo nulla, venenatis vel mauris at, vestibulum efficitur ipsum. Mauris et ultrices odio, vitae posuere sapien. Cras sodales molestie aliquet. Suspendisse ut lectus ut nisi varius tincidunt.</p>

        <Link href="/"><a>Home</a></Link>
        <Link href="/subpage-one"><a>Subpage One</a></Link>
        <Link href="/subpage-two"><a>Subpage Two</a></Link>

      </main>
    </div>
  )
}
