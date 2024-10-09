const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    git: {
        type: String,
        required: true
    }
});

// Use singular form for the model name
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
