import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>
        Next Js News application
      </h2>
    </div>
  )
}
