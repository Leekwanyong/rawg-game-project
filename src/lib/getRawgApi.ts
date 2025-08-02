import ENDPOINT from './endpoint.ts';

const getRawgGameList = async () => {
  const response = await fetch(ENDPOINT.GETGAMELIST());
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export default getRawgGameList;
