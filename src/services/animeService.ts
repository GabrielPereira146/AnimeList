import axios from "axios";
import { AnimeData} from "../interface/AnimeData";

const KITSU_BASE_URL = 'https://kitsu.io/api/edge/anime';

const fetchAllAnimes = async (): Promise<AnimeData[]> => {
  const response = await axios.get(KITSU_BASE_URL, {
    params: {
      'page[limit]': 20, // Ajuste conforme necessário
      'page[offset]': 0
    }
  });
  return response.data.data;
};

const fetchPopularAnimes = async (): Promise<AnimeData[]> => {
  const response = await axios.get(KITSU_BASE_URL, {
    params: {
      'sort': 'popularityRank', 
      'page[limit]': 7, // Limite de resultados
      'page[offset]': 0
    }
  });
  
  return response.data.data;
  
};

const fetchSeasonAnime = async (): Promise<AnimeData[]> => {
  const response = await axios.get(KITSU_BASE_URL, {
    params: {
      'filter[seasonYear]': new Date().getFullYear(),
      'filter[season]': 'summer', // Ajuste para a estação atual
      'page[limit]': 20, // Ajuste conforme necessário
      'page[offset]': 0
    }
  });
  return response.data.data;
};

const fetchTopAnime = async (): Promise<AnimeData[]> => {
  const response = await axios.get(KITSU_BASE_URL, {
    params: {
      'sort': '-averageRating',
      'page[limit]': 20, // Ajuste conforme necessário
      'page[offset]': 0
    }
  });
  return response.data.data;
};

export { fetchAllAnimes, fetchPopularAnimes, fetchSeasonAnime, fetchTopAnime };
