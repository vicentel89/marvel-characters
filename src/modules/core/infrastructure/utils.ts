export async function checkFetchResponse(res: Response) {
  if (!res.ok) {
    const { status, statusText } = res;
    throw new Error(`Failed to fetch data. Status: ${status}. Message: ${statusText}`);
  }
  return res.json();
}
