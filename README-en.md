# mann-eller-kvinne-frontend

[🇳🇴 Norwgian](README.md)

This is the frontend part of the *mann-eller-kvinne* project. For more information about the project, see the [backend repo](https://github.com/LBlend/mann-eller-kvinne)

![Logo](https://raw.githubusercontent.com/LBlend/mann-eller-kvinne/main/.static/mann-eller-kvinne.png)

## Get started

<details>

<summary>Manual installation</summary>

0. Clone the repo and install dependencies
    - node.js
    - yarn

1. Install the project dependencies

```
yarn install
```

2. Create a copy of the [.env.example](.env.example) file and name it `.env`. Then, replace the URL within it with one pointing at your own instance of the backend.

3. Run the web app

```
yarn dev
```

</details>

<details>

<summary>Docker</summary>

1. Fetch the docker image

```
docker pull ghcr.io/lblend/mann-eller-kvinne-forntend:main-<version-number>
```

Remember to change the `<version-number>` to your desired version

2. Create and run a container

```
docker run -p 3000:3000 <imageId>
```

</details>

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) before getting started.
