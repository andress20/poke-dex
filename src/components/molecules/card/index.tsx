import { Fragment } from 'react'
import Image from 'next/image'
import styles from './Button.module.css'
// import './Button.module.css'
interface componentProps {
  title: string
  image: string
}

const Card: React.FC<componentProps> = ({ title, image }) => {
  return (
    <Fragment>
      <div className={styles.card}>
        <img src={image} alt="Vercel Logo" width={72} height={16} />
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </Fragment>
  )
}

export default Card
