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
        Next News application 
        <a href="/news"><button>News</button>
</a>
      </h2>
    </div>
  )
}
