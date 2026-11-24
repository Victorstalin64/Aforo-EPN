import dotenv from "dotenv"
import mongoose from "mongoose"
import Usuario from "../models/Usuario.js"

dotenv.config()

const [nombre, apellido, email, password, rol = "estudiante"] = process.argv.slice(2)

if (!nombre || !apellido || !email || !password) {
    console.log("Uso: npm run seed -- Nombre Apellido correo@epn.edu.ec Clave123 [rol]")
    process.exit(1)
}

await mongoose.connect(process.env.MONGODB_URI)

const existe = await Usuario.findOne({ email: email.toLowerCase() })
if (existe) {
    console.log("Ya existe un usuario con ese correo")
} else {
    const nuevoUsuario = new Usuario({ nombre, apellido, email, rol })
    nuevoUsuario.password = await nuevoUsuario.encryptPassword(password)
    await nuevoUsuario.save()
    console.log(`Usuario creado: ${email} (${rol})`)
}

await mongoose.disconnect()