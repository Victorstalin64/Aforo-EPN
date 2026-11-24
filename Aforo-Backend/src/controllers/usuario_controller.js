import Usuario from "../models/Usuario.js"
import crearTokenJWT from "../helpers/crearJWT.js"

const login = async (req, res) => {
    try {
        const { email, password } = req.body ?? {}

        if (typeof email !== "string" || typeof password !== "string" || !email.trim() || !password) {
            return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" })
        }

        const usuarioBDD = await Usuario.findOne({ email: email.trim().toLowerCase() })
            .select("-__v -token -updatedAt -createdAt")

        if (!usuarioBDD) {
            return res.status(404).json({ msg: "Lo sentimos, el usuario no se encuentra registrado" })
        }

        if (!usuarioBDD.status) {
            return res.status(403).json({ msg: "Lo sentimos, tu cuenta se encuentra desactivada" })
        }

        const verificarPassword = await usuarioBDD.matchPassword(password)
        if (!verificarPassword) {
            return res.status(401).json({ msg: "Lo sentimos, el password no es el correcto" })
        }

        const { nombre, apellido, _id, rol } = usuarioBDD
        const token = crearTokenJWT(_id, rol)

        res.status(200).json({
            msg: "Inicio de sesión exitoso",
            token,
            rol,
            nombre,
            apellido,
            _id,
            email: usuarioBDD.email
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Hubo un error en el servidor" })
    }
}

const perfil = (req, res) => {
    const { _id, nombre, apellido, email, rol } = req.usuarioHeader
    res.status(200).json({ _id, nombre, apellido, email, rol })
}

export {
    login,
    perfil
}