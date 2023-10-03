function pokeapi(paramater) {
  var busca = document.getElementById("busca").value;

  var url = `https://pokeapi.co/api/v2/pokemon/${busca || id}`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      document.getElementById("nome").textContent = data.name;
      document.getElementById("id").textContent = data.id;
      var url_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
      document.getElementById("img_pokemon").src = url_img;
      id = document.getElementById("id").textContent = data.id;
    })
    .catch((error) => {
      alert(error);
    });
}

var id = 1;

function NextOrPrev(paramater) {
  if (paramater == "next") {
    id++;
  }
  if (paramater == "prev") {
    id--;
  }
  if (paramater == "ligar") {
    id = 1;
  }
  if (id == 0) {
    NextOrPrev("ligar");
  } else {
  }

  var url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(id);
      document.getElementById("nome").textContent = data.name;
      document.getElementById("id").textContent = data.id;
      var url_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
      document.getElementById("img_pokemon").src = url_img;
    })
    .catch((error) => {
      alert(error);
    });
}
