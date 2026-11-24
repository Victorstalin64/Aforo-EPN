import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('Base de datos conectada correctamente');
    } catch (error) {
        console.log('Error al conectar con la base de datos:', error);
        process.exit(1);
    }
};

export default conectarDB;  