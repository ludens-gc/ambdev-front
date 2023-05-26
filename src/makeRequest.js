export default function makeRequest(element) {
  const algorithm = element.getAttribute("data-algorithm");
  const language = element.getAttribute("language");
  let port = 3000;
  if (language === "java") {
    port = 8080;
  }
  element.addEventListener("click", () => {
    performPOSTRequest(algorithm, language, port);
  });
}

function updateOutputText(outputId, language, result) {
  const outputElement = document.querySelector(`#${outputId}`);
  outputElement.innerText = `Resultado [ ${language} ]: ${result}`;
}

function performPOSTRequest(algo, language, port) {
  const url = `http://localhost:${port}/algorithms`;
  console.log(url);
  const inputValue = document.querySelector(`#inputValue-${algo}`).value;
  console.log(inputValue);
  const outputId = `output-${algo}`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: inputValue, algorithm: algo }),
  })
    .then((response) => response.json())
    .then((data) => {
      updateOutputText(outputId, language, data.result);
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}
