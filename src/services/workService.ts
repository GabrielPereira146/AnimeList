import { WorkData } from "../interface/WorkData";
import { fetchPopularAnimes } from "./animeService";
import { fetchPopularMangas } from "./mangaService";


// Função para Buscar e Combinar Animes e Mangás
const fetchPopularWorks = async (): Promise<WorkData[]> => {
    try {
      const [animes, mangas] = await Promise.all([
        fetchPopularAnimes(),
        fetchPopularMangas()
      ]);
  
      // Combinar e Classificar os Resultados
      const combined = [...animes, ...mangas];
      combined.sort((a, b) => parseFloat(b.attributes.averageRating) - parseFloat(a.attributes.averageRating));
      
      return combined;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  export { fetchPopularWorks};