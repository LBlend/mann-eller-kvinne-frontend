# mann-eller-kvinne-frontend

[🇳🇴 Norwegian](README.md)

This is the frontend part of the _mann-eller-kvinne_ project. For more information about the project, see the [backend repo](https://github.com/LBlend/mann-eller-kvinne)

![Logo](https://raw.githubusercontent.com/LBlend/mann-eller-kvinne/main/.static/mann-eller-kvinne.png)

## Get started

<details>

<summary>Manual installation (developer mode)</summary>

0. Clone the repo and install dependencies

   - Node.js (LTS)

1. Install the project dependencies

```
npm install
```

2. Create a copy of the [.env.example](.env.example) file and name it `.env`. Then, replace the URL within it with one pointing at your own instance of the backend.

3. Run the web app

```
npm run dev
```

</details>

<details>

<summary>Docker (deployment)</summary>

### Option 1 - Use a prebuilt image

1. Run the webapp, with `VITE_API_URL` pointing at your backend instance

```
docker run -d -p 3000:3000 -e VITE_API_URL=https://your-backend.example.com/mann-eller-kvinne --name mann-eller-kvinne-frontend ghcr.io/lblend/mann-eller-kvinne-frontend:latest
```

You can also put the variable in a `.env` file (see [.env.example](.env.example)) and pass it with `--env-file .env` instead of `-e`. Without it, the webapp expects the backend at `http://localhost:5000/mann-eller-kvinne`.

_Note that the address is used by the visitors' browsers, so it has to be reachable from their machines. The backend also has to allow the webapp's address in its `ALLOWED_ORIGINS` setting._

### Option 2 - Build your own docker image

1. Clone the repo

2. Build the Docker image

```
docker build -t mann-eller-kvinne-frontend .
```

3. Create a container and run it, configured the same way as in option 1

```
docker run -d -p 3000:3000 --env-file .env --name mann-eller-kvinne-frontend mann-eller-kvinne-frontend
```

The container listens on port 3000. To use another port on the host, change the first number, e.g. `-p 8080:3000`.

</details>

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) before getting started.
