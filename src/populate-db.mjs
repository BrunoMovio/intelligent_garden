import dayjs from "dayjs";

const userParams = {
  "name": "Artur",
  "plants": ["Tomate", "Manjericão"],
};

const plantsParams = [
  {
    "plant": "Tomate",
    "min_temp": 21,
    "max_temp": 30,
    "min_humid": 65,
    "max_humid": 90,
    "desc":
      "O tomate-cereja adora ambientes ensolarados. Eles precisam de um clima livre de geadas e pelo menos seis horas de sol por dia. Deixá-los em um local, abrigado e bem ventilado reduz o risco de fungo nas folhas.",
  },
  {
    "plant": "Manjericão",
    "min_temp": 10,
    "max_temp": 32,
    "min_humid": 60,
    "max_humid": 90,
    "desc":
      "O local para plantio deve receber pelo menos quatro horas diárias de sol, pois o manjericão se dá muito bem com esta luz natural. Regas não são necessárias diariamente, pois o excesso de água pode encerrar a vida de nosso querido manjericão. Sendo assim, devem ser efetuadas a cada dois ou três dias, ou então, quando a terra da parte superior estiver seca.",
  },
  {
    "plant": "Tomilho",
    "min_temp": 20,
    "max_temp": 30,
    "min_humid": 40,
    "max_humid": 60,
    "desc":
      "Mantenha o vaso em local ensolarado e fresco. Regue a planta sempre que notar a terra seca, com mais frequência nas primeiras semanas após o plantio, mas tomando cuidado para evitar o encharcamento, já que o tomilho prefere solo seco.",
  },
  {
    "plant": "Coentro",
    "min_temp": 10,
    "max_temp": 30,
    "min_humid": 50,
    "max_humid": 90,
    "desc":
      "Você sempre deverá checar o solo antes de regar o coentro. O ideal é que a terra nunca fique úmida ou encharcada demais. Ofereça água sempre que perceber a terra seca. Quando as plantas estiverem bem desenvolvidas, diminua a frequência de rega.",
  },
  {
    "plant": "Hortelã",
    "min_temp": 13,
    "max_temp": 30,
    "min_humid": 90,
    "max_humid": 100,
    "desc":
      "Após o plantio, molhe à terra para que a umidade chegue às raízes da hortelã. À terra deve sempre permanecer úmida, mas não encharcada. Se o clima estiver quente, você pode regar a planta várias vezes por dia. Deixe o vaso voltado para o leste, pois a hortelã se desenvolve melhor com seis ou mais horas de luz solar.",
  },
  {
    "plant": "Alface",
    "min_temp": 15,
    "max_temp": 26,
    "min_humid": 50,
    "max_humid": 70,
    "desc":
      "Coloque sua alface em um local arejado: a circulação de ar favorece o crescimento e plantio das alfaces. Então lugares que pegam bastante vento são ideais para que essa hortaliça cresça com qualidade. Regue em dias alternados: é imprescindível que a terra esteja bem úmida, mas nunca encharcada.",
  },
  {
    "plant": "Alecrim",
    "min_temp": 20,
    "max_temp": 30,
    "min_humid": 45,
    "max_humid": 60,
    "desc":
      "O alecrim se adapta a qualquer tipo de solo, mas prefere os secos, arenosos e bem drenados. Quanto a localização, é muito importante lembrar que para o cultivo ocorrer de forma correta, o local em que ele será plantado deve receber luz solar de uma forma que o atinja diretamente, por, pelo menos, 5 horas diárias.",
  },
  {
    "plant": "Salsa",
    "min_temp": 10,
    "max_temp": 24,
    "min_humid": 70,
    "max_humid": 95,
    "desc":
      "Gosta de solos com textura areno-argilosa, rico em matéria orgânica, bem drenados e ligeiramente ácidos, com pH 5,5-6,7. A salsa precisa de quatro horas de sol por dia, pelo menos, e você deve deixar a terra sempre úmida, fazendo regas diárias. Para colher, é só cortar o galho inteiro, deixando um dedo do solo.",
  },
];

// 5 minutes in sec
const deltaSteps = 5 * 60 ;

const now = dayjs();
const startTime = now.subtract(10, "hour").unix();
const lastTime = now.subtract(4, "minute").unix();

function getRandomFloat(min, max) {
  const str = (Math.random() * (max - min) + min).toFixed(2);

  return parseFloat(str);
}

const plantsData = plantsParams.map((plantParam, index) => {
  const plantDetail = {
    "id": `plant${index+1}`,
    "name": `plant${index+1}`,
    "history": [],
  };
  let currentStepTime = startTime;

  while (currentStepTime <= lastTime) {
    const newTemp = getRandomFloat(plantParam?.min_temp, plantParam?.max_temp);
    const newHumid = getRandomFloat(
      plantParam?.min_humid,
      plantParam?.max_humid
    );

    plantDetail.history.push({
      "time": currentStepTime,
      "temp": newTemp,
      "humid": newHumid,
    });

    currentStepTime += deltaSteps;
  }

  return plantDetail;
});

const result = {
  user: userParams,
  data: plantsData.filter((data) => userParams.plants.includes(data.id) ),
  params: plantsParams,
}

console.log(JSON.stringify(result));
