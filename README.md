# CertChain

CertChain is a decentralized application (Dapp) built on the Ethereum Virtual Machine (EVM) to create and assign certificates to students as NFTs (Non-Fungible Tokens). This approach helps solve the issue of certificate fraud. Project was developed during XINNOVATE 2024 Hackthon.

![image](./cetichain.webp)

## Team Members

- [Arjun C](https://github.com/4rjunc)
- [Hari Prasad G](https://github.com/HARI-G-YADHAV)
- [Anjana A](https://github.com/Anjana2002)
- [Aishwarya K P](https://github.com/aishwaryaaishus001)

## Tech Stack

| ![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)         | ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)    | ![Solidity](https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black) |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white) | ![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-4E5EE4?logo=OpenZeppelin&logoColor=fff&style=for-the-badge) | ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)                |
| ![](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)             | ![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)                   | ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)            |

## Run Locally

- Clone the repository

```bash
   git clone https://github.com/4rjunc/CertChain.git
```

- Change the directory

```bash
    cd CertChain
```

- Create .env

```env
AMOY = <add testnet link>
PRIVATE_KEY = <add wallet private key>
JWT = <token of pinnata>

```

- Install modules

```bash
    npm install
```

- Start the server

```bash
    npm run dev
```

## Docker

- Building image

```bash
docker bulit -t cert-chain .
```

- Run the container

```bash
docker run -p 3000:3000 cert-chain
```

This will create a Docker container running at
[http://localhost:3000/](http://localhost:3000/)
