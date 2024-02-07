import React, { useEffect } from "react";
import { useState, useRef } from "react";
import axios from "axios";

const Home = () => {
  const [shortenedURL, setShortenedURL] = useState("");
  const [longURL, setLongURL] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const outputInputRef = useRef(null);

  useEffect(() => {
    let url = input;
    if (url.startsWith("http://") || url.startsWith("https://")) {
      setLongURL(url);
    } else {
      setLongURL(`https://${url}`);
    }
  }, [input]);

  useEffect(() => {
    setOutput(shortenedURL || "");
  }, [shortenedURL]);

  const shortenURL = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/url/shorten",
        {
          longUrl: longURL,
        }
      );
      setShortenedURL(response.data.shortUrl);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  const copyToClipboard = () => {
    if (outputInputRef.current) {
      outputInputRef.current.select();
      navigator.clipboard.writeText(outputInputRef.current.value);
    }
  };

  return (
    <div className="flex border-2 rounded-lg max-w-[450px] py-5 mt-10 mx-5 bg-slate-50 justify-center">
      <form action="">
        <div className="grid justify-center gap-3">
          <div>Shorten a long URL</div>
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter long link here..."
              className="min-w-[300px] rounded-md "
            />
          </div>
          <div className="flex">
            <div>
              <input
                type="text"
                ref={outputInputRef}
                value={output}
                placeholder="Shortened URL..."
                readOnly
                className="min-w-[300px] rounded-md "
              />
            </div>
            <button
              type="button"
              onClick={copyToClipboard}
              className="border-2 rounded-md p-2"
            >
              Copy
            </button>
          </div>
          <button
            type="button"
            onClick={shortenURL}
            className="border-2 bg-green-300 rounded-md p-2"
          >
            Shorten URL
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
