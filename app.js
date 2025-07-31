const nombres = [];
function agregarAmigo() {
  const input = document.getElementById("amigoInput");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
 nombres.push(nombre);

  const lista = document.getElementById("listaAmigos");
  const item = document.createElement("li");
  item.textContent = nombre;
  lista.appendChild(item);

  input.value = ""; 
}
function sortearAmigo() {
  if (nombres.length === 0) {
    alert("Primero tenés que ingresar al menos un nombre.");
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indice];

  const resultado = document.getElementById("resultado");
  resultado.textContent = `El amigo secreto es: ${nombreSorteado}`;
}

