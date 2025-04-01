import axios from "axios";

export const getVideoDetailService = async(link)=>{
    try {

        const config = {
            headers: {
              "Content-Type": "application/json",
              link: link,
            },
          };

        const response = await axios.get(
          "https://youtube-analyser-backend.vercel.app/api/video",
          config
        );
        return response.data;
      } catch (err) {
        console.log(err.message);
      }
}