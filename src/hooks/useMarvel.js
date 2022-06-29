import { useState, useEffect } from "react";
import URL from "../config.json";

import md5 from "md5";

const useMarvel = () => {
  const [marvelUrl, setMarvelUrl] = useState("");

  useEffect(() => {
    const publicKey = URL.PUBLIC_KEY;
    const privatekey = URL.PRIVATE_KEY;

    let timestamp = new Date().getTime();
    const hash = md5(timestamp + privatekey + publicKey);
    const queryKey = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    setMarvelUrl(queryKey);
  }, []);

  return {marvelUrl};
};

export default useMarvel;
