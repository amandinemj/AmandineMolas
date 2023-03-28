const reponse = await fetch('mes_fleurs_preferees.json');
const fleurs = await reponse.json();

for (let i =0; i < fleurs.length; i++){
    const maFleur = fleurs[i];
    //Récupération de l'élément DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    //création balise dédiée à une fleur
    const pieceElement = document.createElement("article");
    //création balises
    const imageElement = document.createElement("img");
    imageElement.src = maFleur.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = maFleur.nom;
    const saisonElement = document.createElement("p");
    saisonElement.innerText = `Saison : ${maFleur.saison}`;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix : ${maFleur.prix} €`;
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = maFleur.description ?? "(pas de description";
    const disponibilityElement = document.createElement("p");
    disponibilityElement.innerText = maFleur.disponibility ? "En stock" : "Rupture de stock";

    sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(saisonElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(disponibilityElement);
}