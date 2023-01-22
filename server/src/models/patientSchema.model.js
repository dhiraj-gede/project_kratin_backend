const mongoose = require('mongoose');

const patientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        weight: {
            type: Number,
            required: true,
            trim: true,
            lowercase: true,
        }, 
        height: {
            type: Number,
            required: true,
            trim: true,
            lowercase: true,
        },

        
    }, {
    timestamps: false,
}
)

const Patient = mongoose.model('Patient' , patientSchema, "patient");

module.exports.Patient = Patient;
module.exports.patientSchema = patientSchema;