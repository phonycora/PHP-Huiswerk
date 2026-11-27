function kleur_aanpassen() {
    const heading = document.getElementById("pagina-titel");
    if (heading.textContent === "Oorspronkelijke tekst") {
        heading.style.color = "blue";
        heading.textContent = "Inhoud aangepast!";
    } else {
        heading.style.color = "";
        heading.textContent = "Oorspronkelijke tekst";
    }
}

