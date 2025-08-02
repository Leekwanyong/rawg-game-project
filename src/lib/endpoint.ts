const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_GAMES_URL = `https://api.rawg.io/api/games`;

if (!API_KEY) {
  throw new Error('VITE_RAWG_API_KEY 설정되지 않았습니다.');
}

export interface GameListQuery {
  page?: string;
  page_size?: string;
  search?: string;
  genres?: string;
  ordering?: string;
  platforms?: string;
}

const ENDPOINT = {
  GETGAMELIST: (query?: GameListQuery) => {
    const params = new URLSearchParams();
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined) {
          params.append(key, value);
        }
      });
    }
    params.append('key', API_KEY);
    return `${BASE_GAMES_URL}?${params.toString()}`;
  },
  GETGAMESCREENSHOT: (gamePk: string) =>
    `${BASE_GAMES_URL}/${gamePk}/screenshots?${API_KEY}`,
};

export default ENDPOINT;
