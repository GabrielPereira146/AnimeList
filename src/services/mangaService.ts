import axios, { AxiosPromise, AxiosResponse } from "axios";
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
      'sort': '-userCount',
      'page[limit]': 7,
      'page[offset]': 0
    }
  });
  return response.data.data;
};

const fetchSeasonMangas = async (): Promise<MangaData[]> => {
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



export { fetchAllMangas, fetchPopularMangas, fetchSeasonMangas, fetchTopMangas};
