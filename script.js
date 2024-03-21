const chave = "a12ee51121befbf3aca3dec268e8a6d2";

function colocarDadosNaTela(dados) {
  console.log(dados);
  document.querySelector(".temp-cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
  document.querySelector(
    ".img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}

document.addEventListener("keypress", function(e){
  if (e.key === "Enter"){
      const button = document.querySelector(".botao-busca");
      button.click();
  }
})