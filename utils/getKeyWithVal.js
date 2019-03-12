export default function getKeyWithVal(val, haystack) {
  return Object.keys(haystack).find(k => val === haystack[k]);
}
