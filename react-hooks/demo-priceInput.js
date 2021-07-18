import React, {useState, useCallback} from "react";

function PriceInput({
						// 定义默认的 value 的数据结构
						value = {amount: 0, currency: "rmb"},
						// 默认不处理 onChange 事件
						onChange = () => {
						}
					}) {
	// 定义一个事件处理函数统一处理 amount 或者 currency 变化的场景
	const handleChange = useCallback(
		(deltaValue) => {
			// 直接修改外部的 value 值，而不是定义内部 state
			onChange({
				...value,
				...deltaValue
			});
		},
		[value, onChange]
	);
	return (
		<div className="exp-02-price-input">
			{/* 输入价格的数量 */}
			<input
				value={value.amount}
				onChange={(evt) => handleChange({amount: evt.target.value})}
			/>
			{/* 选择货币种类*/}
			<select
				value={value.currency}
				onChange={(evt) => handleChange({currency: evt.target.value})}
			>
				<option value="rmb">RMB</option>
				<option value="dollar">Dollar</option>
			</select>
		</div>
	);
}
