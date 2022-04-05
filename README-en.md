# mann-eller-kvinne-frontend

[🇳🇴 Norwgian](README.md)

This is the frontend part of the _mann-eller-kvinne_ project. For more information about the project, see the [backend repo](https://github.com/LBlend/mann-eller-kvinne)

![Logo](https://raw.githubusercontent.com/LBlend/mann-eller-kvinne/main/.static/mann-eller-kvinne.png)

## Get started

<details>

<summary>Manual installation (developer mode)</summary>

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

<summary>Docker (deployment)</summary>

### Option 1 - Use a prebuilt image

1. Run the webapp

```
docker run -d -p 3000:3000 --name mann-eller-kvinne-frontend ghcr.io/lblend/mann-eller-kvinne-frontend:latest
```

You are free to change the variables as you desire.

_Note that by choosing this option you can't set the address for the backend yourself. You are forced to host your backend on `http://localhost:5000`. This is due to the javascript bundler "vite" not allowing you to set environment variables at run time, only at build time. Is this stupid? Yes, however it is out of our control and we'll just have to deal with it._

### Option 2 - Build your own docker image

1. Clone the repo

2. Make sure to go into the [Dockerfile](Dockerfile) and point the `VITE_API_URL` to your backend instance.

3. Build the Docker image

```
docker build -t mann-eller-kvinne-frontend .
```

4. Create a container and run it

```
docker run -d -p 3000:3000 --name mann-eller-kvinne-frontend mann-eller-kvinne-frontend
```

Note that if you've changed the running port in the dockerfile, you need to change the portnumber in the command as well.

</details>

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) before getting started.
