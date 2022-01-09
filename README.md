# mann-eller-kvinne-frontend

[🇬🇧 English](README-en.md)

Dette er frontenden for prosjektet *mann-eller-kvinne*. For mer info om prosjektet, se [backendrepoet](https://github.com/LBlend/mann-eller-kvinne)

![Logo](https://raw.githubusercontent.com/LBlend/mann-eller-kvinne/main/.static/mann-eller-kvinne.png)

## Kom i gang

<details>

<summary>Manuell installasjon</summary>

0. Klon repoet og last ned avhengighetene:
    - node.js
    - yarn

1. Installer prosjektavhengighetene

```
yarn install
```

2. Lag en kopi av filen [env.example](env.example) og gi den navnet `.env`. Bytt så ut URLen med den som peker mot din egen backend


3. Kjør webappen

```
yarn dev
```

</details>

<details>

<summary>Docker</summary>

1. Hent dockerbildet

```
docker pull ghcr.io/lblend/mann-eller-kvinne-forntend:main-<versionnummer>
```

Husk å endre `<versionnummer` til ønsket versjon.

2. Lag og kjør en dockercontainer

```
docker run -p 3000:3000 <imageId>
```

</details>

## Bidra

Les [bidragsguiden](CONTRIBUTING.md) før du gjør noe.
