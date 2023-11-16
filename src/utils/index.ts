import { Text, View } from "react-native";

export function fraseAleatoria() {
  const frases = [
    "Você encontra-se diante de uma escolha. Ouça a sua intuição. É o início de uma nova fase. E como todas as experiências novas, existe o risco de falhar. Mas saiba que, se eventualmente cair, logo se levantará. Você só precisa viver o presente e confiar na sua capacidade.",
    "Chegou a hora de agir. Confie nos seus conhecimentos e habilidades. Acredite nas suas ideias. Você está numa fase ativa e não é hora de ficar parado. Não tenha medo de entregar seu coração. ",
    "Escute sua voz interior, a sua intuição está tentando lhe enviar uma mensagem. Confia no mistério, pois seu coração sabe o caminho a ser seguido.",
    "Chegou a horar de criar. Algo em sua vida precisa nascer ou renascer. Coloque algo novo em prática. Distribua sementes por aí, pois a colheita será generosa.",
    "Chegou a hora de realizar. Seja mais objetivo, coloque suas ideias em movimento. Às vezes, não se deseja que a mente domine o coração, mas em alguns casos é necessário e, inclusive, agradável. ",
    "Você tem muita proteção e bênção divinas nesse momento, mas precisa repensar alguns conceitos, valores e ideias. Você não precisa seguir todas as regras socialmente aceitas. Se abra a novas formas de pensar.",
    "Existe uma dúvida. Sua razão quer uma coisa e seu coração quer outra, mas você precisa escolher. Siga seu coração, confie no conselho da sua voz interior.",
    "Não permita que nada o distraia nem desvie dos seus objetivos. Atenda os seus desejos. Não vai ser fácil, mas você precisa seguir.  Acredite no seu poder e a vitória é garantida.",
    "Reflita sobre os últimos acontecimentos. Você está passando por um período de provas. Mas seja justo com você e com os outros. Não tente encontrar culpados. Aceite o que a vida lhe impõe. Chegou a hora de perceber quem são seus aliados. ",
    "Não tenha pressa. Siga com sabedoria. Devagar e sempre. Respeite o seu tempo.",
  ];

  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  console.log(indiceAleatorio);

  return frases[indiceAleatorio];
}
