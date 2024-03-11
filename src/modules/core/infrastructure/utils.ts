export async function fetchAndParse(url: string, options?: RequestInit) {
  const res = await fetch(url, options);
  const { data } = await res.json();

  return data;
}
