import { useState } from "react";
import "./App.css";

const translations = [
  { lang: "Español", text: "Hola Pepi", color: "#ff6b6b", icon: "🔥" },
  { lang: "English", text: "Hello Pepi", color: "#4ecdc4", icon: "🇬🇧" },
  { lang: "Français", text: "Bonjour Pepi", color: "#ffe66d", icon: "🗼" },
  { lang: "Deutsch", text: "Hallo Pepi", color: "#95e1d3", icon: "🏰" },
  { lang: "Italiano", text: "Ciao Pepi", color: "#a29bfe", icon: "🍕" },
  { lang: "Português", text: "Olá Pepi", color: "#fd79a8", icon: "⚽" },
];

const jobInfo = {
  Español: {
    Spain: {
      title: "Cómo conseguir trabajo en España",
      bolsas: ["LinkedIn", "InfoJobs", "Indeed España", "Monster"],
      tips: "Currículum de máximo 2 páginas, carta de presentación adaptada, LinkedIn actualizado",
      entrevistas: "Ser puntual, vestimenta formal, investigar la empresa beforehand",
    },
    Mexico: {
      title: "Cómo conseguir trabajo en México",
      bolsas: ["LinkedIn", "OCC", "Indeed México", "Computrabajo"],
      tips: "CV en formato PDF, foto reciente, incluir pretensión salarial",
      entrevistas: "Llegar 15 min antes, formal pero amigable, preparar casosSTAR",
    },
    Argentina: {
      title: "Cómo conseguir trabajo en Argentina",
      bolsas: ["LinkedIn", "Bumeran", "ZonaJobs", "Indeed Argentina"],
      tips: "CV moderno, sin foto (opcional), redes profesionales activas",
      entrevistas: "Preparar elevator pitch, investigar la empresa, seguir-up después",
    },
    Colombia: {
      title: "Cómo conseguir trabajo en Colombia",
      bolsas: ["LinkedIn", "Computrabajo", "Indeed Colombia", "El Tiempo"],
      tips: "CV de una página, referencias disponibles, certificaciones al día",
      entrevistas: "Puntualidad extrema, preparar preguntas, attitude positiva",
    },
    Chile: {
      title: "Cómo conseguir trabajo en Chile",
      bolsas: ["LinkedIn", "Laborum", "ChileTrabaja", "Indeed Chile"],
      tips: "CV conciso, certificaciones importan, networking clave",
      entrevistas: "Profesionales, puntuales, preparar preguntas sobre la empresa",
    },
    Peru: {
      title: "Cómo conseguir trabajo en Perú",
      bolsas: ["LinkedIn", "Computrabajo", "Bumeran", "Indeed Perú"],
      tips: "CV claro y organizado, experiencia relevante primero, soft skills",
      entrevistas: "Formalidad valued, preparar ejemplos de logros, smile importante",
    },
  },
  English: {
    Spain: {
      title: "How to Get a Job in Spain",
      bolsas: ["LinkedIn", "Indeed", "InfoJobs", "Glassdoor"],
      tips: "CV in Spanish or English, cover letter tailor-made, professional LinkedIn",
      interviews: "Be punctual, smart casual, research the company",
    },
    Mexico: {
      title: "How to Get a Job in Mexico",
      bolsas: ["LinkedIn", "OCC", "Indeed", "Glassdoor"],
      tips: "PDF CV, recent photo, salary expectations included",
      interviews: "Arrive 15 min early, formal but friendly, STAR method",
    },
    Argentina: {
      title: "How to Get a Job in Argentina",
      bolsas: ["LinkedIn", "Bumeran", "Indeed", "Glassdoor"],
      tips: "Modern CV, no photo needed, active professional networks",
      interviews: "Elevator pitch prep, company research, follow-up email",
    },
    Colombia: {
      title: "How to Get a Job in Colombia",
      bolsas: ["LinkedIn", "Computrabajo", "Indeed", "El Tiempo"],
      tips: "One-page CV, references ready, certifications updated",
      interviews: "Extreme punctuality, prepare questions, positive attitude",
    },
    Chile: {
      title: "How to Get a Job in Chile",
      bolsas: ["LinkedIn", "Laborum", "Indeed", "Glassdoor"],
      tips: "Concise CV, certifications matter, networking key",
      interviews: "Professional, punctual, ask about the company",
    },
    Peru: {
      title: "How to Get a Job in Peru",
      bolsas: ["LinkedIn", "Computrabajo", "Bumeran", "Indeed"],
      tips: "Clear organized CV, relevant experience first, soft skills important",
      interviews: "Formality valued, prepare achievement examples, smile matters",
    },
  },
  Francés: {
    Spain: {
      title: "Comment trouver un emploi en Espagne",
      bolsas: ["LinkedIn", "Indeed", "InfoJobs", "Welcome to the Jungle"],
      tips: "CV en espagnol, lettre de motivation personnalisée, LinkedIn pro",
      interviews: "Ponctualité, tenue smart casual, rechercher l'entreprise",
    },
    Mexico: {
      title: "Comment trouver un emploi au Mexique",
      bolsas: ["LinkedIn", "OCC", "Indeed", "Empleo.mx"],
      tips: "CV PDF, photo récente, attentes salariales",
      interviews: "Arriver 15 min avant, formel mais amical, méthode STAR",
    },
    Argentina: {
      title: "Comment trouver un emploi en Argentine",
      bolsas: ["LinkedIn", "Bumeran", "Indeed", "ZonaJobs"],
      tips: "CV moderne, pas de photo, réseaux professionnels actifs",
      interviews: " Préparer elevator pitch, rechercher l'entreprise, suivi",
    },
    Colombia: {
      title: "Comment trouver un emploi en Colombie",
      bolsas: ["LinkedIn", "Computrabajo", "Indeed", "El Tiempo"],
      tips: "CV d'une page, références prêtes, certifications à jour",
      interviews: "Ponctualité extrême, préparer questions, attitude positive",
    },
    Chile: {
      title: "Comment trouver un travail au Chili",
      bolsas: ["LinkedIn", "Laborum", "Indeed", "ChileTrabaja"],
      tips: "CV concis, certifications importantes, networking clé",
      interviews: "Professionnel, ponctual, poser des questions",
    },
    Peru: {
      title: "Comment trouver un emploi au Pérou",
      bolsas: ["LinkedIn", "Computrabajo", "Bumeran", "Indeed"],
      tips: "CV clair et organisé, expérience pertinente en premier",
      interviews: "Formalisme valorisé, préparé exemples de logros, sourire important",
    },
  },
  Deutsch: {
    Spain: {
      title: "Wie man einen Job in Spanien findet",
      bolsas: ["LinkedIn", "Indeed", "InfoJobs", "Xing"],
      tips: "Lebenslauf auf Spanisch, Anschreiben angepasst, professionelles Profil",
      interviews: "Pünktlich, smart casual, Firma vorher recherchieren",
    },
    Mexico: {
      title: "Wie man einen Job in Mexiko findet",
      bolsas: ["LinkedIn", "OCC", "Indeed", "Jobomas"],
      tips: "PDF Lebenslauf, aktuelles Foto, Gehaltswünsche angeben",
      interviews: "15 Min früher, formal aber freundlich, STAR-Methode",
    },
    Argentina: {
      title: "Wie man einen Job in Argentinien findet",
      bolsas: ["LinkedIn", "Bumeran", "Indeed", "ZonaJobs"],
      tips: "Moderner Lebenslauf, kein Foto nötig, aktive Netzwerke",
      interviews: "Elevator pitch vorbereiten, Firma recherchieren, Nachverfolgung",
    },
    Colombia: {
      title: "Wie man einen Job in Kolumbien findet",
      bolsas: ["LinkedIn", "Computrabajo", "Indeed", "El Tiempo"],
      tips: "Ein-Seiten-Lebenslauf, Referenzen bereit, Zertifizierungen aktuell",
      interviews: "Extreme Pünktlichkeit, Fragen vorbereiten, positive Einstellung",
    },
    Chile: {
      title: "Wie man einen Job in Chile findet",
      bolsas: ["LinkedIn", "Laborum", "Indeed", "ChileTrabaja"],
      tips: "Kurzlebenslauf, Zertifizierungen wichtig, Networking",
      interviews: "Professionell, pünktlich, Fragen zur Firma stellen",
    },
    Peru: {
      title: "Wie man einen Job in Peru findet",
      bolsas: ["LinkedIn", "Computrabajo", "Bumeran", "Indeed"],
      tips: "Klarer Lebenslauf, relevante Erfahrung zuerst, Soft Skills wichtig",
      interviews: "Formalität geschätzt, Leistungsbeispiele vorbereiten, Lächeln",
    },
  },
  Italiano: {
    Spain: {
      title: "Come trovare lavoro in Spagna",
      bolsas: ["LinkedIn", "Indeed", "InfoJobs", "Jobrapido"],
      tips: "Curriculum in spagnolo, lettera di presentazione su misura, LinkedIn curato",
      interviews: "Puntualità, abbigliamento smart casual, ricerca l'azienda",
    },
    Mexico: {
      title: "Come trovare lavoro in Messico",
      bolsas: ["LinkedIn", "OCC", "Indeed", "Empleo.mx"],
      tips: "CV in PDF, foto recente, aspettative salariali incluse",
      interviews: "Arrivare 15 min prima, formale ma amichevole, metodo STAR",
    },
    Argentina: {
      title: "Come trovare lavoro in Argentina",
      bolsas: ["LinkedIn", "Bumeran", "Indeed", "ZonaJobs"],
      tips: "CV moderno, senza foto, reti professionali attive",
      interviews: "Preparare elevator pitch, ricercare l'azienda, follow-up",
    },
    Colombia: {
      title: "Come trovare lavoro in Colombia",
      bolsas: ["LinkedIn", "Computrabajo", "Indeed", "El Tiempo"],
      tips: "CV di una pagina, referenze pronte, certificazioni aggiornate",
      interviews: "Puntualità extrema, preparare domande, atteggiamento positivo",
    },
    Chile: {
      title: "Come trovare lavoro in Cile",
      bolsas: ["LinkedIn", "Laborum", "Indeed", "ChileTrabaja"],
      tips: "CV conciso, certificazioni importanti, networking chiave",
      interviews: "Professionali, puntuali, fare domande sull'azienda",
    },
    Peru: {
      title: "Come trovare lavoro in Perù",
      bolsas: ["LinkedIn", "Computrabajo", "Bumeran", "Indeed"],
      tips: "CV chiaro organizzato, esperienza rilevante prima, soft skills importanti",
      interviews: "Formalità apprezzata, preparare esempi di risultati, sorriso importante",
    },
  },
  Portugues: {
    Spain: {
      title: "Como conseguir emprego na Espanha",
      bolsas: ["LinkedIn", "Indeed", "InfoJobs", "Welcome to the Jungle"],
      tips: "Currículo em espanhol, carta de apresentação personalizada, LinkedIn profissional",
      interviews: "Pontualidade, vestuário smart casual, pesquisar a empresa",
    },
    Mexico: {
      title: "Como conseguir emprego no México",
      bolsas: ["LinkedIn", "OCC", "Indeed", "Empleo.mx"],
      tips: "Currículo em PDF, foto recente, expectativas salariais incluídas",
      interviews: "Chegar 15 min antes, formal mas amigável, método STAR",
    },
    Argentina: {
      title: "Como conseguir emprego na Argentina",
      bolsas: ["LinkedIn", "Bumeran", "Indeed", "ZonaJobs"],
      tips: "Currículo moderno, sem foto necessária, redes profissionais ativas",
      interviews: "Preparar elevator pitch, pesquisar a empresa, follow-up",
    },
    Colombia: {
      title: "Como conseguir emprego na Colômbia",
      bolsas: ["LinkedIn", "Computrabajo", "Indeed", "El Tiempo"],
      tips: "Currículo de uma página, referências prontas, certificações atualizadas",
      interviews: "Pontualidade extrema, preparar perguntas, atitude positiva",
    },
    Chile: {
      title: "Como conseguir emprego no Chile",
      bolsas: ["LinkedIn", "Laborum", "Indeed", "ChileTrabaja"],
      tips: "Currículo conciso, certificações importantes, networking é chave",
      interviews: "Profissionais, pontuais, fazer perguntas sobre a empresa",
    },
    Peru: {
      title: "Como conseguir emprego no Peru",
      bolsas: ["LinkedIn", "Computrabajo", "Bumeran", "Indeed"],
      tips: "Currículo claro organizado, experiência relevante primeiro, soft skills importantes",
      interviews: "Formalidade valorizada, preparar exemplos de conquistas, sorriso importante",
    },
  },
};

const countries = [
  { code: "Spain", name: "España", flag: "🇪🇸" },
  { code: "Mexico", name: "México", flag: "🇲🇽" },
  { code: "Argentina", name: "Argentina", flag: "🇦🇷" },
  { code: "Colombia", name: "Colombia", flag: "🇨🇴" },
  { code: "Chile", name: "Chile", flag: "🇨🇱" },
  { code: "Peru", name: "Perú", flag: "🇵🇪" },
];

function App() {
  const [selectedLang, setSelectedLang] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCardClick = (lang) => {
    setSelectedLang(lang);
    setSelectedCountry(null);
  };

  const handleCountryClick = (countryCode) => {
    setSelectedCountry(countryCode);
  };

  const handleBack = () => {
    if (selectedCountry) {
      setSelectedCountry(null);
    } else {
      setSelectedLang(null);
    }
  };

  const getLangKey = (lang) => {
    const map = {
      Español: "Español",
      English: "English",
      Français: "Francés",
      Deutsch: "Deutsch",
      Italiano: "Italiano",
      Português: "Portugues",
    };
    return map[lang] || lang;
  };

  if (selectedLang && selectedCountry) {
    const langKey = getLangKey(selectedLang);
    const info = jobInfo[langKey]?.[selectedCountry];
    const country = countries.find((c) => c.code === selectedCountry);
    const langData = translations.find((t) => t.lang === selectedLang);

    return (
      <div className="container">
        <div className="detail-view">
          <button className="back-btn" onClick={handleBack}>
            <span className="btn-icon">←</span>
            Volver
          </button>
          <div className="detail-card">
            <div className="flag-container">
              <span className="country-flag">{country.flag}</span>
              <span className="lang-badge" style={{ background: langData.color }}>
                {langData.icon} {langData.lang}
              </span>
            </div>
            <h1 className="detail-title">{info?.title}</h1>

            <div className="info-section">
              <h3>🎯 Bolsas de trabajo:</h3>
              <ul>
                {info?.bolsas.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="info-section">
              <h3>📝 Tips para tu CV:</h3>
              <p>{info?.tips}</p>
            </div>

            <div className="info-section">
              <h3>💼 Entrevistas:</h3>
              <p>{info?.entrevistas}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedLang) {
    const langData = translations.find((t) => t.lang === selectedLang);

    return (
      <div className="container">
        <button className="back-btn" onClick={handleBack}>
          <span className="btn-icon">←</span>
          Volver
        </button>
        <div className="lang-header">
          <span className="lang-icon-large">{langData.icon}</span>
          <h1 className="title">{langData.text}</h1>
          <h2 className="subtitle">Selecciona un país</h2>
        </div>
        <div className="greetings">
          {countries.map((c, i) => (
            <div
              key={c.code}
              className="card country-card"
              onClick={() => handleCountryClick(c.code)}
              style={{
                animationDelay: `${i * 0.1}s`,
                borderColor: langData.color,
              }}
            >
              <span className="flag">{c.flag}</span>
              <span className="lang">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Hola Pepi</h1>
      <h2 className="subtitle">en diferentes idiomas</h2>
      <div className="greetings">
        {translations.map((t, i) => (
          <div
            key={t.lang}
            className="card"
            onClick={() => handleCardClick(t.lang)}
            style={{
              borderColor: t.color,
              background: `linear-gradient(135deg, ${t.color}33, ${t.color}11)`,
              animationDelay: `${i * 0.15}s`,
              boxShadow: `0 5px 25px ${t.color}44`,
            }}
          >
            <span className="card-icon">{t.icon}</span>
            <span className="text">{t.text}</span>
            <span className="lang">{t.lang}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;