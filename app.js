const pronoun = ["the", "our"]
const adj = ["great", "big", "little", "quick"]
const noun = ["jogger", "racoon"]
const dot = [".com", ".cl", ".us"]

const getRandomName = () => `${pronoun[Math.floor(Math.random() * pronoun.length)]}${adj[Math.floor(Math.random() * adj.length)]}${noun[Math.floor(Math.random() * noun.length)]}${dot[Math.floor(Math.random() * dot.length)]}`;

const setRandomName = () => {
    document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById("generate")
    .addEventListener("click",setRandomName);


    setRandomName();