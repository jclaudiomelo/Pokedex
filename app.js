function pokeapi(){
debugger
var busca = document.getElementById('busca').value;
var url = `https://pokeapi.co/api/v2/pokemon/${busca}`

fetch(url)
    .then((resp) => resp.json())
    document.getElementById('nome')
    console.log()
}


function pokeapi() {
    var busca = document.getElementById('busca').value;
    var url = `https://pokeapi.co/api/v2/pokemon/${busca}`;
  
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
          
        document.getElementById('nome').textContent = `Name: ${data.name}`;
        
        console.log(data)
        
      })
      .catch((error) => {
        console.error(alert(error));
      });
  }
  