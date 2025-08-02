import ENDPOINT, { type GameListQuery } from './endpoint.ts';

const getRawgGameList = async (query?: GameListQuery) => {
  const response = await fetch(ENDPOINT.GETGAMELIST(query));
  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

export default getRawgGameList;
