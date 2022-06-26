import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Image from 'next/image';

const Home: NextPage = () => {

  const BACKGROUND_IMAGE_URL = 'https://res.cloudinary.com/fremont-cheng/image/upload/v1656252809/enol61pvtdmto1tmlwse.jpg';

  return (
    <div className={styles.home}>
      <div className={styles.homeBackground}>
        <Image src={BACKGROUND_IMAGE_URL} alt="background image" layout="fill" sizes="100vw"/>
      </div>
      <div className={styles.homeContent}>
        <h1>Fremont Cheng</h1>
        <h2>Photography</h2>
      </div>
    </div>
  )
}

export default Home
