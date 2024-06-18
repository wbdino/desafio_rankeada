function calculoRankeada(vitoria, derrota) {
  let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendario", "Imortal"];

  vitoria = 70;
  derrota = 6;

  let saldoVitorias = vitoria - derrota;
  let resultado = saldoVitorias;
  
  switch (true) {
    case (vitoria <= 10):
      resultado = nivel[0];
      break;
    case (vitoria >= 11 && vitoria <= 20):
      resultado = nivel[1];
      break;
    case (vitoria >= 21 && vitoria <= 50):
      resultado = nivel[2];
      break;
    case (vitoria >= 51 && vitoria <= 80):
      resultado = nivel[3];
      break;
    case (vitoria >= 81 && vitoria <= 90):
      resultado = nivel[4];
      break;
    case (vitoria >= 91 && vitoria <= 100):
      resultado = nivel[5];
      break;
    case (vitoria >= 101):
      resultado = nivel[6];
      break;
  }

  console.log("O Heroi tem saldo de " + saldoVitorias + " esta no nivel " + resultado);
}

return calculoRankeada();

