const onCollectCommon = (name, action, args) => {
	const fieldMeta = this.fieldsStore.getFieldMeta(name);

	if (fieldMeta[action]) {
		fieldMeta[action](...args);
	} else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
		fieldMeta.originalProps[action](...args);
	}
	const value = fieldMeta.getValueFromEvent
		? fieldMeta.getValueFromEvent(...args)
		: getValueFromEvent(...args);
	if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
		const valuesAll = this.fieldsStore.getAllValues();
		const valuesAllSet = {};
		valuesAll[name] = value;
		Object.keys(valuesAll).forEach(key =>
			set(valuesAllSet, key, valuesAll[key]),
		);
		onValuesChange(
			{
				[formPropName]: this.getForm(),
				...this.props,
			},
			set({}, name, value),
			valuesAllSet,
		);
	}
	const field = this.fieldsStore.getField(name);
	return {name, field: {...field, value, touched: true}, fieldMeta};
}
