/**
 * Übersetzungen: Junges KaFF
 *
 * Alle sichtbaren Texte der Website liegen hier als zwei Objekte (de/en).
 * Der Sprachumschalter (LanguageToggle.astro) tauscht data-lang am <html>-
 * Element. Komponenten lesen via getLang() den aktiven Sprachzustand.
 *
 * Platzhalter-Konvention: [KUNDE: Text hier] bleibt sichtbar bis zur
 * Freigabe durch das Kollektiv.
 *
 * Quelle der Werte: Plakat-Design vom 16.04.2026
 */

export type Lang = "de" | "en";

export const translations = {
  de: {
    /* Navigation */
    nav: {
      ausstellung: "Ausstellung",
      galerie: "Galerie",
      kuenstlerinnen: "Künstler:innen",
      events: "Events",
      kontakt: "Kontakt",
      langSwitch: "EN",
      langSwitchLabel: "Zu Englisch wechseln",
    },

    /* Hero */
    hero: {
      title: "Was vergeht und was bleibt.",
      subtitle: "[KUNDE: Kurzes Statement zur Ausstellung, 1 Satz]",
      cta: "Mehr entdecken",
      museumPrefix: "Kunstausstellung im",
      museumName: "Museum Kunst am Fluss Fischerhude",
      museumUrl: "https://kaffischerhude.de/",
      artistsHeading: "Arbeiten von:",
    },

    /* Über die Ausstellung, Kollektiv-Statement */
    about: {
      heading: "Über die Ausstellung",
      paragraphs: [
        "Von Mai bis Oktober begrüßen euch im Kunst am Fluss Fischerhude neue Perspektiven.",
        "„Junges KaFF“ präsentiert fünf künstlerische Positionen aus der Region, die ihren persönlichen Blick auf die Verflechtungen von innerer und äußerer Welt teilen.",
        "In der Gruppenausstellung treten Malerei, Zeichnung, Fotografie sowie Textil- und Objektkunst miteinander in Beziehung und verhandeln Verbindungen zwischen Körperlichkeit, Figur und Entgrenzung.",
        "Auseinandersetzungen mit Erinnerung, Identität und Wahrnehmung finden ihren Platz in Bildräumen und Objekten.",
        "Gliedmaßen strecken sich aus nach flüchtig-zarten Beständigkeiten und spazieren zwischen menschlichen Zügen daher.",
        "Ein Spiel mit Ambivalenzen: Zerfall und Form, An- und Abwesenheit, was vergeht und was bleibt.",
        "Wir laden euch ein, in diesen Zwischenräumen zu verweilen.",
      ],
      readMore: "Mehr lesen",
      readLess: "Weniger anzeigen",
    },

    /* Die Ausstellung, Eckdaten */
    exhibition: {
      heading: "Die Ausstellung",
      name: "Junges KaFF",
      dates: "Mai bis Oktober 2026",
      openingLabel: "Eröffnung war",
      openingDate: "16. Mai 2026",
      museum: "Museum Kunst am Fluss Fischerhude",
      address: "In der Bredenau 83, 28870 Fischerhude",
      phoneLabel: "Telefon während der Öffnungszeiten",
      phone: "04293 – 6843222",
      hours: "[KUNDE: Öffnungszeiten einfügen]",
      admissionLabel: "Eintritt",
      admissionRegular: "Normal 4 €",
      admissionReduced: "Ermäßigt 2 €",
      cta: "Route planen",
    },

    /* Galerie */
    gallery: {
      heading: "Galerie",
      hint: "Tippen oder bewegen, um die Bilder in Farbe zu sehen. Klick öffnet das Bild größer.",
      viewAll: "Alle Bilder ansehen",
      viewLess: "Weniger anzeigen",
      lightboxClose: "Schließen",
      lightboxPrev: "Vorheriges Bild",
      lightboxNext: "Nächstes Bild",
    },

    /* Künstler:innen */
    artists: {
      heading: "Künstler:innen",
      websiteLabel: "Website",
      instagramLabel: "Instagram",
      list: [
        {
          name: "Ala Martens",
          bio: "[KUNDE: Kurze Bio, 2–3 Sätze]",
          website: "",
          instagram: "",
        },
        {
          name: "João Krahl",
          bio: "[KUNDE: Kurze Bio, 2–3 Sätze]",
          website: "",
          instagram: "",
        },
        {
          name: "Chantal Knickmeyer",
          bio: "[KUNDE: Kurze Bio, 2–3 Sätze]",
          website: "",
          instagram: "",
        },
        {
          name: "Juliane Twesten",
          bio: "[KUNDE: Kurze Bio, 2–3 Sätze]",
          website: "",
          instagram: "",
        },
        {
          name: "Marie Quitté",
          bio: "[KUNDE: Kurze Bio, 2–3 Sätze]",
          website: "",
          instagram: "",
        },
      ],
    },

    /* Presse */
    press: {
      heading: "Presse",
      readArticle: "Artikel lesen",
      articleTitle: "[KUNDE: Titel des Zeitungsartikels]",
      articlePublisher: "[KUNDE: Name der Zeitung / Publikation]",
      articleDate: "[KUNDE: Erscheinungsdatum]",
      articleUrl: "[KUNDE: URL zum Artikel]",
    },

    /* Events */
    events: {
      heading: "Events",
      empty: "Aktuell sind keine weiteren Veranstaltungen geplant.",
      register: "Anmelden",
    },

    /* Kontakt */
    contact: {
      heading: "Kontakt",
      intro:
        "Offene Fragen, Anmerkungen oder möchtest du gerne mit uns sprechen? Wir freuen uns auf deine Nachricht!",
      emailLabel: "E-Mail",
      email: "info@jungeskaff.de",
      instagramLabel: "Instagram",
      instagramHandle: "[KUNDE: @junges_kaff]",
      instagramUrl: "[KUNDE: https://instagram.com/junges_kaff]",
      namePlaceholder: "Dein Name",
      emailPlaceholder: "Deine E-Mail",
      messagePlaceholder: "Deine Nachricht",
      submit: "Absenden",
      successMessage: "Danke für deine Nachricht. Wir melden uns bald.",
      errorMessage: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
    },

    /* Footer */
    footer: {
      studioCredit: "Design und Entwicklung: studio jessica schmidt",
      collectiveLabel: "KaFF, Kunst am Fluss",
      legalNav: {
        impressum: "Impressum",
        datenschutz: "Datenschutz",
      },
    },

    /* Allgemein */
    meta: {
      title: "Junges KaFF, Ausstellung Mai bis Oktober 2026, Fischerhude",
      description:
        "Junges KaFF, eine Gruppenausstellung von Ala Martens, João Krahl, Chantal Knickmeyer, Juliane Twesten und Marie Quitté. Mai bis Oktober 2026 in Fischerhude.",
    },
  },

  en: {
    /* Navigation */
    nav: {
      ausstellung: "Exhibition",
      galerie: "Gallery",
      kuenstlerinnen: "Artists",
      events: "Events",
      kontakt: "Contact",
      langSwitch: "DE",
      langSwitchLabel: "Switch to German",
    },

    /* Hero */
    hero: {
      title: "What passes and what remains.",
      subtitle: "[CLIENT: Short statement about the exhibition, 1 sentence]",
      cta: "Discover more",
      museumPrefix: "Art exhibition at",
      museumName: "Museum Kunst am Fluss Fischerhude",
      museumUrl: "https://kaffischerhude.de/",
      artistsHeading: "Works by:",
    },

    /* Über die Ausstellung, Kollektiv-Statement */
    about: {
      heading: "About the Exhibition",
      paragraphs: [
        "From May to October, new perspectives welcome you at Kunst am Fluss Fischerhude.",
        "“Junges KaFF” presents five artistic positions from the region, sharing personal views on the entanglements of inner and outer worlds.",
        "In this group exhibition, painting, drawing, photography, textile and object art enter into dialogue, negotiating connections between physicality, figure, and dissolution.",
        "Engagements with memory, identity, and perception find their place in image spaces and objects.",
        "Limbs reach out toward fleeting, tender permanencies and wander among human traits.",
        "A play with ambivalences: decay and form, presence and absence, what passes and what remains.",
        "We invite you to linger in these in-between spaces.",
      ],
      readMore: "Read more",
      readLess: "Show less",
    },

    /* Die Ausstellung, Eckdaten */
    exhibition: {
      heading: "The Exhibition",
      name: "Junges KaFF",
      dates: "May to October 2026",
      openingLabel: "Opening took place",
      openingDate: "May 16, 2026",
      museum: "Museum Kunst am Fluss Fischerhude",
      address: "In der Bredenau 83, 28870 Fischerhude, Germany",
      phoneLabel: "Phone during opening hours",
      phone: "+49 4293 6843222",
      hours: "[CLIENT: Opening hours]",
      admissionLabel: "Admission",
      admissionRegular: "Regular €4",
      admissionReduced: "Reduced €2",
      cta: "Plan your visit",
    },

    /* Galerie */
    gallery: {
      heading: "Gallery",
      hint: "Tap or hover to see the images in colour. Click to view enlarged.",
      viewAll: "View all images",
      viewLess: "Show less",
      lightboxClose: "Close",
      lightboxPrev: "Previous image",
      lightboxNext: "Next image",
    },

    /* Künstler:innen */
    artists: {
      heading: "Artists",
      websiteLabel: "Website",
      instagramLabel: "Instagram",
      list: [
        {
          name: "Ala Martens",
          bio: "[CLIENT: Short bio in English, 2–3 sentences]",
          website: "",
          instagram: "",
        },
        {
          name: "João Krahl",
          bio: "[CLIENT: Short bio in English, 2–3 sentences]",
          website: "",
          instagram: "",
        },
        {
          name: "Chantal Knickmeyer",
          bio: "[CLIENT: Short bio in English, 2–3 sentences]",
          website: "",
          instagram: "",
        },
        {
          name: "Juliane Twesten",
          bio: "[CLIENT: Short bio in English, 2–3 sentences]",
          website: "",
          instagram: "",
        },
        {
          name: "Marie Quitté",
          bio: "[CLIENT: Short bio in English, 2–3 sentences]",
          website: "",
          instagram: "",
        },
      ],
    },

    /* Presse */
    press: {
      heading: "Press",
      readArticle: "Read article",
      articleTitle: "[CLIENT: Article title]",
      articlePublisher: "[CLIENT: Publication name]",
      articleDate: "[CLIENT: Publication date]",
      articleUrl: "[CLIENT: Article URL]",
    },

    /* Events */
    events: {
      heading: "Events",
      empty: "No upcoming events scheduled at the moment.",
      register: "Register",
    },

    /* Kontakt */
    contact: {
      heading: "Contact",
      intro:
        "Get in touch — we look forward to hearing from you about exhibitions, enquiries or collaborations.",
      emailLabel: "Email",
      email: "info@jungeskaff.de",
      instagramLabel: "Instagram",
      instagramHandle: "[CLIENT: @junges_kaff]",
      instagramUrl: "[CLIENT: https://instagram.com/junges_kaff]",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      submit: "Send",
      successMessage: "Thanks for your message. We will be in touch soon.",
      errorMessage: "Something went wrong. Please try again.",
    },

    /* Footer */
    footer: {
      studioCredit: "Design and development: studio jessica schmidt",
      collectiveLabel: "KaFF, art by the river",
      legalNav: {
        impressum: "Legal Notice",
        datenschutz: "Privacy Policy",
        barrierefreiheit: "Accessibility",
      },
    },

    /* Allgemein */
    meta: {
      title: "Junges KaFF, exhibition May to October 2026, Fischerhude",
      description:
        "Junges KaFF, a group exhibition by Ala Martens, João Krahl, Chantal Knickmeyer, Juliane Twesten, and Marie Quitté. May to October 2026 in Fischerhude.",
    },
  },
} satisfies Record<Lang, unknown>;

export type Translations = (typeof translations)[Lang];

/** Gibt den aktiven Sprach-Schlüssel zurück. Fallback: "de". */
export function getLang(lang: string | undefined): Lang {
  return lang === "en" ? "en" : "de";
}

/** Gibt das Übersetzungsobjekt für eine Sprache zurück. */
export function t(lang: Lang): Translations {
  return translations[lang];
}
