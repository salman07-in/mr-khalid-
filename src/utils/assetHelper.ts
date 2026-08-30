/**
 * Resolves a public asset path against Vite's configured BASE_URL.
 * This guarantees assets load reliably across local development, custom domains,
 * and GitHub Pages repositories deployed under a subdirectory (e.g., /mr-khalid-/).
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';

  // Return absolute URLs and data/blob URIs as-is
  if (
    path.startsWith('data:') ||
    path.startsWith('blob:') ||
    path.startsWith('http://') ||
    path.startsWith('https://')
  ) {
    return path;
  }

  const cleanPath = path.replace(/^\/+/, '');
  const baseUrl = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL || '/';

  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};
