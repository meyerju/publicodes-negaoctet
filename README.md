# Modèle _Usage numérique_

Un modèle [Publicodes](https://publi.codes) pour calculer l'impact des usages
numérique en équivalent CO2.

Sa documentation est disponible [en
ligne](https://incubateur-ademe.github.io/modele-numerique/).

## Usage

### Compiler le modèle

> Les règles publicodes du modèle sont disponible dans le workspace
> [`rules/](https://github.com/incubateur-ademe/modele-numerique/tree/main/rules).

Pour installer les dépendences et compiler tous les fichiers `.publicodes` en
un seul fichier JSON, il suffit d'exécuter la commande suivante : 

```
yarn && yarn run build
```

### Lancer la documentation

> Le code de la documentation est disponible dans le workspace
> [`doc/](https://github.com/incubateur-ademe/modele-numerique/tree/main/doc).

Pour lancer l'app React en local permettant de parcourir la documentation du
modèle, il suffit d'exécuter la commande suivante :

```
yarn install --cwd doc

yarn run doc
```

### Lancer l'API

> Le code de l'API est disponible dans le workspace
> [`api/](https://github.com/incubateur-ademe/modele-numerique/tree/main/api).

Pour lancer le serveur Node permettant d'utiliser l'API REST, il faut utiliser les commandes
suivantes : 

```
yarn run api

# En watch-mode
yarn run api:watch
```

## Publier une nouvelle version

Afin de publier une nouvelle version il suffit de mettre à jours la `version`
du fichier
[`package.json`](https://github.com/incubateur-ademe/modele-numerique/blob/main/package.json)
et
[`rules/package.json`](https://github.com/incubateur-ademe/modele-numerique/blob/main/rules/package.json)
