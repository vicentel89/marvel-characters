import crypto from 'crypto';

export function generateMarvelApiUrl(endpoint: string): string {
  const publicKey = process.env.MARVEL_PUBLIC_API_KEY;
  const privateKey = process.env.MARVEL_PRIVATE_API_KEY;

  if (!publicKey || !privateKey) {
    throw new Error('Missing Marvel API keys');
  }

  const ts = new Date().getTime();
  const hash = crypto
    .createHash('md5')
    .update(ts + privateKey + publicKey)
    .digest('hex');

  return `http://gateway.marvel.com/v1/public/${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
}
