import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import { randomBytes } from "node:crypto"

const { Schema, model } = mongoose

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    token: {
        type: String,
        default: null
    },
    rol: {
        type: String,
        enum: ["estudiante", "administrador"],
        default: "estudiante"
    },
}, {
    timestamps: true
})

usuarioSchema.methods.encryptPassword = async function (passwordUser) {
    const salt = bcrypt.genSaltSync(10)
    const passwordEncryp = bcrypt.hashSync(passwordUser, salt)
    return passwordEncryp
}

usuarioSchema.methods.matchPassword = async function (passwordUser) {
    const response = await bcrypt.compare(passwordUser, this.password)
    return response
}

usuarioSchema.methods.createToken = function () {
    const tokenGenerado = randomBytes(2).toString("hex").toUpperCase()
    this.token = tokenGenerado
    return tokenGenerado
}

export default model("Usuario", usuarioSchema)