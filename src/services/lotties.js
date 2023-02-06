import Api from "./api";
const Lotties = {
  getLotties: async (lottie) => {
    try {
      const response = await Api.get(`data/lotties/${lottie}.json`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default Lotties;
