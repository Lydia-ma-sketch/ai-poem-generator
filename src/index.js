function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let topicElement = document.querySelector("#topic-input");
  apiKey = "ec3f3cc5ba623cbcd7873aab4b1c3t0o";
  prompt = `User instructions: Please generate a poem about ${topicElement.value}`;
  context =
    "You are a romantic poem expert and you love to write short and sweet poems. Please follow user instructins to write a maximum 4-line poem in basic HTML by separating each line by <br/> excluding html or ```. Please sign at the bottom of the poem as 'SheCodes AI' with a <strong> element. Thank you";
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
  poemElement.classList.add("poem");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${topicElement.value}</div>`;
}
let poemElement = document.querySelector("#poem");
poemElement.classList.remove("poem");
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
