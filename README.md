# Selfie

## Objectifs
 
 Créez une petite application qui permet d'update la photo d'un utilisateur.
 Utilisez l'API JS getUserMedia, soit en vanilla, soit via un plugin de votre choix.

## Steps

    - Install react, redux using create-react-app
    - Définir l'architecture de vos components react en séparant le component de prise de photo de celui du profil user.
    - Définir au moins 2 actions setPicture et getPicture
    - Construire le flow des actions avec un simple click.
    - Simuler l'asynchrone d'une requête HTTP avec un setTimeout.
    - Incorporer le userGetMedia.
    - Remplacer les setTimeout avec get et post sur une fake api type https://reqres.in/. Vous pouvez utiliser l'API fetch par exemple ou un client HTTP comme axios.

## Concepts

Si déjà vu React : idéalement les quatre premiers jusqu'au maximum.
Sinon : Au moins le tout premier.

- React components
- Redux Store/Action/Dispatcher flow
- Différences avec flux
- Connect react to redux
- Destructive data structures
- Immutability
- Middleware
- Asynchrone
- Les promises
- Les thunks
- Les generators
- getUserMedia