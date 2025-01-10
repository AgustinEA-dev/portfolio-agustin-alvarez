import "./about.styles.scss";

export default function About() {
  return (
    <section className="about">
      <h1 className="about-title">SOBRE MI</h1>
      <p className="description">
        ¡Hola! Soy un <strong>Programador Junior</strong> con mucho interés en
        aprender y mejorar mis habilidades. Mi pasión por la programación
        comenzó hace unos años cuando descubrí la web y me di cuenta de lo que
        podía lograr creando aplicaciones. Actualmente, me encuentro aprendiendo
        tecnologías como React, JavaScript, y desarrollo front-end. He trabajado
        en algunos proyectos personales donde he implementado mis conocimientos
        en desarrollo web, pero aún me queda mucho por aprender. Siempre estoy
        buscando mejorar y aprender nuevas herramientas y frameworks.
      </p>
      <h2 className="about-subtitle">Habilidades</h2>
      <ul className="habilities-list">
        <li>HTML, CSS, JavaScript</li>
        <li>React y React Hooks</li>
        <li>Git y GitHub</li>
        <li>Consumo de APIs REST</li>
        <li>Diseño responsivo</li>
      </ul>
      <h2 className="about-subtitle">Objetivos:</h2>
      <p className="description">
        Mi objetivo es seguir aprendiendo y contribuir a proyectos de código
        abierto. Estoy emocionado de seguir desarrollando mis habilidades para
        convertirme en un mejor desarrollador.
      </p>
    </section>
  );
}

