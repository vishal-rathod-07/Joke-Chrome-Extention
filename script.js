fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
  .then((data) => data.json())
  .then((jokeData) => {
    const jokeText = jokeData.joke;
    const jokeElement = document.getElementById("jokeElement");

    jokeElement.innerHTML = jokeText;
  });
