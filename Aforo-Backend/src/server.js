import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import routerUsuarios from "./routers/usuario_routes.js"

const app = express()

dotenv.config()

app.use(express.json())
app.use(cors())

app.set("port", process.env.PORT || 3000)

app.get("/", (req, res) => res.send("Bienvenido a la API de AforoEPN"))
app.use("/api", routerUsuarios)

app.use((req, res) => res.status(404).json({ msg: "Endpoint no encontrado" }))

export default app