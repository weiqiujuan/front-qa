const onCollectValidate = (name_, action, ...args) => {
	const {field, fieldMeta} = this.onCollectCommon(name_, action, args);
	// 获取组件最新的值
	const newField = {
		...field,
		dirty: true,
	};

	this.fieldsStore.setFieldsAsDirty();
	// 对组件最新的值 进行校验
	this.validateFieldsInternal([newField], {
		action,
		options: {
			firstFields: !!fieldMeta.validateFirst,
		},
	});
}
