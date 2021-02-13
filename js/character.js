export default class Character {
  constructor({name, status, species, image}) {
    this.name = name;
    this.status = status;
    this.species = species;
    this.image = image;
    this.container_card = document.querySelector('.container_card')
    this.renderCards()
  }

  consola(characters) {
    characters.map(character => {
      console.log(character.name);
    })
  }

  renderCards() { 
    this.clear()
    setTimeout(() => {
      this.container_card.innerHTML += `
        <div class="card">
          <img loading="lazy" src="${this.image}" alt=""/>
          <h2>${this.name}</h2>

          <div class="${this.status}" title="${this.status}"></div>
        </div>
      `
    },0)
  }  

  clear() { 
    while (this.container_card.firstChild) {
      this.container_card.removeChild(this.container_card.firstChild);
    }
  }
}