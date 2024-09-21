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
      var url_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`;
      document.getElementById("ability").textContent = data.abilities[0].ability.name
     
      tp = document.getElementById("type").textContent = data.types[0].type.name;
      document.getElementById("type").setAttribute("content", tp);
      document.getElementById("img_pokemon").src = url_img;
    })
    .catch((error) => {
      mostrarModalDeErro();
      console.log(error);
    });
}

//classic
function buscarYellow(paramater) {
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
    buscarYellow("ligar");
  }
  if (paramater == "img_back") {
    
    var id = document.getElementById("id").textContent;
    document.getElementById("img_pokemon").src = "../img/img_not_found.png";
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
      var url_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
      tp = document.getElementById("type").textContent = data.types[0].type.name;
      document.getElementById("type").setAttribute("content", tp);
      document.getElementById("img_pokemon").src = url_img;
    })
    .catch((error) => {
      console.log(error);
      mostrarModalDeErro();
    });
}

//new
function buscarnew(paramater) {
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
    buscarnew("ligar");
  }
  if (paramater == "img_back") {
    var id = document.getElementById("id").textContent;
    document.getElementById("img_pokemon").src = "../img/img_not_found.png";
    return;
  }
  if (paramater == "img_front") {
    var id = document.getElementById("id").textContent;
    var url_img_back = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.png`;
    document.getElementById("img_pokemon").src = url_img_back;
  }

  var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      document.getElementById("nome").textContent = data.name;
      document.getElementById("id").textContent = data.id;
      var url_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`;
      tp = document.getElementById("type").textContent = data.types[0].type.name;
      document.getElementById("type").setAttribute("content", tp);
      document.getElementById("img_pokemon").src = url_img;
    })
    .catch((error) => {
      mostrarModalDeErro();
      console.log(error);
    });
}

//VERIFICAR ORIENTAÇÃO
function redirecionarComBaseNaOrientacao() {
  if (window.innerHeight > window.innerWidth) {
    // vertical
    window.location.href = "";
  } else {
    // horizontal
    window.location.href = "/Pokedex/index.html";
  }
}
window.addEventListener("orientationchange", redirecionarComBaseNaOrientacao);

//modal erro
var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");

modalImage.onclick = function () {
  modal.style.display = "none";
};

function mostrarModalDeErro() {
  modal.style.display = "block";
}
