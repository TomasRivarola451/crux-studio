import styles from "./Hero.module.css";
import Header from "../Header/Header";
import { WHATSAPP_LINK, STUDIO_NAME } from "../../constants";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Header />

      <div className={styles.content}>
        <h1 className={styles.titleMain}>Tatuajes personalizados</h1>
        <p className={styles.titleSub}>&amp; diseño de autor en Mendoza.</p>

        <p className={styles.subtext}>
          Un espacio privado pensado para transformar tu idea en una pieza
          única.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Reservar turno
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className={styles.scroll}>
        <span className={styles.scrollLine} />
        <span>Scroll</span>
      </div>

      <div className={styles.signature}>
        <span className={styles.line} />
        <div className={styles.signatureText}>
          <span>{STUDIO_NAME}</span>
          <span>Mendoza</span>
        </div>
      </div>
    </section>
  );
}