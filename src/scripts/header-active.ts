/**
 * Header-Active
 *
 * Markiert den Nav-Link, dessen Section gerade aktiv ist, mit
 * `data-active="true"`. CSS in Header.astro stellt diesen Zustand bold dar.
 *
 * Aktiv = die Section, deren Oberkante zuletzt den Header-Boden
 * passiert hat. So wird ein Link erst fett wenn man wirklich bei
 * dieser Section angekommen ist — nicht schon wenn sie am unteren
 * Viewport-Rand auftaucht.
 */

function init(): void {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".site-header__link"),
  );
  if (!links.length) return;

  const header = document.querySelector<HTMLElement>(".site-header");

  const entries: Array<{ id: string; link: HTMLAnchorElement; section: HTMLElement }> = [];

  links.forEach((link) => {
    const href = link.getAttribute("href") ?? "";
    const hashIndex = href.indexOf("#");
    if (hashIndex < 0) return;
    const id = href.slice(hashIndex + 1);
    if (!id) return;
    const section = document.getElementById(id);
    if (!section) return;
    entries.push({ id, link, section });
  });

  if (!entries.length) return;

  function update(): void {
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    // Eine Section gilt als erreicht wenn ihre Oberkante den Header-Boden
    // passiert hat (plus kleiner Puffer von 8px).
    const threshold = headerHeight + 8;

    // Letzte Section in DOM-Reihenfolge, deren top <= threshold.
    let activeId: string | null = null;
    for (const entry of entries) {
      if (entry.section.getBoundingClientRect().top <= threshold) {
        activeId = entry.id;
      }
    }

    entries.forEach(({ id, link }) => {
      if (id === activeId) {
        link.setAttribute("data-active", "true");
      } else {
        link.removeAttribute("data-active");
      }
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
