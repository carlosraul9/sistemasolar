// Función para mostrar la información del planeta
function showPlanetInfo(planetName) {
  var planetInfo = {
    "Plutón": "Nuestro amor es como Plutón, lleno de misterio y encanto.",
    "Neptuno": "Nuestro amor es profundo como los océanos de Neptuno, un viaje sin fin hacia la felicidad.",
    "Urano": "Eres mi Urano, lo diferente y lo inesperado que da color a mi vida.",
    "Saturno": "Como los anillos de Saturno, nuestro amor es una vuelta eterna alrededor del otro.",
    "Júpiter": "Eres mi Júpiter, el gigante que llena mi universo de alegría y grandeza.",
    "Marte": "Nuestro amor es tan fuerte como la fuerza gravitatoria de Marte.",
    "Tierra": "Eres mi mundo, mi Tierra, el único lugar donde quiero estar.",
    "Venus": "Como Venus, nuestro amor brilla con intensidad en la oscuridad.",
    "Mercurio": "Eres mi Mercurio, el planeta más cercano a mi corazón.",
    "Sol": "Eres mi Sol, la fuente de luz y calor que ilumina cada rincón de mi corazón.",
    "Cinturón de Asteroides": "Mi amor por ti es como el Cinturón de Asteroides, una conexión especial que une nuestros corazones en un espacio lleno de misterio y belleza, recordándome que nuestra historia juntos es tan única como los cuerpos celestes que lo componen."
  };

  document.getElementById("planet-info").innerText = planetInfo[planetName];
  document.getElementById("popup").style.display = "block";
}

// Función para cerrar el popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Agregar eventos de clic a las órbitas
var orbitas = document.querySelectorAll('.orbita');
orbitas.forEach(function(orbita) {
  orbita.addEventListener('click', function() {
    var planetName = this.textContent.trim();
    showPlanetInfo(planetName);
  });
});