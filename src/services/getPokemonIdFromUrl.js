export function getPokemonIdFromUrl(url) {
  const parts = url.split("/");
  return parts[parts.length - 2];
}
