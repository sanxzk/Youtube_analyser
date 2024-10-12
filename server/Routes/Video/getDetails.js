const getVideoInfo = require("../../controller/getVideoInfo");
const calculateEarnings = require("../../controller/calculateEarnings");

const getDetails = async (req, res) => {
  let errorCode = null;
  try {
    const link = req.headers.link;

    // this function internally do an api call to youtube's
    // data api and returns the data about the video.
    const details = await getVideoInfo(link); 
    
    if (details) {
      details.earnings = calculateEarnings(details);
      res.status(200).json({ success: true, details });
    } else {
      errorCode = 404;
      throw new Error("video not found");
    }
  } catch (err) {
    res.status(errorCode || 500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
module.exports = getDetails;
