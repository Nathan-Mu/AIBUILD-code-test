const rawData = require('./categories.json');

let numOfResorted = 0;
const numOfCategories = rawData.length;
const shouldContinue = () => numOfCategories !== numOfResorted;

const getChildren = node => rawData.filter(c => c.parent === node.categoryId);

const appendChildrenToParents = parents => {
	parents.forEach(parent => {
		if (shouldContinue()) {
			children = getChildren(parent);
			if (children.length) {
				numOfResorted += children.length;
				parent.children = children;
				appendChildrenToParents(children);
			}
		}
	});
};

exports.resortCategories = () => {
	let categories = {
		categoryId: 'root',
		name: 'Root Category',
		parent: null,
	};
	categories.children = getChildren(categories);
	appendChildrenToParents(categories.children);
	return categories;
};
