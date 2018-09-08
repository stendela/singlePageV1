module.exports = function(mongoose){
    return [{
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    order: {type: Number, required: true}
}, {
    timestamps: true,
    createdby: true,
    updatedby: true
}]
};