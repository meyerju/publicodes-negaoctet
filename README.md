<div align="center">
  <h3 align="center">
	<big>Publicodes x NegaOctet</big>
  </h3>
  <p align="center">
   <a href="https://github.com/incubateur-ademe/publicodes-negaoctet/issues">Report Bug</a>
   •
   <a href="https://incubateur-ademe.github.io/publicodes-negaoctet/">API docs</a>
   •
   <a href="https://github.com/incubateur-ademe/publicodes-negaoctet/blob/master/CONTRIBUTING.md">Contribute</a>
  </p>

![CI][ci-link] ![NPM][npm-link]

Un modèle [Publicodes](https://publi.codes) de la base de données
[NegaOctet](https://negaoctet.org/en/home/#Donnees).

Sa documentation est disponible [en
ligne](https://incubateur-ademe.github.io/publicodes-negaoctet/).

</div>

## Usage

Ajouter le paquet à vos dépendandes : 
```
bun add @incubateur-ademe/publicodes-negaoctet
```

Instancier une nouveau moteur Publicode :
```typescript
import Engine from 'publicodes'
import rules from '@incubateur-ademe/publicodes-negaoctet'

const engine = new Engine(rules)

engine.evaluate('tablette . consommation en mode actif')
```

Utiliser certaines règles dans un autre modèle publicodes :
```yaml
importer!:
  depuis:
    nom: @incubateur-ademe/publicodes-negaoctet 
    url: https://github.com/incubateur-ademe/publicodes-negaoctet
  dans: modèle numérique
  les règles:
    - numérique . internet . consommation horaire 
    - ordinateur portable . construction
```

### En local

#### Compiler le modèle

> Les règles publicodes du modèle sont disponible dans le workspace
> [`rules/`](https://github.com/incubateur-ademe/publicodes-negaoctet/tree/main/rules).

Pour installer les dépendences et compiler tous les fichiers `.publicodes` en
un seul fichier JSON, il suffit d'exécuter la commande suivante : 

```
bun i && bun run build
```

#### Lancer la documentation

> Le code de la documentation est disponible dans le workspace
> [`doc/`](https://github.com/incubateur-ademe/publicodes-negaoctet/tree/main/doc).

Pour lancer l'app React en local permettant de parcourir la documentation du
modèle, il suffit d'exécuter la commande suivante :

```
bun i --cwd doc

bun run doc
```

#### Lancer l'API

> Le code de l'API est disponible dans le workspace
> [`api/`](https://github.com/incubateur-ademe/publicodes-negaoctet/tree/main/api).

Pour lancer le serveur Node permettant d'utiliser l'API REST, il faut utiliser les commandes
suivantes : 

```
bun run api

# En watch-mode
bun run api:watch
```

## Publier une nouvelle version

Afin de publier une nouvelle version il suffit d'exécuter la commande `npm
version`.

[ci-link]: https://img.shields.io/github/actions/workflow/status/incubateur-ademe/publicodes-negaoctet/packaging.yaml?logo=github&logoColor=white&label=build%20%26%20test
[npm-link]: https://img.shields.io/npm/v/%40incubateur-ademe%2Fpublicodes-negaoctet?logo=npm&logoColor=white&color=salmon
