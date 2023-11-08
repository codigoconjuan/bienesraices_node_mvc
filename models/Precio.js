import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const Precio = db.define('precios', {
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
});

export default Precio