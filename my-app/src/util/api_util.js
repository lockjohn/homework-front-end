export const fetchSearchGiphys = searchTerm => {

return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=2`)
.then(response => {
    return response.json();
  });
};

export const fetchTrendingGiphys = (offset = 0) => {

  return fetch(`http://api.giphy.com/v1/gifs/trending?offset=${offset}&api_key=dc6zaTOxFJmzC&limit=2`)
    .then(response => {
      return response.json();
    });
};
