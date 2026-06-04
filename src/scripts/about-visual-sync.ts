/**
 * About-Visual-Sync
 *
 * Setzt im Desktop-Breakpoint (>=75em / 1200px) die Höhe des
 * `.about__visual-wrapper` auf die aktuelle Höhe des `.about__body`,
 * damit die Cow optisch genau so hoch ist wie der Mengentext rechts.
 * Der Wrapper sitzt via `align-self: center` vertikal mittig in
 * seiner Spalte (die heading + body umspannt). Die Cow im Wrapper
 * füllt die Wrapper-Höhe und behält ihre natürliche Aspect Ratio,
 * dadurch ist sie horizontal etwas breiter als die Spalte und
 * überläuft die Seitenränder leicht.
 *
 * Reagiert auf Resize-Events und Body-Höhenänderungen via
 * ResizeObserver (z. B. nach Font-Load). Unter Desktop wird die
 * explizite Höhe wieder entfernt.
 */

const DESKTOP_BREAKPOINT_PX = 1200;

function syncVisualHeight(): void {
  const wrapper = document.querySelector<HTMLElement>(".about__visual-wrapper");
  const body = document.querySelector<HTMLElement>(".about__body");
  const heading = document.querySelector<HTMLElement>(".about__heading");
  if (!wrapper || !body || !heading) return;

  if (window.innerWidth >= DESKTOP_BREAKPOINT_PX) {
    // Höhe = Gesamtsektion (heading top → body bottom) × 0.9.
    // Cow ist damit 10 % kleiner als die volle Sektionshöhe, aber
    // immer noch grösser als der Body-Text und vertikal zentriert
    // in ihrer Hälfte (via align-self: center).
    const sectionHeight =
      body.getBoundingClientRect().bottom - heading.getBoundingClientRect().top;
    wrapper.style.height = `${sectionHeight * 0.9}px`;
  } else {
    wrapper.style.height = "";
  }
}

function init(): void {
  syncVisualHeight();
  window.addEventListener("resize", syncVisualHeight);

  const body = document.querySelector<HTMLElement>(".about__body");
  if (body && "ResizeObserver" in window) {
    const observer = new ResizeObserver(syncVisualHeight);
    observer.observe(body);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
window.addEventListener("load", syncVisualHeight);
