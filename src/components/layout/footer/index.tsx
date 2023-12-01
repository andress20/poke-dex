import useStyles from './styles'

const Footer = () => {
  const styles = useStyles()
  return (
    <footer className={styles.footer}>
      Author: <a href="https://github.com/andress20">Andres Parada</a>
    </footer>
  )
}

export default Footer
