/**
 * Lightbox-Script
 *
 * Bedient den <dialog data-lightbox>-Modal in Lightbox.astro:
 * - Klick auf ein Galerie-Bild ([data-gallery-trigger]) öffnet den
 *   Dialog mit dem zugehörigen Bild in voller Originalfarbe.
 * - Pfeiltasten links/rechts und Prev/Next-Buttons navigieren zwischen
 *   allen Galerie-Bildern (auch wenn diese aktuell zugeklappt sind).
 * - Esc und Klick auf Backdrop schliessen den Dialog.
 *
 * Wichtig: Die Lightbox umgeht den Duotone-Filter, weil sie ein eigenes
 * <img>-Element nutzt, das nicht im Filter-Scope der Galerie liegt.
 */

interface GalleryItem {
  src: string;
  srcset: string;
  alt: string;
}

function collectItems(): GalleryItem[] {
  const triggers = document.querySelectorAll<HTMLButtonElement>(
    "[data-gallery-trigger]"
  );
  return Array.from(triggers).map((trigger) => {
    const img = trigger.querySelector<HTMLImageElement>(".gallery__image");
    return {
      src: img?.src ?? "",
      srcset: img?.srcset ?? "",
      alt: img?.alt ?? "",
    };
  });
}

function init(): void {
  const dialog = document.querySelector<HTMLDialogElement>("[data-lightbox]");
  if (!dialog) return;

  const image = dialog.querySelector<HTMLImageElement>(
    "[data-lightbox-image]"
  );
  const closeBtn = dialog.querySelector<HTMLButtonElement>(
    "[data-lightbox-close]"
  );
  const prevBtn = dialog.querySelector<HTMLButtonElement>(
    "[data-lightbox-prev]"
  );
  const nextBtn = dialog.querySelector<HTMLButtonElement>(
    "[data-lightbox-next]"
  );

  let items: GalleryItem[] = [];
  let currentIndex = 0;

  function show(index: number): void {
    if (!image || !items.length) return;
    // Modulo erlaubt Wrap-Around (letztes → erstes, erstes → letztes)
    currentIndex = ((index % items.length) + items.length) % items.length;
    const item = items[currentIndex];
    if (!item) return;

    image.src = item.src;
    image.srcset = item.srcset;
    image.alt = item.alt;
  }

  function open(index: number): void {
    items = collectItems();
    if (!items.length) return;
    show(index);
    if (!dialog.open) {
      dialog.showModal();
      // Bei Tastatur-Nutzer den Fokus auf Schliessen-Button setzen.
      closeBtn?.focus({ preventScroll: true });
    }
  }

  function next(): void {
    show(currentIndex + 1);
  }

  function prev(): void {
    show(currentIndex - 1);
  }

  /* Click-Handler für Galerie-Buttons */
  document
    .querySelectorAll<HTMLButtonElement>("[data-gallery-trigger]")
    .forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const index = parseInt(trigger.dataset.index ?? "0", 10);
        open(index);
      });
    });

  closeBtn?.addEventListener("click", () => dialog.close());
  prevBtn?.addEventListener("click", prev);
  nextBtn?.addEventListener("click", next);

  /* Tastatur: Pfeile navigieren, Esc schliesst (Esc ist nativ im Dialog) */
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  });

  /* Klick ausserhalb des Bildes (auf Backdrop) schliesst */
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
