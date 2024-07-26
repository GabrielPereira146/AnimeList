import axios from "axios";
import { MangaData } from "../interface/MangaData";

const KITSU_BASE_URL = 'https://kitsu.io/api/edge/manga';

const fetchAllMangas = async (): Promise<MangaData[]> => {
  const response = await axios.get(KITSU_BASE_URL, {
    params: {
      'page[limit]': 20, // Ajuste conforme necessário
      'page[offset]': 0
    }
  });
  return response.data.data;
};

const fetchPopularMangas = async (): Promise<MangaData[]> => {
  const response = await axios.get(KITSU_BASE_URL, {
    params: {
      'sort':'popularityRank',
      'page[limit]': 7,
      'page[offset]': 0
    }
  });
  return response.data.data;
};

const fetchRecentMangas = async (): Promise<MangaData[]> => {
  const response = await axios.get(KITSU_BASE_URL, {
    params: {
      'sort': '-updatedAt',
      'page[limit]': 20, // Ajuste conforme necessário
      'page[offset]': 0
    }
  });
  return response.data.data;
};

const fetchTopMangas = async (): Promise<MangaData[]> => {
  const response = await axios.get(KITSU_BASE_URL, {
    params: {
      'sort': '-averageRating',
      'page[limit]': 20, // Ajuste conforme necessário
      'page[offset]': 0
    }
  });
  return response.data.data;
};



export { fetchAllMangas, fetchPopularMangas, fetchRecentMangas, fetchTopMangas};
