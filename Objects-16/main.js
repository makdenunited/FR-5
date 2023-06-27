
let notebook = {
    "Poly": 23131234124,
    "Jack": 3023032328,
    "Jon Snow": 93238249328,
    secondList: {
        Andrey: "First",
        Dmitryi: "Second",
        Alina: "Third"
    },
    showElement () {
        console.log(this.secondList)
    }
};
notebook.Poly = 1111111111111;
notebook["Jon Snow"] = 333333333333;
notebook["Jack"] = 222222222222;
notebook.Nordray = 4444444444;
notebook["Niki Praice"] = 5555555555;

console.log(notebook)
delete notebook["Niki Praice"]
console.log(notebook)

notebook.showElement()
delete notebook.secondList.Alina;
notebook.showElement()