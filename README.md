# Goat Store API

A Node / Mongo API layer for a store selling products ["By Goats, for Goats - and the people who love them!"](http://www.goat-simulator.com/)

## Demo

https://pattys-goat-store.glitch.me/

## Install
1. Install the node modules

    ```bash
    npm install
    ```

1. You should already have a mongo database instance running and ready for the API server to connect to. We used a free [mLab](https://mlab.com/) instance for the sake of simplicity. Create a file named `.env` at the root of your project. **THIS FILE SHOULD NEVER BE CHECKED IN TO VERSION AS IT CONTAINS SECRETS.** Its contents should look like the following, but with your mongo database's credentials:

    ```
    MONGO_HOST=your_host_and_port
    MONGO_DATABASE=your_database
    MONGO_USERNAME=your_username
    MONGO_PASSWORD=your_password
    ```

## Run in Development mode

```bash
npm run dev
```

## Run in Production mode

```bash
npm run start
```
