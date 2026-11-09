SITE WEB MODIFIABLE — JOURNÉE SCIENTIFIQUE LISA / ENSAF
==========================================================

STRUCTURE DU PROJET
-------------------
index.html                  Structure et textes des sections
css/style.css               Couleurs, design, mise en page, responsive
js/script.js                Interactions et liste des membres des comités
images/logo-ensaf.png       Logo officiel ENSAF fourni
images/fond-conference-industrie.png
                            Image de fond de la bannière principale

OUVRIR LE SITE
--------------
Double-cliquer sur index.html. Le site s'ouvre dans le navigateur.
Pour modifier le site, utiliser Visual Studio Code (https://code.visualstudio.com/)
et ouvrir le dossier complet `site_modifiable`.

COMMENT MODIFIER
----------------
1) Textes, titres, paragraphes, dates, coordonnées et axes :
   ouvrir index.html et rechercher le texte à changer.

2) Couleurs, polices, tailles, espacements et affichage mobile :
   ouvrir css/style.css.
   Les couleurs principales sont définies dans :root au début du fichier.

3) Membres des comités :
   ouvrir js/script.js et modifier le tableau `members`.
   Format : ["NOM", "Prénom"].
   Les comités d'organisation et scientifique partagent la même liste
   dans la version actuelle, conformément au PDF reçu.

4) Image de fond :
   remplacer images/fond-conference-industrie.png en gardant le même nom,
   ou modifier la référence dans css/style.css.

5) Logo :
   remplacer images/logo-ensaf.png en gardant le même nom,
   ou modifier le chemin dans index.html.

PUBLIER / METTRE À JOUR SUR NETLIFY
-----------------------------------
Après chaque modification :
1. Enregistrer les fichiers (Ctrl + S).
2. Vérifier index.html dans le navigateur.
3. Redéposer le dossier complet du site sur Netlify pour publier la nouvelle version.
   Garder la même structure de dossiers et inclure le dossier images.

IMPORTANT — INFORMATIONS À VALIDER AVANT PUBLICATION
----------------------------------------------------
- L'appel à posters mentionne le 15 novembre 2026 dans les modalités de soumission,
  mais le 20 novembre 2026 dans les dates clés : confirmer la date officielle.
- Ajouter l'adresse e-mail officielle et/ou le formulaire de soumission.
- Ajouter le lien du template de poster.
- Vérifier les informations pratiques et les noms des membres des comités.

Le site est statique : aucune base de données ni installation de serveur n'est requise.
