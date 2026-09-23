# 0001 — Consigner les décisions d'architecture

**Statut** : Acceptée

## Contexte

Les projets font des choix structurants tôt (persistance, stack, scope) qui seront coûteux à
reconstituer de mémoire une fois le code en place, surtout si une décision est reconsidérée plus
tard.

## Décision

On tient des Architecture Decision Records dans `docs/adr/`, un fichier par décision, numérotés
séquentiellement, au format Statut / Contexte / Décision / Conséquences. Une décision reconsidérée
donne lieu à un **nouvel** ADR qui référence l'ancien, plutôt qu'une édition rétroactive de l'ADR
existant.

## Conséquences

Historique traçable des choix et de leur raisonnement, utile à la fois pour soi-même plus tard et
pour un tiers qui explore le repo.
