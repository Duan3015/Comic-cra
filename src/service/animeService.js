import axios from "axios";
import { ANIME_API_URL } from "../configs/constants";

export async function getAnime(id) {
  try {
    const response = await axios.get(`${ANIME_API_URL}${id}`);
    return response;
  } catch (error) {
    console.log("axio error " + error);
    return error;
  }
}
