import { Fragment } from 'react'
import Image from 'next/image'
import styles from './card.module.css'
interface componentProps {
  image: string
  title: string
}

const Card: React.FC<componentProps> = ({ image, title }) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <Image className={styles.cardImage} src={image} alt="Pokemon Image" layout="fixed" width="200" height="200" />
        <h3 className={styles.cardTitle}>{title.toLocaleUpperCase()}</h3>
      </div>
    </Fragment>
  )
}

export default Card
