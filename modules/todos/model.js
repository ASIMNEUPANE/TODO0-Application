const {Schema, model} = require('mongoose')
const commonSchema = require('../../utilis/commomSchema')

const TodoSchema = new Schema({
title: { type : String, required : true },
status:{ type: String, enum: ["pending", "completed"], default:"pending"},
...commonSchema,

});


module.exports= model("Todo" , TodoSchema);