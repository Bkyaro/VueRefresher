import axios from "axios";

const state = {
	todos: [
		{ id: 1, title: "todo1" },
		{ id: 2, title: "todo2" },
	],
};
const getters = {
	allTodos: (store) => store.todos,
};
const mutations = {};
const actions = {};

export default {
	state,
	getters,
	actions,
	mutations,
};
