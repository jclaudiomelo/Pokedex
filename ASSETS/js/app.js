function buscarPokemon(paramater) {
  
  if (paramater == "buscar") {
    var id = document.getElementById("buscar").value;
  }
  if (paramater == "next") {
    var id = document.getElementById("id").textContent;
    id++;
  }
  if (paramater == "prev") {
    var id = document.getElementById("id").textContent;
    id--;
  }
  if (paramater == "ligar") {
    
    id = 1;
  }
  if (id == 0) {
    buscarPokemon("ligar");
  }
  if (paramater == "img_back") {
    var id = document.getElementById("id").textContent;
    var url_img_back = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${id}.gif`;
    document.getElementById("img_pokemon").src = url_img_back;

    return;
  }
  if (paramater == "img_front") {
    var id = document.getElementById("id").textContent;
    var url_img_back = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    document.getElementById("img_pokemon").src = url_img_back;
  }

  var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      document.getElementById("nome").textContent = data.name;
      document.getElementById("id").textContent = data.id;
      // var url_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
      var url_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`;
      var url_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`;
      https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif
      
      console.log(data.types[0].type.name)
      document.getElementById("type").textContent = data.types[0].type.name;
      document.getElementById("img_pokemon").src = url_img;
    })
    .catch((error) => {
      alert(error);
    });
}
