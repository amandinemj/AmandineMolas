const reponse = await fetch('mes_fleurs_preferees.json');
const fleurs = await reponse.json();

function genererFleurs(fleurs){
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
}

genererFleurs(fleurs);

const boutonTrierParPrixCroissant = document.querySelector(".boutonTrierParPrixCroissant");
boutonTrierParPrixCroissant.addEventListener("click", function(){
    const fleursTrieesParPrixCroissant = Array.from(fleurs);
    fleursTrieesParPrixCroissant.sort(function(a,b){
        return a.prix - b.prix;
    });
document.querySelector(".fiches").innerHTML = "";
genererFleurs(fleursTrieesParPrixCroissant)
});

const boutonTrierParPrixDecroissant = document.querySelector(".boutonTrierParPrixDecroissant");
boutonTrierParPrixDecroissant.addEventListener("click", function(){
    const fleursTrieesParPrixDecroissant = Array.from(fleurs);
    fleursTrieesParPrixDecroissant.sort(function(a,b){
        return b.prix - a.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererFleurs(fleursTrieesParPrixDecroissant);
});

const filtreHiver = document.querySelector(".filtreHiver");
filtreHiver.addEventListener("click", function(){
    const fleursHiver = fleurs.filter(function(fleur){
        return fleur.saison === "Hiver";
    });
    document.querySelector(".fiches").innerHTML = "";
    if (fleursHiver.length === 0) {
        console.log("Pas de fleur de cette saison !")
    }
    else{
        genererFleurs(fleursHiver);
    }
    
    
});

const filtrePrintemps = document.querySelector(".filtrePrintemps");
filtrePrintemps.addEventListener("click", function(){
    const fleursPrintemps = fleurs.filter(function(fleur){
        return fleur.saison === "Printemps";
    });
    if (fleursPrintemps.length === 0) {
        console.log("Pas de fleur de cette saison !")
    }
    else{
        console.log(fleursPrintemps);
    }
    document.querySelector(".fiches").innerHTML = "";
    genererFleurs(fleursPrintemps);
});

const filtreEte = document.querySelector(".filtreEte");
filtreEte.addEventListener("click", function(){
    const fleursEte = fleurs.filter(function(fleur){
        return fleur.saison === "Ete";
    });
    document.querySelector(".fiches").innerHTML = "";
    if (fleursEte.length === 0) {
        console.log("Pas de fleur de cette saison !")
    }
    else{
        genererFleurs(fleursEte);
    }
});

const filtreAutomne = document.querySelector(".filtreAutomne");
filtreAutomne.addEventListener("click", function(){
    const fleursAutomne = fleurs.filter(function(fleur){
        return fleur.saison === "Automne";
    });
    document.querySelector(".fiches").innerHTML = "";
    if (fleursAutomne.length === 0) {
        console.log("Pas de fleur de cette saison !")
    }
    else{
        genererFleurs(fleursAutomne);
    }
    
});

