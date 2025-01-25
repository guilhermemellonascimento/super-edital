export function slugify(string) {
  if (!string || typeof string !== 'string') {
    return '';
  }

  return string
    .normalize('NFD') // Normalize to decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-') // Replace spaces or underscores with a hyphen
    .replace(/[^\w\-]+/g, ''); // Remove non-word characters
}
