function pokeapi() {
 
  var busca = document.getElementById("busca").value;
  var url = `https://pokeapi.co/api/v2/pokemon/${busca}`;

  fetch(url).then((resp) => resp.json());
  document.getElementById("nome");
}

function pokeapi() {
  var busca = document.getElementById("busca").value;
  var url = `https://pokeapi.co/api/v2/pokemon/${busca}`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      document.getElementById("nome").textContent = data.name;
      document.getElementById("id").textContent = data.id;
      var url_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
      document.getElementById("img_pokemon").src = url_img;

    })
    .catch((error) => {
        alert(error)
      });
}
