const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const Palabras = text.trim().split(" "); // TRIM quita espacios del principio y final del string SPLIT separa por palabras
    // words = words.filter(word => word.length > 0 && word.search(/^\W?[a-zA-Z]+\W?$/) !== -1);
    // console.log(Palabras-length);
    if(text === ' ' || text === ''){
      return 0
    }else{
      
      return Palabras.length;
    }
    // console.log(words.length);
 
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    // console.log(text.length);
    return text.trim().length
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //a text quitar espacios del principio y del final (TRIM)
    // recorrar text con bucle FOR // prueba split
    const sinPuntuacion =text.replace(/[.,#!$%^&*;:{}=\-_`~() ]/g, ''); //Remplaza los signos y espacio por un caracter nulo
    // let character = text.trim() .replace("")
    return sinPuntuacion.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text = text.trim();
    const words = text.split(" ");
    let numberCharacters = 0;
    words.forEach(word => numberCharacters += word.length);
    const average = numberCharacters/words.length;
    return parseFloat(average.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const contNumero = text.match(/\b\d+(\.\d+)?\b/g);
    return (contNumero !== null) ? contNumero.length : 0;
  },
  getNumberSum: (text) => {
    const sumaNumero = text.match(/\b\d+(\.\d+)?\b/g);
    let sum = 0;
    if (sumaNumero !== null) {
      for (let i = 0; i < sumaNumero.length; i++) {
        sum += parseFloat(sumaNumero[i]);
      }
    }
    return sum; 
  },//TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  
  
  
};


export default analyzer;
