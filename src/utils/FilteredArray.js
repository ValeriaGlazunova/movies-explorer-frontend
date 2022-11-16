export function searchFilter(array, text, short) {
  if (!array) {
    return [];
  }

  let filtered = [...array];

  if (text) {
    filtered = filtered.filter((element) =>
      element.nameRU.toLowerCase().includes(text.toLowerCase())
    );
  }

  if (short) {
    return filtered.filter((element) => element.duration <= 60);
  }

  return filtered;
}
