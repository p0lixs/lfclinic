import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserRoundCheck,
  X,
} from "lucide-react";
import { useState } from "react";

const whatsappUrl =
  "https://wa.me/34628843013?text=Hola%20LF%20Clinic%2C%20quiero%20reservar%20una%20cita.";

const services = [
  {
    title: "Tratamientos faciales",
    text: "Protocolos para mejorar luminosidad, textura, hidratacion, marcas, poro y signos de envejecimiento con un resultado natural.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tratamientos corporales",
    text: "Valoraciones enfocadas en bienestar, calidad de piel y objetivos reales, siempre con seguimiento profesional.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tratamientos capilares",
    text: "Opciones de cuidado capilar orientadas a fortalecer, revitalizar y acompanar cada caso desde una mirada clinica.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
  },
];

const values = [
  {
    icon: UserRoundCheck,
    title: "Valoracion individual",
    text: "Analizamos tu piel, antecedentes, expectativas y rutina antes de recomendar cualquier tratamiento.",
  },
  {
    icon: ShieldCheck,
    title: "Criterio sanitario",
    text: "Trabajamos con protocolos claros, consentimiento informado y productos sanitarios adecuados.",
  },
  {
    icon: Sparkles,
    title: "Naturalidad",
    text: "Buscamos resultados frescos y proporcionados, sin perder tu expresion ni tus rasgos.",
  },
  {
    icon: CalendarCheck,
    title: "Seguimiento",
    text: "Te acompananos antes, durante y despues para resolver dudas y revisar la evolucion.",
  },
];

const testimonials = [
  {
    quote:
      "Laura explica todo de forma clara, transmite muchisima confianza y la clinica esta impecable.",
    name: "Oihane CH",
  },
  {
    quote:
      "Trato inmejorable. Te asesora segun tus necesidades y te hace sentir segura en todo momento.",
    name: "Kiara Mendiondo",
  },
  {
    quote:
      "Salgo encantada con los resultados. Profesionalidad, delicadeza y seguimiento de diez.",
    name: "Andrea Leon Alonso",
  },
];

const faqs = [
  {
    question: "Necesito cita previa?",
    answer:
      "Si. Trabajamos solo con cita previa para garantizar una atencion personalizada y sin esperas.",
  },
  {
    question: "Que ocurre si no se que tratamiento necesito?",
    answer:
      "No hace falta venir con una decision tomada. En consulta valoramos tu piel, necesidades y objetivos para orientarte con honestidad.",
  },
  {
    question: "Los tratamientos son seguros?",
    answer:
      "Cada procedimiento se plantea tras una valoracion profesional, con informacion clara, consentimiento informado y protocolos adecuados.",
  },
  {
    question: "Los hombres tambien pueden acudir?",
    answer:
      "Si. Adaptamos los protocolos a las necesidades de la piel masculina: textura, acné, hidratacion, poro o rejuvenecimiento.",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    ["Inicio", "#inicio"],
    ["Servicios", "#servicios"],
    ["Metodo", "#metodo"],
    ["FAQ", "#faq"],
    ["Contacto", "#contacto"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="LF Clinic inicio">
        <img className="brand-logo" src="/lf-logo.png" alt="" />
        <span>
          <strong>LF Clinic</strong>
          <small>Pamplona</small>
        </span>
      </a>

      <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Principal">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setIsOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="icon-button" href="https://www.instagram.com/lfclinicc/" aria-label="Instagram">
          <Instagram size={19} />
        </a>
        <a className="button button-small" href={whatsappUrl}>
          Reservar
        </a>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        <section className="hero" id="inicio">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="eyebrow">Centro de enfermeria y medicina estetica en Pamplona</p>
              <h1>LF Clinic</h1>
              <p className="hero-copy">
                Cuidado estetico con criterio sanitario, valoracion personalizada y resultados naturales para que tu piel se vea sana, luminosa y equilibrada.
              </p>
              <p className="hero-signature">Laura Fuentes - Atencion cercana, tecnica y personalizada.</p>
              <div className="hero-actions">
                <a className="button" href={whatsappUrl}>
                  Reserva tu cita <ArrowRight size={18} />
                </a>
                <a className="button button-ghost" href="#servicios">
                  Ver tratamientos
                </a>
              </div>
              <div className="hero-facts" aria-label="Resumen de la clinica">
                <span>Valoracion profesional</span>
                <span>Cita previa</span>
                <span>Resultados naturales</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Laura Fuentes en LF Clinic">
              <img className="hero-photo" src="/laura-fuentes.png" alt="" />
              <img className="hero-watermark" src="/lf-logo.png" alt="" />
              <div className="hero-proof">
                <span>Enfermeria estetica</span>
                <strong>Valoracion personalizada</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-section" aria-labelledby="intro-title">
          <div>
            <p className="section-kicker">Tu piel, con una mirada experta</p>
            <h2 id="intro-title">Una clinica pensada para decidir con calma y seguridad.</h2>
          </div>
          <p>
            En LF Clinic cada tratamiento empieza con una conversacion honesta. Escuchamos tus objetivos, evaluamos tu caso y te explicamos las opciones de forma clara para construir un plan realista, seguro y adaptado a ti.
          </p>
        </section>

        <section className="services-section" id="servicios" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-kicker">Servicios LF Clinic</p>
            <h2 id="services-title">Tratamientos esteticos con enfoque clinico.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt="" loading="lazy" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={whatsappUrl}>
                    Pedir valoracion <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="method-section" id="metodo" aria-labelledby="method-title">
          <div className="method-media">
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1400&q=80"
              alt="Consulta profesional de cuidado facial"
              loading="lazy"
            />
          </div>
          <div className="method-content">
            <p className="section-kicker">Metodo LF</p>
            <h2 id="method-title">Ciencia, detalle y acompanamiento.</h2>
            <p>
              El objetivo no es hacer mas, sino elegir mejor. Por eso cada protocolo se ajusta al estado de tu piel, tu salud, tus habitos y el resultado que tiene sentido para ti.
            </p>
            <div className="value-grid">
              {values.map(({ icon: Icon, title, text }) => (
                <div className="value-item" key={title}>
                  <Icon size={22} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title">
          <div className="section-heading">
            <p className="section-kicker">Experiencia paciente</p>
            <h2 id="proof-title">Cercania profesional, resultados cuidados.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="stars" aria-label="5 estrellas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>"{item.quote}"</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div>
            <p className="section-kicker">Preguntas frecuentes</p>
            <h2 id="faq-title">Antes de reservar.</h2>
            <p>
              La primera visita sirve para aclarar dudas, valorar indicaciones y decidir si el tratamiento encaja contigo.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <ChevronDown size={18} />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto" aria-labelledby="contact-title">
          <div className="contact-content">
            <p className="section-kicker">Atencion con cita previa</p>
            <h2 id="contact-title">Agenda tu valoracion en Pamplona.</h2>
            <p>
              Avenida de Sancho el Fuerte, 6, 31007 Pamplona, Navarra. Atendemos el telefono de lunes a viernes, de 10:00 a 14:00 y de 16:00 a 20:00.
            </p>
            <div className="contact-actions">
              <a className="button" href={whatsappUrl}>
                <Phone size={18} /> WhatsApp
              </a>
              <a className="button button-ghost" href="mailto:lfclinic.info@gmail.com">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="contact-panel">
            <div>
              <Stethoscope size={23} />
              <span>LF Clinic</span>
            </div>
            <a href="tel:+34628843013">+34 628 843 013</a>
            <a href="mailto:lfclinic.info@gmail.com">lfclinic.info@gmail.com</a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.%20de%20Sancho%20el%20Fuerte%206%2031007%20Pamplona"
            >
              <MapPin size={18} /> Como llegar
            </a>
            <p>@lfclinicc</p>
          </div>
        </section>
      </main>

      <footer>
        <img src="/lf-logo.png" alt="LF Clinic" />
        <span>Centro de enfermeria y medicina estetica en Pamplona</span>
      </footer>
    </>
  );
}

export default App;
