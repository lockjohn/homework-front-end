export const fetchSearchGiphys = searchTerm => {

return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=5`)
.then(response => {
    return response.json();
  });
};

export const fetchTrendingGiphys = (offset = 0, rating = "") => {

  return fetch(`http://api.giphy.com/v1/gifs/trending?offset=${offset}&rating=${rating}&api_key=dc6zaTOxFJmzC`)
    .then(response => {
      return response.json();
    });
};
