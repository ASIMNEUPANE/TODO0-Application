const TodoModel = require("./model");

const create = async (payload) => {
  return await TodoModel.create(payload);
};

const list = async () => {
  return await TodoModel.find();
};

const getById = async (id) => {
  return await TodoModel.findOne({_id:id});
};
 
const updateById = async (id,payload) => {
return await TodoModel.findByIdAndUpdate({_id:id},payload);
};

const deleteById = async (id) => {
return await TodoModel.deleteOne({_id:id})

};


module.exports = {create, list,getById,updateById,deleteById}
