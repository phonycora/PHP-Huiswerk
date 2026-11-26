function kleur_aanpassen() {
    const heading = document.getElementById("pagina-titel");
    heading.style.color = "blue";
    heading.textContent = "Inhoud aangepast!";
}

document.getElementById("aanpassen").addEventListener("click", () => {
    kleur_aanpassen();
});
