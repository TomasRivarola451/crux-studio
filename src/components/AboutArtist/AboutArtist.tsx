import styles from "./AboutArtist.module.css";
import { ARTIST_NAME, STUDIO_NAME } from "../../constants";
import aboutImage from "../../assets/about-artist.png";

export default function AboutArtist() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <div data-reveal className={styles.textColumn}>
        <span className={styles.overline}>El artista</span>
        <div className={styles.divider} />
        <h2 className={styles.heading}>Detrás de las agujas</h2>
        <p className={styles.paragraph}>
          Soy {ARTIST_NAME}. Llevo más de 6 años dedicándome al arte del
          tatuaje, enfocado en crear piezas con identidad propia que se
          adapten a la anatomía y al estilo de cada persona.
        </p>
        <p className={styles.paragraph}>
          En {STUDIO_NAME} trabajamos bajo la modalidad de estudio privado:
          un entorno tranquilo, cómodo y seguro donde cada sesión se
          planifica sin apuros, priorizando la consulta previa, la higiene
          impecable y el asesoramiento personalizado.
        </p>
      </div>

      <div data-reveal className={styles.imageColumn}>
        <div className={styles.imageFrame}>
          <img
            src={aboutImage}
            alt={`${ARTIST_NAME} trabajando en ${STUDIO_NAME}`}
            className={styles.image}
          />
        </div>
        <p className={styles.caption}>
          {ARTIST_NAME} — {STUDIO_NAME}
        </p>
      </div>

    </section>
  );
}