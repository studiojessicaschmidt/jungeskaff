/**
 * Video-Autoplay
 *
 * Spielt alle `<video data-video-autoplay>` automatisch ab, sobald
 * sie zu mindestens 50 % im Viewport sichtbar sind. Pausiert, wenn
 * sie wieder verschwinden — spart Akku/CPU und verhindert dass das
 * Video unsichtbar weiterläuft.
 *
 * Browser-Voraussetzung für Autoplay: das <video> muss `muted` sein
 * (Attribut wird in der Astro-Komponente gesetzt). Wenn der Nutzer
 * `prefers-reduced-motion` aktiviert hat, wird Autoplay komplett
 * unterdrückt.
 */

function init(): void {
  const videos = document.querySelectorAll<HTMLVideoElement>(
    "[data-video-autoplay]",
  );
  if (!videos.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          // play() liefert ein Promise — bei verweigertem Autoplay
          // (z. B. ungemuted oder Browser-Policy) leise ignorieren.
          video.play().catch(() => {
            /* Autoplay vom Browser blockiert — kein Fehler nötig. */
          });
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.5 },
  );

  videos.forEach((video) => observer.observe(video));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
