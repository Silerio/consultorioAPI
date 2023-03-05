interface IObject {
  [key: string]: any;
}

const updateOrCreate = async (model: any, values: IObject, condition: IObject) => {
  const res = await model.findOne({ where: condition });

  if (res) {
    await res.update(values);
    return;
  }

  await model.create(values);
};

export default updateOrCreate;
