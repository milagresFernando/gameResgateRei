import Api from "./api";
const PagesService = {
  getPages: async () => {
    try {
      const response = await Api.get("data/pages.json");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default PagesService;
