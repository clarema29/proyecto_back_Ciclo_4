const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    nombre:{type: String, required: true, max:60},
    codigo:{type: String, required: true, max:60},
    descripcion:{type: String, required: true, max:40},
    fecha:{type: String, required: true, max:250},
    cantidad:{type: Number, required: false, max:200},
    precio_unidad:{type: String, required: false, max:10000000},
    precio_total:{type: String, required: false, max:10000000},
    movimiento:{type: String, required: false, max:150}
});

module.exports = mongoose.model("productos", ProductosSchema);