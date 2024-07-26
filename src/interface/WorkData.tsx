export interface WorkData {
  id: string;
  attributes: {
      synopsis: string;
      titles: {
          en: string;
          en_jp: string;
      };
      averageRating: string;
      status: string;
      canonicalTitle: string;
      posterImage: {
          original: string;
      };
      coverImage:{
         original: string;
      };
      userCount: number;
      startDate: string;
  };
}
