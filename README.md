# mann-eller-kvinne-frontend

[🇬🇧 English](README-en.md)

Dette er frontenden for prosjektet _mann-eller-kvinne_. For mer info om prosjektet, se [backendrepoet](https://github.com/LBlend/mann-eller-kvinne)

![Logo](https://raw.githubusercontent.com/LBlend/mann-eller-kvinne/main/.static/mann-eller-kvinne.png)

## Kom i gang

<details>

<summary>Manuell installasjon (developer mode)</summary>

0. Klon repoet og last ned avhengighetene:

   - Node.js (LTS)

1. Installer prosjektavhengighetene

```
npm install
```

2. Lag en kopi av filen [.env.example](.env.example) og gi den navnet `.env`. Bytt så ut URLen med en som peker mot din egen backend

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

_Merk at adressen til backenden er bygget inn i bildet, fordi Vite bare leser environment variables når appen bygges. Med mindre noe annet er oppgitt, forventer det forhåndsbygde bildet at backenden kjører på `http://localhost:5000`. Vil du bruke en annen backend, må du bygge bildet selv (valgmulighet 2)._

### Valgmulighet 2 - Bygge et dockerbilde på egenhånd

1. Klon repoet

2. Bygg dockerbildet, med `VITE_API_URL` satt til adressen til din backend

```
docker build --build-arg VITE_API_URL=https://din-backend.example.com/mann-eller-kvinne -t mann-eller-kvinne-frontend .
```

3. Lag og kjør en dockercontainer

```
docker run -d -p 3000:3000 --name mann-eller-kvinne-frontend mann-eller-kvinne-frontend
```

Containeren lytter på port 3000. Vil du bruke en annen port på maskinen din, endrer du det første tallet, f.eks. `-p 8080:3000`.

</details>

## Bidra

Les [bidragsguiden](CONTRIBUTING.md) før du gjør noe.
