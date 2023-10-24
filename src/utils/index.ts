import { Text, View } from "react-native";

export function fraseAleatoria() {
  const frases = [
    "Quando se sentir perdido na confusão interior, respire fundo e observe-a como um observador silencioso. Na observação tranquila você encontrará clareza.",
    "Respire fundo, hoje é dia de ser proativo, tome um bom café da manhã , alongamento e comece sua primeira tarefa do dia.",
    "Comece o dia fazendo uam tarefa que você procrastinou ontem.",
    "Se a vida te der um limão, faça uma limonada.",
    "Você nao precisa do perdão de alguém, você precisa entender de onde vem a sua dor .",
  ];

  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  console.log(indiceAleatorio);
  
  return frases[indiceAleatorio];
}
