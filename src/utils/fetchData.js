export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '31d6740e65msha545065140d5023p1b8c40jsnd6e0f8d59b90',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '31d6740e65msha545065140d5023p1b8c40jsnd6e0f8d59b90',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()
     return data
}