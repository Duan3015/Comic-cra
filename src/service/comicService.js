import axios from "axios";
import { COMICS_URL, COMICS_URL_END } from "../configs/constants";

export async function getComic(id) {
  const response = await axios.get(`${COMICS_URL}${id}${COMICS_URL_END}`,{
    headers: {'Access-Control-Allow-Origin': '*'}
  });
  return response;
}
