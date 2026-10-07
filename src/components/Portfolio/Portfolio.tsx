import { useRef } from "react";
import styles from "./Portfolio.module.css";

const PLACEHOLDER_COUNT = 10;

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const itemWidth = track.querySelector(`.${styles.item}`)?.clientWidth ?? 320;
    const amount = direction === "next" ? itemWidth + 16 : -(itemWidth + 16);
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="trabajos" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.overline}>Portfolio</span>
        <div className={styles.divider} />
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>Trabajos recientes</h2>
          <div className={styles.headerRight}>
            <p className={styles.subtitle}>
              Una selección de piezas conceptuales, líneas de precisión y
              proyectos a medida.
            </p>
            <div className={styles.arrows}>
              <button
                type="button"
                className={styles.arrowButton}
                onClick={() => scrollByAmount("prev")}
                aria-label="Ver trabajos anteriores"
              >
                ←
              </button>
              <button
                type="button"
                className={styles.arrowButton}
                onClick={() => scrollByAmount("next")}
                aria-label="Ver trabajos siguientes"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.track} ref={trackRef}>
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <div key={i} className={styles.item} aria-hidden="true">
            Foto {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}