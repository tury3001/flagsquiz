import { getCountries } from '../api/fetch-countries';
import { shuffleArray } from '../lib/shuffleArray';

export class TriviaCreator {
 
  constructor(region, qQuestions) {
    this.region = region;
    this.qQuestions = qQuestions;
  }

  getTrivia() {
    let trivia = [];
    for (let i = 0; i < this.qQuestions; i++) {
      this.countries = getCountries(this.region);  
      this.removeCountries(trivia.map( t => t.correctAnswer));
      trivia.push(this.getQuestion());
    }

    return trivia;
  }

  removeCountries(countries) {
    for (const country of countries) {      
      this.countries = this.countries.filter( ({ name }) => name !== country);
    }
  }

  getQuestion() {
    const randomCountry = this.getRandomCountry();

    const options = [
      randomCountry,
      ...this.getRandomCountries(3)
    ].map(country => country.name);

    const shuffledOptions = shuffleArray(options);
    const formattedOptions = shuffledOptions.map( (option, i) => {
      return { id: String.fromCharCode('A'.charCodeAt() + i), text: option }
    })

    return {
      flag: randomCountry.code,
      correctAnswer: randomCountry.name,
      options: formattedOptions
    }
  }

  getRandomCountry() {
    return this.countries.splice(this.getRandomPosition(), 1)[0];
  }

  getRandomCountries(n) {
    let randomCountries = [];
    for (let i = 0; i < n; i++)
      randomCountries.push(...this.countries.splice(this.getRandomPosition(), 1));
    return randomCountries;
  }

  getRandomPosition() {
    return Math.floor(Math.random() * this.countries.length);
  }
}

