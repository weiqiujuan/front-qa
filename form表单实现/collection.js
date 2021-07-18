// 使用filedStore管理整个表单的状态
const onCollect = (name_, action, ...args) => {
	const { name, field, fieldMeta } = this.onCollectCommon(
		name_,
		action,
		args,
	);
	const { validate } = fieldMeta;

	this.fieldsStore.setFieldsAsDirty();

	const newField = {
		...field,
		dirty: hasRules(validate),
	};
	this.setFields({
		[name]: newField,
	});
}
