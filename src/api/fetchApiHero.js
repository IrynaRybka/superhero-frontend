import axios from 'axios';
import MD5 from 'crypto-js/md5';

const apiKey = "da1986100e3a9007904ec69fafa0f1f2";
const privateKey = "8c718a87ab2dcdd0bb8db7e00f2b0d6860058f95";
const BASE_URL ="http://gateway.marvel.com";

const getHash = (ts, secreteKey, publicKey) => {
  return  MD5(ts + secreteKey + publicKey).toString();
};

const urlHero = `${BASE_URL}/v1/public/characters`;
const ts = Date.now().toString();
const hash = getHash(ts, privateKey, apiKey);

// get for the search
export const getHeroList = async value => {
  const data = await axios.get(
    `${urlHero}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`
  );
  return data;
};

export const getHeroes = async (offset) => {
    const data = await axios.get(
      `${urlHero}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${offset}`
    );
    return data;
  };

export const getOneHero = async id => {
    const data = await axios.get(
        `${urlHero}/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`);
    return data;
}
