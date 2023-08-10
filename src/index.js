import analyzer from './analyzer.js';

// Declaramos las constantes para que Java las relacione

const botonBorrar = document.getElementById ('reset-button');
const textarea = document.querySelector('textarea[name="user-input rows="10" cols= "30" placeholder= "Ingresa Texto""]');
const contPalabra = document.querySelector('li[data-testid="word-count"]');
const contCaracter = document.querySelector('li[data-testid="character-count"]');
const contCaractersinespacio = document.querySelector('li[data-testid="character-no-spaces-count"]');
const contNumero = document.querySelector('li[data-testid="number-count"]');
const sumaNumeros = document.querySelector('li[data-testid="number-sum"]');
const promedioPalabra = document.querySelector('li[data-testid="word-length-average"]');

//Función boton limpiar
function borrarTexto (){
  textarea.value= "" ; 
  datosMetrica("")//borra el texto del area y de la metrica
}
botonBorrar.addEventListener('click',borrarTexto)

//Función para llamar a los elementos que se escriban en el textarea y se escriban los resultados de las metricas de textarea
//Junto al contenedor

textarea.addEventListener('keyup',datosMetrica )

function datosMetrica() {
  const text = textarea.value;
  const contadorPalabras = analyzer.getWordCount(text);
  contPalabra.textContent = 'Palabras : ' + contadorPalabras
  const contadorCaracter = analyzer.getCharacterCount(text);
  contCaracter.textContent = 'Caracteres : ' + contadorCaracter
  const contadorCaractersinEspacio = analyzer.getCharacterCountExcludingSpaces(text);
  contCaractersinespacio.textContent = 'Caracteres sin espacio : ' + contadorCaractersinEspacio
  const contadorNumero = analyzer.getNumberCount(text);
  contNumero.textContent = 'Números : ' + contadorNumero
  const sumaNumero = analyzer.getNumberSum(text);
  sumaNumeros.textContent = 'Suma total de números : ' + sumaNumero
  const promedio = analyzer.getAverageWordLength(text);
  promedioPalabra.textContent = 'Longitud promedio :' + promedio 
  
} 
  








