console.log("Debut du programme minibac")

let cnous = document.getElementById("tableSaisie");

let btnNettoyer = document.getElementById("BoutonNettoyer");
btnNettoyer.addEventListener("click", clean);

let btnAjouter = document.getElementById("BoutonAjouter");
btnAjouter.addEventListener("click", ajouter);

let btnGenerer = document.getElementById("BoutonGenerer");
btnGenerer.addEventListener("click", generer);

let btnClean = document.getElementById("BoutonNettoyer_table");
btnClean.addEventListener("click", nettoyerTableau);



function ajouter() {

    let tr = document.createElement("tr");
    tr.classList.add("mes_lignes");
    console.log(tr);
    ajouterCelule("zone_lettre", tr);
    ajouterCelule("zone_prenom", tr);
    ajouterCelule("zone_marques", tr);
    ajouterCelule("zone_objet", tr);
    ajouterCelule("zone_animaux", tr);
    ajouterCelule("zone_metier", tr);
    ajouterCelule("zone_pays", tr);
    ajouterCelule("zone_fruit_legume", tr);
    cnous.appendChild(tr);

    // let lettre = document.getElementById("zone_lettre").value;
    // // let nom = document.getElementById("nom");
    // console.log(lettre);

    // let td = document.createElement("td");
    // td.innerText = lettre;

    // let tr = document.createElement("tr");
    // tr.appendChild(td);



    // table.appendChild(tr);
    // console.log(table);
}


function ajouterCelule(mots, tr) {
    let cmoi = document.createElement("td");
    let saisie = document.getElementById(mots).value;
    cmoi.innerText = saisie;
    tr.appendChild(cmoi);

}

function clean() {

    nettoyerCellule("zone_lettre");
    nettoyerCellule("zone_prenom");
    nettoyerCellule("zone_marques");
    nettoyerCellule("zone_objet");
    nettoyerCellule("zone_animaux");
    nettoyerCellule("zone_metier");
    nettoyerCellule("zone_pays");
    nettoyerCellule("zone_fruit_legume");


}

function nettoyerCellule(mots) {

    let celule = document.getElementById(mots).value = " ";
    console.log(celule);
    // celule.innerText =" ";
    console.log(celule);
}


function generer() {
    let min = 1;
    let max = 26;
    let num_lettre = Math.round(Math.random() * (max - min) + min)
    let lettre = String.fromCharCode(65 + num_lettre)
    // console.log(65 + num_lettre)
    console.log(lettre)


    let lettre_jeu = document.getElementById("Lettre_de_jeu");

    console.log(lettre_jeu);
    lettre_jeu.innerText = lettre;
}

function nettoyerTableau() {
    taille_table = document.getElementsByClassName("mes_lignes").length;
    console.log(taille_table);
    for (let i = 0; i < taille_table; i = i + 1) {

        let maligne = document.getElementsByClassName("mes_lignes")[i];
        //console.log(maligne);
        maligne.innerHTML = "";

    }

}
console.log("fin du miniBac EDB");

//JE SAIS PAS SI QUELQU'UN A MODIFIER SANS FAIRE EXPRES MAIS RE MODIFIER PAS SVP J'AI GALERER merci bien.

// let table = document.getElementById("tableSaisie");


// let nom = document.getElementById("zone_nom");
// let td= document.createElement("td");
// td.innerText = nom;
// let tr = document.createElement("tr");
// tr.appendChild(td);



// let prenom = document.getElementById("zone_prenom");
// let objet = document.getElementById("zone_objet");
// let animaux = document.getElementById("zone_animaux");
// let metier = document.getElementById("zone_metier");
// let pays = document.getElementById("zone_pays");
// let fruits = document.getElementById("zone_fruit");










