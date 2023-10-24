import { getCountries } from '../api/fetch-countries';
import { shuffleArray } from '../lib/shuffleArray';

export class TriviaCreator {
 
  constructor(region, qQuestions) {
    this.countries = getCountries(region);
    this.qQuestions = qQuestions;
  }

  getTrivia() {
    const randomCountry = this.getRandomCountry();

    const options = [
      randomCountry,
      ...this.getRandomCountries(3)
    ].map(country => country.name);

    const shuffledOptions = shuffleArray(options);    
    
    const trivia = {
      flag: randomCountry.code,
      correctAnswer: randomCountry.name,
      options: shuffledOptions
    }

    return trivia;
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

