export const getQuestions = () => {
  fetch('./data/trivia-data.json')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(console.error());
}