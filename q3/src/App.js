import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TreeSelect, Button, Tag, message } from 'antd';
import { requestCategories } from './api';
import { SAVE_CATEGORIES } from './redux/action_types';

function App() {
	const [value, setValue] = useState(undefined);
	const dispatch = useDispatch();
	const categories = useSelector(state => state.categories);

	const handleClick = async () => {
		try {
			const response = await requestCategories();
			const { children } = response.data.categories;
			dispatch({ type: SAVE_CATEGORIES, data: children });
		} catch (e) {
			message.error('Failed: Cannot retrieve data from server', 1);
		}
	};

	const handleChange = value => {
		setValue(value);
		alert(value);
	};

	const renderNodes = categories => {
		return categories.map(category => (
			<TreeSelect.TreeNode
				value={category.categoryId}
				title={category.name}
				key={category.categoryId}
			>
				{category.children && renderNodes(category.children)}
			</TreeSelect.TreeNode>
		));
	};

	return (
		<div>
			<Tag closable>
				As I have no idea about redux saga and custom redux hooks, I used a
				redux official hooks to build this feature.
			</Tag>
			<br />
			<TreeSelect
				style={{ width: 300 }}
				value={value}
				dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
				placeholder='Please select'
				// treeDefaultExpandAll
				onChange={handleChange}
			>
				{renderNodes(categories)}
			</TreeSelect>
			<Button onClick={handleClick}>button</Button>
		</div>
	);
}

export default App;
