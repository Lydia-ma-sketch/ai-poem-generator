function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: `What is this life, if full of care <br />we have no time, to stand and
          stare`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
