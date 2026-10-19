import ImageLightbox from "../ImageLightbox/ImageLightbox";
import { useRef } from "react";
import { useCarouselDrag } from "../../useCarouselDrag";
import styles from "./Portfolio.module.css";

import { portfolioImages } from "./portfolioImages";

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);
  useCarouselDrag(trackRef);

  const scrollByAmount = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const itemWidth = track.querySelector(`.${styles.item}`)?.clientWidth ?? 320;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const amount = direction === "next" ? itemWidth + gap : -(itemWidth + gap);
    track.scrollBy({ left: amount, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return (
    <section id="trabajos" className={styles.section} aria-labelledby="portfolio-heading">
      <div data-reveal className={styles.header}>
        <span className={styles.overline}>Portfolio</span>
        <div className={styles.divider} />
        <div className={styles.headerRow}>
          <h2 id="portfolio-heading" className={styles.heading}>Trabajos recientes</h2>
          <div className={styles.headerRight}>
            <p id="portfolio-description" className={styles.subtitle}>
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

      <div className={styles.track} ref={trackRef} tabIndex={0} role="region" aria-label="Galería de trabajos" aria-describedby="portfolio-description">
        {portfolioImages.map((photo) => (
          <div key={photo.id} className={styles.item}>
            <ImageLightbox src={photo.src} alt={photo.alt ?? "Trabajo de tatuaje"} className={styles.photoButton}>
            <img
              src={photo.src}
              alt={photo.alt ?? "Trabajo de tatuaje"}
              width={600}
              height={800}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: photo.position }}
            />
            </ImageLightbox>
          </div>
        ))}
      </div>
    </section>
  );
}
