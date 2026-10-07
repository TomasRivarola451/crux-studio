import styles from "./Header.module.css";
import { STUDIO_NAME } from "../../constants";

const NAV_LINKS = [
  { label: "Trabajos", href: "#trabajos" },
  { label: "Sobre vos", href: "#sobre-mí" },
  { label: "Estilos", href: "#estilos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        {STUDIO_NAME}
      </a>
      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}