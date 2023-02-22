import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://astro.pubindexapi.com/">Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://pubindexapi.com/terms/">Terms of use</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://pubindexapi.com/privacy/">Privacy</a>
        </li>
      </ul>
      <p>PubIndexAPI © 2023 Search Candy Ltd - UK Company: 09241383</p>
    </footer>
  )
}
