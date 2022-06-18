import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Image from 'next/image';

// Import IMG_0349 from assets/images
import IMG_0349 from '../assets/images/IMG_0349.jpg'


const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeBackground}>
        <Image src={IMG_0349} alt="IMG_0349" layout="fill" sizes="100vw"/>
      </div>
      <div className={styles.homeContent}>
        <h1>Fremont Cheng</h1>
        <h2>Photography</h2>
      </div>
    </div>
  )
}

export default Home
