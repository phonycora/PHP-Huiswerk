function calculate(getal1, getal2) {
    const som = getal1 + getal2;
    console.log(som);
}

function multiplyByFive(getal) {
    const som = getal * 5;
    console.log(som);
}

function calculateMinutes(seconden) {
    const minuten = seconden / 60;
    console.log(minuten);
}

document.getElementById("calculate-button").addEventListener("click", function () {
    const getal1 = Number(document.getElementById("getal1").value);
    const getal2 = Number(document.getElementById("getal2").value);
    calculate(getal1, getal2);
});

document.getElementById("multiply-button").addEventListener("click", function () {
    const getal = Number(document.getElementById("vermenigvuldig-getal").value);
    multiplyByFive(getal);
});

document.getElementById("minutes-button").addEventListener("click", function () {
    const seconden = Number(document.getElementById("seconden").value);
    calculateMinutes(seconden);
});