class MarvelService {
  _apiUrl = "https://gateway.marvel.com:443/v1/public";
  _apiKey = "apikey=25b9420895b3ab1a8a5fa316d400e653";

  getResource = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error, status code: ${response.status}`);
    }

    return response.json();
  }

  getAllCharacters = () => {
    return this.getResource(`${this._apiUrl}/characters?limit=9&offset=210&${this._apiKey}`)
  }

  getCharacter = (id) => {
    return this.getResource(`${this._apiUrl}/characters/${id}?${this._apiKey}`);
  }
}

export default MarvelService;