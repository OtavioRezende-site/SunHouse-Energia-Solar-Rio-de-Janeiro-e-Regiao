/**
 * Helper to resolve public assets respecting Vite's base URL.
 * In development (base: '/'), returns e.g. '/marca/logo-original.png'.
 * In production GitHub Pages build (base: '/SunHouse-Energia-Solar-Niter-i-e-Regi-o/'),
 * returns '/SunHouse-Energia-Solar-Niter-i-e-Regi-o/marca/logo-original.png'.
 * External or protocol URLs (https:, http:, data:, blob:, mailto:, tel:) are returned as-is.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';

  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}
