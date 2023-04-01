import styles from '@/styles/under-construction.module.css';

export default function UnderConstruction() {
  return (
    <>
      <main className={styles['main-construction']} style={{ fontSize: '20px', color: '#4285f4'}}>
        <div className={styles.content}>
        <h1 className={styles.code}>Under Construction</h1>
        <p>We are currently buidling. &nbsp;
        </p>
        <p>Talk to us if you want to learn more. </p>
        </div>      
      </main>
    </>
  )
}
