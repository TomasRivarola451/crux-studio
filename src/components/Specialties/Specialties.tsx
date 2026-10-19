import ImageLightbox from "../ImageLightbox/ImageLightbox";
import styles from "./Specialties.module.css";

// Cambiá solo image por la ruta de tu nueva foto, guardada en public/estilos/.
// Ejemplo: image: "/estilos/mi-tatuaje.webp". También podés reemplazar el archivo de ejemplo.
const SPECIALTIES = [
  {
    title: "Fine Line",
    image: "/src/assets/fineline.webp",
    alt: "Foto de ejemplo para Fine Line",
    position: "center",
    description: "Líneas finas, trazos delicados y composiciones minimalistas. Diseños que encuentran su fuerza en los pequeños detalles.",
  },
  {
    title: "Blackwork",
    image: "/src/assets/blackwork.webp",
    alt: "Foto de ejemplo para Blackwork",
    position: "center",
    description: "El negro como protagonista. Contrastes intensos, formas definidas y composiciones con carácter.",
  },
  {
    title: "Tradicional",
    image: "/src/assets/tradicional.webp",
    alt: "Foto de ejemplo para Tradicional",
    position: "center",
    description: "Líneas sólidas, colores definidos y diseños clásicos que mantienen su identidad con el paso del tiempo.",
  },
];

export default function Specialties() {
  return (
    <section id="estilos" className={styles.section}>
      <span className={styles.overline}>Estilos</span>
      <div className={styles.divider} />
      <h2 data-reveal className={styles.heading}>Cómo trabajamos la piel</h2>

      <div className={styles.grid}>
        {SPECIALTIES.map((s, i) => (
          <div key={s.title} data-reveal className={styles.card}>
            <div className={styles.imageWrapper}>
              <ImageLightbox src={s.image} alt={s.alt} className={styles.photoButton}>
              <img
                className={styles.image}
                src={s.image}
                alt={s.alt}
                width={960}
                height={1280}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: s.position }}
              />
              </ImageLightbox>
              <span className={styles.number}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDescription}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}