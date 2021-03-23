import { SAVE_CATEGORIES } from '../action_types';

const initState = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default (prevState = initState, action) => {
	const { type, data } = action;
	switch (type) {
		case SAVE_CATEGORIES:
			return data;
		default:
			return prevState;
	}
};
