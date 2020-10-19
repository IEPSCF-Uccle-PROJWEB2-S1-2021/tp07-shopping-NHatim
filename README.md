# TP07 - shopping

Cet exercice provient de *MDN - Manipulating documents*, consulté le 19/10/2020. https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents.

## Consignes

Votre objectif est de réaliser une liste de courses qui vous permet d'ajouter des éléments de manière dynamique à la liste en utilisant un champ texte et un bouton.
Quand vous ajouter un élément dans le champ texte et que vous appuyez sur le bouton :

* L'élément apparait dans la liste;
* Chaque élément possède un bouton sur lequel appuyer pour effacer cet élément de la liste;
* Le champ texte doit être vidé et recevoir le focus pour que vous puissiez directement entrer un nouvel élément.

Le résultat doit ressembler à l'image qui suit :

![Résultat attendu](shopping-list.png)

Je vous conseille d'essayer de résoudre l'exercice sans lire les étapes de résolution ci-dessous.
Mais si vous éprouvez des difficultés, lisez-la suite.

## Étapes de résolution

1. Prenez connaissances des fichiers [HTML](index.html), [CSS](style.css) et [JavaScript](script.js).
   Vous verrez qu'ils contiennent quelques classes CSS, un `<div>` avec un champ texte et un bouton et une liste vide.
   Vous réaliserez l'exercice dans le fichier `script.js`.
2. Créez 3 variables pour contenir les références vers les éléments liste (`<ul>`), `input` et `button`.
3. Créez une fonction qui écoutera l'évènement `click` sur le bouton.
4. Dans cette fonction, stocker la [valeur courante](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#Properties)) du champ texte dans une variable.
5. Ensuite, videz le champ texte en y mettant la valeur `""`.
6. Créez 3 nouveaux élément : un élément de liste (`<li>`), un `<span>` et un `<button>`.
   Stockez les dans des variables.
7. Ajouter le `<span>` et le `<button>` à l'élément `<li>` en tant qu'enfants.
8. Copiez le contenu du champs texte que vous avez conservé précédemment à l'intérieur du `<span>`.
   Ajoutez le texte `Delete` au `<button>`.
9. Ajoutez l'élément `<li>` à la liste en tant qu'enfant.
10. Enregistrez un écouteur au bouton `Delete`, de telle manière que quand il reçoit un click, il supprime l'élément de liste entier à l'intérieur duquel il se trouve.
11. Enfin, utiliez la méthode `focus()` pour donner le focus au champ texte afin qu'il soit prêt à recevoir le prochain élément de votre liste de courses.
