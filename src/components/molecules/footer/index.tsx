import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <section>
          Author: <a href="https://github.com/andress20">Andres Parada</a>
        </section>
      </footer>
    </div>
  )
}

export default Footer
