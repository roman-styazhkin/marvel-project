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

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiUrl}/characters/${id}?${this._apiKey}`);
    return this._transformChar(res.data.results[0]);
  }

  _transformChar = (char) => {
    return {
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    }
  }
}

export default MarvelService;