/**
 * Veranstaltungen: Junges KaFF
 *
 * Diese Datei direkt bearbeiten, um Events hinzuzufügen, zu ändern oder
 * zu entfernen. Kein CMS, kein Interface — einfach die Einträge im Array
 * ergänzen und die Seite neu deployen.
 *
 * Pflichtfelder: title, date, location
 * Optional: titleEn, time, descriptionDe, descriptionEn, url, image
 *
 * date: ISO-Format "YYYY-MM-DD", wird in der Komponente formatiert.
 * Vergangene Events (date < heute) werden automatisch ausgeblendet.
 */

export interface Event {
  /** Titel auf Deutsch (Pflicht) */
  title: string;
  /** Titel auf Englisch (optional, Fallback: title) */
  titleEn?: string;
  /** ISO-Datum, z. B. "2026-07-04" */
  date: string;
  /** Uhrzeit als Freitext, z. B. "ab 14 Uhr" */
  time?: string;
  /** Uhrzeit auf Englisch */
  timeEn?: string;
  /** Ort / Adresse, Default ist der Ausstellungsort */
  location?: string;
  /** Kurze Beschreibung auf Deutsch */
  descriptionDe?: string;
  /** Kurze Beschreibung auf Englisch */
  descriptionEn?: string;
  /** Optionaler Link für Anmeldung / mehr Infos */
  url?: string;
  /** Optionales Bild, Pfad relativ zu public/, z. B. "/images/events/finissage.jpg" */
  image?: string;
}

/**
 * Default-Ort für alle Events von Junges KaFF, kann pro Event
 * überschrieben werden.
 */
const defaultLocation = "Museum Kunst am Fluss Fischerhude, In der Bredenau 83";

export const events: Event[] = [
  {
    title: "Sonnendruck am KaFF",
    titleEn: "Sun printing at KaFF",
    date: "2026-07-04",
    time: "ab 14 Uhr",
    timeEn: "from 2 pm",
    location: defaultLocation,
  },
  {
    title: "Konzert: EMILY",
    titleEn: "Concert: EMILY",
    date: "2026-07-18",
    time: "ab 16 Uhr",
    timeEn: "from 4 pm",
    location: defaultLocation,
  },
  {
    title: "Konzert: Lennard Bertzbach",
    titleEn: "Concert: Lennard Bertzbach",
    date: "2026-08-22",
    time: "ab 16 Uhr",
    timeEn: "from 4 pm",
    location: defaultLocation,
  },
  {
    title: "Konzert: Piano Duo Kondraschewa / Chica",
    titleEn: "Concert: Piano Duo Kondraschewa / Chica",
    date: "2026-09-05",
    time: "ab 19:30 Uhr",
    timeEn: "from 7:30 pm",
    location: defaultLocation,
  },
  {
    title: "Musikalische Lesung: Monströses aus dem Meer",
    titleEn: "Musical Reading: Monstrous Things from the Sea",
    date: "2026-09-13",
    time: "ab 20 Uhr",
    timeEn: "from 8 pm",
    location: defaultLocation,
    descriptionDe:
      "Mit Franziska Mencz, Christian Kaiser und Lennard Bertzbach.",
    descriptionEn:
      "With Franziska Mencz, Christian Kaiser and Lennard Bertzbach.",
  },
];
