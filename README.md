#  Projet Pour M1IF13-Web Avancé
-----------------------------------------------------------------------------------
# My City Mapper

Les identifiants du binôme:

  - 11419771 - NGUYEN Xuan Huy
  - 11419778 - HUYNH Cong Lap

### Tech

L'application utilise les technologies suivants:

* [vuejs](https://vuejs.org/)
* [vue-router](https://router.vuejs.org/en/)
* [vuex](https://vuex.vuejs.org/en/)
* [vuetify](https://vuetifyjs.com/en/)

Les moteurs de l'application sont:
* node: version >= 6.0.0
* npm: version >= 3.0.0

### Dépendances Globales

* "vue": "2.5.2"
* "vue-router": "3.0.1"
* "vuetify": "1.0.10"
* "vuex": "3.0.1"

### Clonage

Clonez le projet (le plus récent)

```sh
$ git clone -b rendu-tp8 git@forge.univ-lyon1.fr:p1419771/myCityMapper2.git
```

### Installation

Installez les dépendances et devDependencies

```sh
$ cd myCityMapper
$ npm install
```

### Utilisation

* Pour le version de développement

```sh
$ npm run dev
```

Lien: http://localhost:8080

* Pour le version de production

On va utiliser Surge pour déployer l'application
Si vous n'avez pas [Surge](https://surge.sh)

```sh
$ npm install --global surge 
```

"build" et déployer

```sh
$ npm run build
$ cd dist
$ surge --domain https://votre-domain.surge.sh
```

Lien: https://votre-domain.surge.sh


