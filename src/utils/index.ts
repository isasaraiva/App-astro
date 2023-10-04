export function fraseAleatoria() {
    const frases = [
      "Quando se sentir perdido na confusão interior, respire fundo e observe-a como um observador silencioso. Na observação tranquila você encontrará clareza.",
      "Quando se sentir perdido na confusão interior, respire fundo e observe-a como um observador silencioso. Na observação tranquila você encontrará clareza.",
      "Quando se sentir perdido na confusão interior, respire fundo e observe-a como um observador silencioso. Na observação tranquila você encontrará clareza."
    ];
  
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
  }
  
  export const frase = fraseAleatoria();
  console.log(frase);