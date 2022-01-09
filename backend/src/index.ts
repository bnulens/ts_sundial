import express, {Request, Response, Application} from 'express'

require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app: Application = express();

app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js!")
  });

const startServer = async ():Promise<void> => {
    if (!process.env.PORT) {
        process.exit(1)
    } else {
        app.listen(PORT, (): void => {
            console.log(`Server running @ port: ${PORT}`)
        })
    }
} 

startServer();