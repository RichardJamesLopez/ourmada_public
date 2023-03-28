import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pronounced OUR mada</title>
        <meta name="description" content="quick Splash page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main} style={{ backgroundImage: `url(/pixelated_boats.png)` }} >
      <a href="/under-construction" target="_blank" className={styles.appLink} style = {{ fontSize: '30px', color: '#4285f4'}}>App</a>
        <div className={styles.description}>
          <p>
          &nbsp;
            <code className={styles.code} style={{ fontSize: '60px', color: '#4285f4'}}>OURMADA</code>
          </p>
        </div>

        <div className={styles.grid}>
          <a
            //href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            Mission <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              <b>We are on a mission to make DAOs better. &nbsp;
              </b>
            
              &nbsp; 
              <br></br>Ourmada is the modular web3 platform that has the tools they need 
            </p>
          </a>

          <a
            href="https://calendly.com/rich-daotools/chat-with-ourmada"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Talk to us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Reach out to this link to hear about the latest &nbsp;
            </p>
          </a>

          
        </div>
      </main>
    </>
  )
}
