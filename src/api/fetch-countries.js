import * as countriesData from '../data/countries.json';

export const getCountries = ( region ) => {

  const { countries } = countriesData;

  if (region) {
    return countries.filter( country => country.region === region)
  } else {
    return countries;
  }

}