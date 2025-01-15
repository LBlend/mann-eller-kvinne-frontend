# mann-eller-kvinne-frontend

[🇬🇧 English](README-en.md)

Dette er frontenden for prosjektet _mann-eller-kvinne_. For mer info om prosjektet, se [backendrepoet](https://github.com/LBlend/mann-eller-kvinne)

![Logo](https://raw.githubusercontent.com/LBlend/mann-eller-kvinne/main/.static/mann-eller-kvinne.png)

## Kom i gang

<details>

<summary>Manuell installasjon (developer mode)</summary>

0. Klon repoet og last ned avhengighetene:

   - node.js

1. Installer prosjektavhengighetene

```
npm install
```

2. Lag en kopi av filen [env.example](env.example) og gi den navnet `.env`. Bytt så ut URLen med en som peker mot din egen backend

3. Kjør webappen

```
npm run dev
```

</details>

<details>

<summary>Docker (deployment)</summary>

### Valgmulighet 1 - Bruke forhåndsbygget versjon

1. Skriv denne kommandoen for å kjøre webappen.

```
docker run -d -p 3000:3000 --name mann-eller-kvinne-frontend ghcr.io/lblend/mann-eller-kvinne-frontend:latest
```

Her kan du så klart endre på variabler som du ønsker

_Merk at ved bruk av denne valgmuligheten så kan du ikke endre på hvilken adresse som peker til backenden. Du er dermed bindet til å sette opp denne på `http://localhost:5000`. Dette er fordi byggesystemet "vite" ikke gjør det mulig å sette environment variables under run time, bare build time. Er det helt på trynet? ja, men dette er dessverre utenfor vår kontroll._

### Valgmulighet 2 - Bygge et dockerbilde på egenhånd

1. Klon repoet

2. Gå inn i [Dockerfila](Dockerfile) og endre på `VITE_API_URL` til å peke mot din backend.

3. Bygg dockerbildet

```
docker build -t mann-eller-kvinne-frontend .
```

4. Lag og kjør en dockercontainer

```
docker run -d -p 3000:3000 --name mann-eller-kvinne-frontend mann-eller-kvinne-frontend
```

Merk deg her at om du har valgt å endre port i dockerfila, så bør det reflekteres her.

</details>

## Bidra

Les [bidragsguiden](CONTRIBUTING.md) før du gjør noe.
