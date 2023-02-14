import Api from "./api";
const Caminhoos = {
  getCaminhoById: async (id) => {
    try {
      const response = await Api.get(`data/caminho0${id}.json`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default Caminhoos;
