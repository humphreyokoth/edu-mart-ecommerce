import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CategoryCard from '../components/CategoryCard'


const HomePage = () => {
  return (
    <main className={styles.container}>
    <div className={styles.small}>
    <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Computer science package" />
        <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="Software development package" />
        <CategoryCard image="https://imgur.com/Dm212HS.png" name="Data Science" />

    </div>
    <div className={styles.large}>
    <CategoryCard image="https://imgur.com/qb6IW1f.png" name="FullStack" />
        <CategoryCard
          image="https://imgur.com/HsUfuRU.png"
          name="DevOps"
        />
    </div>
     
    </main>
  )
}

export default HomePage