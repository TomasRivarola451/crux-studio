import styles from "./ContactFooter.module.css";
import {
  WHATSAPP_LINK,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCATION_AREA,
  STUDIO_NAME,
  CREDIT_URL,
} from "../../constants";

export default function ContactFooter() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.overline}>Contacto</span>
        <div className={styles.divider} />

        <div className={styles.grid}>
          <div className={styles.mainColumn}>
            <h2 className={styles.heading}>
              ¿Tenés una idea
              <br />
              en mente?
            </h2>
            <p className={styles.subtitle}>
              Escribinos para consultar disponibilidad, sacarte dudas o
              empezar a diseñar tu próximo tatuaje.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Escribinos por WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.card}>
            <div className={styles.cardRow}>
              <span className={styles.cardLabel}>WhatsApp</span>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                +54 9 2615 90-3965
              </a>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.cardLabel}>Instagram</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>
            <div className={styles.cardRow}>
              <span className={styles.cardLabel}>Zona</span>
              <span className={styles.cardText}>
                {LOCATION_AREA}. Trabajamos únicamente con turno previo —
                la dirección exacta se envía al confirmar.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} {STUDIO_NAME}
          </span>
          <a
            href={CREDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.credit}
          >
            Sitio por TARO studio
          </a>
        </div>
      </div>
    </footer>
  );
}