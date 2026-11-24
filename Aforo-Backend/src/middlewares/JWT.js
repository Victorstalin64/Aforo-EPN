import jwt from "jsonwebtoken"
import Usuario from "../models/Usuario.js"

const verificarTokenJWT = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization || !authorization.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "Acceso denegado: token no enviado o inválido" })
    }

    try {
        const token = authorization.split(" ")[1]
        const { id } = jwt.verify(token, process.env.JWT_SECRET)

        const usuarioBDD = await Usuario.findById(id).select("-password")
        if (!usuarioBDD || !usuarioBDD.status) {
            return res.status(401).json({ msg: "Acceso denegado: usuario no válido" })
        }

        req.usuarioHeader = usuarioBDD
        next()
    } catch (error) {
        console.log(error)
        const msg = error.name === "TokenExpiredError"
            ? "Tu sesión expiró, inicia sesión nuevamente"
            : "Acceso denegado: token no válido"
        return res.status(401).json({ msg })
    }
}

export default verificarTokenJWT