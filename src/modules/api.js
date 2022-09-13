const apiGetGreeting = () => fetch('http://localhost:3001/greetings')
  .then((response) => response.text())
  .then((text) => JSON.parse(text).message)
  .catch((error) => {
    throw error;
  });

export default apiGetGreeting;
