"use strict"

let carBase = []

const letterPattern = /^[a-zA-Z]*$/;
const yearPattern = /([0-9])/;

const carName = document.forms["carForm"]["nameInput"];
const carModel = document.forms["carForm"]["modelInput"];
const carYear = document.forms["carForm"]["yearInput"];

let ulCar = document.querySelector("#car-list");


let Car = function (id, name, model, year) {
    this.id = id,
        this.name = name;
    this.model = model;
    this.year = year;
}


let idCounter = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();


function validateForm() {
    if (!carName.value.match(letterPattern)) {
        alert("Manufacturer Input not validate. (Don't use numbers)");
        return false;
    }
    if (carName.value == "") {
        alert("Error! Please, enter the Manufacturer");
        return false;
    }
    if (carModel.value == "") {
        alert("Error! Please, enter the Model");
        return false;
    }
    if (carYear.value == "") {
        alert("Error! Please, enter Release year");
        return false;
    }
    if (!carYear.value.match(yearPattern)) {
        alert("Please, enter release year (Don't use letters)");
        return false;
    }


    let createdCar = new Car(idCounter(), carName.value, carModel.value, carYear.value)

    carBase.push(createdCar);
    displayList();
    resetInputs();


    return false;
}


function displayList() {
    let lists = '';
    for (let i = 0; i < carBase.length; i++) {
        lists += `<li class="list-group-item">${carBase[i].id}. ${carBase[i].name} ${carBase[i].model} - ${carBase[i].year} - <i class="fas fa-trash-alt icon"></i></li>`;
    }
    ulCar.innerHTML = lists;
}


function resetInputs() {
    carName.value = "";
    carModel.value = "";
    carYear.value = "";
}

function sortById() {
    carBase.sort(function (a, b) { return a.id - b.id });
    displayList();
}

function sortByName() {
    carBase.sort(function (a, b) {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
            return -1;
        } else if (x > y) {
            return 1;
        } else {
            return 0;
        }
    });
    displayList();
}
function sortByModel() {
    carBase.sort(function (a, b) {
        let x = a.model.toLowerCase();
        let y = b.model.toLowerCase();
        if (x < y) {
            return -1;
        } else if (x > y) {
            return 1;
        } else {
            return 0;
        }
    });
    displayList();
}