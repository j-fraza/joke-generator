const jokeText = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');


async function generateJokes() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
    const data = await res.json();
    
    let joke = '';
    if (data.joke == undefined) {
        joke = `${data.setup} <br /><br />${data.delivery}`;
    } else {
        joke = data.joke;
    }
    jokeText.innerHTML = joke;
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();