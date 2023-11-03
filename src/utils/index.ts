import { Text, View } from "react-native";

export function fraseAleatoria() {
  const frases = [
    "Você encontra-se diante de uma escolha. Ouça a sua intuição. É o início de uma nova fase. E como todas as experiências novas, existe o risco de falhar. Mas saiba que, se eventualmente cair, logo se levantará. Você só precisa viver o presente e confiar na sua capacidade. ",
    "Quando se sentir perdido na confusão interior, respire fundo e observe-a como um observador silencioso. Na observação tranquila você encontrará clareza.",
    "Respire fundo, hoje é dia de ser proativo, tome um bom café da manhã , alongamento e comece sua primeira tarefa do dia.",
    "Comece o dia fazendo uma tarefa que você procrastinou ontem.",
    "Chegou a hora de agir. Confie nos seus conhecimentos e habilidades. Acredite nas suas ideias. Você está numa fase ativa e não é hora de ficar parado. Não tenha medo de entregar seu coração. ",
    "Você nao precisa do perdão de alguém, você precisa entender de onde vem a sua dor .",
  ];

  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  console.log(indiceAleatorio);
  
  return frases[indiceAleatorio];
}
