const checkURL = (longUrl) => {
    try {
        new URL(longUrl);
        return true;
      } catch (error) {
        console.log("Error in checkURL: ", error.message);
        return false;
      }
}
export default checkURL;