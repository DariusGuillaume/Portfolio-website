export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith('https://assets.materialup.com') || src.startsWith('https://images.pexels.com')) return src;
  return `https://www.dariusguillaume.xyz/${src}?w=${width}&q=${quality || 75}`;
}
