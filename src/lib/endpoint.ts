const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_GAMES_URL = `https://api.rawg.io/api/games`;

interface GameListQuery {
  page?: string;
  page_size?: string;
  search?: string;
  genres?: string;
  ordering?: string;
  platforms?: string;
}

const ENDPOINT = {
  GETGAMELIST: (query?: GameListQuery) => {
    const queryString = new URLSearchParams(
      query as Record<string, string>,
    ).toString();
    return `${BASE_GAMES_URL}?key=${API_KEY}&${queryString}`;
  },
  GETGANESCRENNSHOT: (gamePk: string) =>
    `${BASE_GAMES_URL}/${gamePk}/screenshots?${API_KEY}`,
};

export default ENDPOINT;
