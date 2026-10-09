import styles from "./Specialties.module.css";

const SPECIALTIES = [
  {
    title: "Blackwork & Puntillismo",
    description:
      "Piezas de alto contraste, sombras texturizadas mediante puntillismo de arrastre y bloques de negro sólido.",
  },
  {
    title: "Fine Line & Linework",
    description:
      "Trazos limpios, precisos y de calibre fino, ideales para composiciones delicadas, minimalistas y geométricas.",
  },
  {
    title: "Diseños Personalizados",
    description:
      "Proyectos desarrollados desde cero en el estudio, combinando técnicas para dar vida a ideas originales.",
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
              <div className={styles.imagePlaceholder} aria-hidden="true">
                Foto: {s.title}
              </div>
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