// Component styling
import styles from "./Footer.module.css"

const Footer = () => (
  <footer id={styles.footer}>
    <p>
      Laget av <a href="https://github.com/LBlend">LBlend</a> og{" "}
      <a href="https://github.com/marksverdhei">marksverdhei</a>
    </p>
    <a href="https://github.com/LBlend/mann-eller-kvinne">Kildekode</a>
  </footer>
)

export default Footer
