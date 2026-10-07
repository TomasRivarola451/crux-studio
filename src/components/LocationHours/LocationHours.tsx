import styles from "./LocationHours.module.css";
import { LOCATION_AREA, MAPS_URL, HOURS } from "../../constants";

export default function LocationHours() {
  return (
    <section id="ubicacion" className={styles.section}>
      <span className={styles.overline}>Visitanos</span>
      <div className={styles.divider} />
      <h2 className={styles.heading}>Ubicación y horarios</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.cardLabel}>Dónde estamos</span>
          <p className={styles.text}>{LOCATION_AREA}</p>
          <p className={styles.textMuted}>
            Únicamente con turno previo para garantizar privacidad y
            atención exclusiva en cada sesión. La dirección exacta se
            envía al confirmar la cita.
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Abrir ubicación en Google Maps
          </a>
        </div>

        <div className={styles.card}>
          <span className={styles.cardLabel}>Horarios de atención</span>
          <ul className={styles.hoursList}>
            {HOURS.map((h) => (
              <li key={h.day} className={styles.hoursRow}>
                <span className={styles.hoursDay}>{h.day}</span>
                <span className={styles.hoursTime}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}