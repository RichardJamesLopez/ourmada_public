import styles from '@/styles/under-construction.module.css';
import Image from 'next/image';
import constructionImage from '@/public/underconstruction.png';

export default function UnderConstruction() {
  return (
    <>
      <main className={styles['main-construction']} style={{ fontSize: '20px', color: '#4285f4'}}>
        <div className={styles.content}>
        <h1 className={styles.code}>Under Construction</h1>
        <Image src={constructionImage} width="400" height="400" />
        <p>We are currently buidling. &nbsp;
        </p>
        <p>Talk to us if you want to learn more. </p>
        </div>      
      </main>
    </>
  )
}
