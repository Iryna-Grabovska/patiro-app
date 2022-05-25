import { createStore } from "vuex";
import actions from "./actions/actions";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

const store = createStore({
  state: {
    patients: [],
  },
  getters,
  actions,
  mutations,
});

export default store;
