import { Router } from "express"
import { login, perfil } from "../controllers/usuario_controller.js"
import verificarTokenJWT from "../middlewares/JWT.js"

const router = Router()

router.post("/login", login)
router.get("/perfil", verificarTokenJWT, perfil)

export default router