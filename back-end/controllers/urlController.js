import {nanoid} from "nanoid";
import Url from "../models/urlModel.js";
import checkURL from "../utils/helper/urlChecker.js";

const urlShortner = async (req, res) => {
  const { longUrl } = req.body;
  console.log("longUrl: ", longUrl);
  if (!longUrl || checkURL(longUrl) === false) {
    return res.status(400).json("URL is required");
  }
  try {
    const urlCode = nanoid(6);
    const shortUrl = process.env.BASE_URL + "/" + urlCode;

    // if user is login, user should also add in url table to track user specific urls

    const url = new Url({
      longUrl: longUrl,
      shortUrl: shortUrl,
    });
    await url.save();
    res.json({
      longUrl: longUrl,
      shortUrl: shortUrl,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in urlShortner: ", error.message);
  }
};

const redirectUrl = async (req, res) => {
  console.log("req.params.code: ", req.params.code)
  const urlCode = req.params.code;
  let url = process.env.BASE_URL + "/" + urlCode;
  url = await Url.findOne({ shortUrl: url });
  if (url) {
    return res.redirect(url.longUrl);
  } else {
    return res.status(404).json("No URL found");
  }
}

export { urlShortner , redirectUrl };
