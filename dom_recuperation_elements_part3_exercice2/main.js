// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, sert toi des class du fichier style.css et rien d'autre !
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ## Partie 1 Ajout de contenu
// ### 1. Dans le h1 ajoute le texet suivant : Les attributs class et id
document.querySelector('h1').innerHTML = 'Les attributs class et id';
// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A
document.querySelector('h2').innerHTML = 'Exercice 2 partie A';
// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B
document.querySelectorAll('h2')[1].innerHTML = 'Exercice 2 partie B';
// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 
document.querySelector('p').innerHTML = "attention a conserver les balises <b>par coeur</b> ";
// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide
document.querySelectorAll('p')[1].innerHTML = "attention a conserver les balises <i>Solution</i> ";



// ## Partie 2.1 Ajout d'attribut et de leurs valeurs
// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
document.querySelector('h1').setAttribute('id', 'bigTitle')
// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"
document.querySelector('div').setAttribute('class', 'container')
// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"
let h2s = document.querySelectorAll('h2');
h2s.forEach( e => {
    e.setAttribute("class", "title")
})
// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"
let allP = document.querySelectorAll("p");
allP.forEach(e => {
    e.setAttribute('class', "text")
})

// ## Partie 2.2 Ajout d'attribut et de leurs valeurs
// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding
document.querySelector('section').classList.add("margin-bottom", "border-black" ,"padding")
// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding
document.querySelectorAll('section')[1].classList.add("margin-top", "border-black" ,"padding")

// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px
document.querySelector('div').parentElement.style.backgroundColor = 'rgb(0,0,255'
document.querySelector('div').parentElement.style.border = '1px solid black';
document.querySelector('div').parentElement.style.width = '20px';
document.querySelector('div').parentElement.style.height = '20px'