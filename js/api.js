export default class getCharacters {
  async apiConnection (URL, NPgame) {
    const response = await fetch(URL+NPgame)
    const data = await response.json()
    return data
  }
}