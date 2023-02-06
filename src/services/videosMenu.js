import Api from "./api";
const VideosMenu = {
  getVideoByTime: async (capitulos) => {
    try {
      const response = await Api.get(`data/${capitulos}.json`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getVideoByVideo: async (videos) => {
    try {
      const response = await Api.get(`data/${videos}.json`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default VideosMenu;
