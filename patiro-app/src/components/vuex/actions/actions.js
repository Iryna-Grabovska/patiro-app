import axios from "axios";

export default {
  async GET_PATIENTS_API({ commit }) {
    try {
      const patients = await axios(
        "https://patiro-developer.azurewebsites.net/api/Member",
        {
          method: "GET",
        }
      );
      commit("SET_PATIENTS_API", patients.data);
      return patients;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
