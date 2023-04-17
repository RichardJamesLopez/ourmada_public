import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>make DAOs better</title>
        <meta name="description" content="Ourmada is a modular platform for shipping DAO Tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main} style={{ backgroundImage: `url(/pixelated_boats.png)` }} >
        <div className={styles.description}>
          <p>
          &nbsp;
            <code className={styles.code} style={{ color: '#4285f4', fontSize: 40}} >Ourmada</code>
          </p>
        </div>

        <div className={styles.grid} style = {{ color: '#4285f4'}}>
          <a
            href="https://mirror.xyz/ourmada.eth/mzo3OVulyfd7KW1sSlBqGhBxhTOYU4j5BpfKsKh_ZS8"
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
            href="https://calendly.com/ourmada/chat-with-ourmada"
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
          <a
            href="/under-construction"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              App
            </h2>
      
          </a>

          

          
        </div>
      </main>
    </>
  )
}
