/**
 * Collapsible
 *
 * Generisches Aufklapp/Zuklapp-Verhalten für Sektionen, deren Inhalt
 * standardmäßig gekürzt dargestellt wird. Wird genutzt für die About-
 * Sektion (Teaser-Text) und die Galerie (8 + 4 Vorschau).
 *
 * Markup-Konvention:
 *   <div data-collapsible data-expanded="false">
 *     <!-- Inhalt -->
 *     <button
 *       type="button"
 *       data-collapsible-trigger
 *       data-label-collapsed="Mehr lesen"
 *       data-label-expanded="Weniger anzeigen"
 *       aria-expanded="false"
 *     >
 *       <span data-label>Mehr lesen</span>
 *     </button>
 *   </div>
 *
 * Der Button toggelt `data-expanded` auf dem nächsten Vorfahren mit
 * `data-collapsible`. CSS reagiert auf das Attribut und zeigt mehr oder
 * weniger Inhalt. aria-expanded wird parallel gepflegt für
 * Screenreader.
 */

function init(): void {
  const triggers = document.querySelectorAll<HTMLButtonElement>(
    "[data-collapsible-trigger]"
  );

  triggers.forEach((trigger) => {
    const container = trigger.closest<HTMLElement>("[data-collapsible]");
    if (!container) return;

    trigger.addEventListener("click", () => {
      const isExpanded = container.dataset.expanded === "true";
      const next = !isExpanded;

      container.dataset.expanded = String(next);
      trigger.setAttribute("aria-expanded", String(next));

      // Optional: Button-Label tauschen.
      const labelEl = trigger.querySelector<HTMLElement>("[data-label]");
      const labelCollapsed = trigger.dataset.labelCollapsed;
      const labelExpanded = trigger.dataset.labelExpanded;
      if (labelEl && labelCollapsed && labelExpanded) {
        labelEl.textContent = next ? labelExpanded : labelCollapsed;
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
