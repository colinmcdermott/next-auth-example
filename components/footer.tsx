import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://pubindexapi.com/">Homepage</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://pubindexapi.com/terms/">Terms of use</a>
        </li>
        <li className={styles.navItem}>
          <a href="https://pubindexapi.com/privacy/">GitHub</a>
        </li>
        <li className={styles.navItem}>
          <Link href="/policy">Policy</Link>
        </li>
      </ul>
    </footer>
  )
}
