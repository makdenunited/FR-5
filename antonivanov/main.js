const movieCatalog = {
  Возмездие: 1993,
  "Термоядерный пулемёт": "неизвестно",
  "Стальной воин": 5 > 2,
};

console.log(movieCatalog);
console.log(movieCatalog.Возмездие);
console.log(movieCatalog["Термоядерный пулемёт"]);

movieCatalog["Шум"] = "города";
movieCatalog["Стальной воин"] = 2022;
delete movieCatalog["Термоядерный пулемёт"];

console.log(movieCatalog);

const carCatalog = {
  list: {
    BMW: 5,
    "Mersedes Benz": "E",
    Audi: "Q7",
  },
  log() {
    console.log(this.list);
  },
};
carCatalog.log();
