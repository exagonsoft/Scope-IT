// import dotEnv from "dotenv";
// import path from "path";


// const _dev_env = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}`.trim() : ".dev";
// const envFile = _dev_env;

// const result = dotEnv.config({
//   path: path.resolve(process.cwd(), envFile)
// });

// if (result.error) {
//   console.error("Error loading .env file:", result.error);
// } else {
//   console.log("Environment variables loaded successfully!");
// }

export const config = {
    API_URL: process.env.API_URL ? process.env.API_URL : "http://localhost:4040/",
    SECRET: process.env.SECRET ? process.env.SECRET : "vkvjjklxjvxv37v54xvmopvkvxcvx4c5v6"
}

