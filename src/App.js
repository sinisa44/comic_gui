import { useEffect } from "react";
import useMarvel from "./hooks/useMarvel";

import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters } from "./redux/actions/marvelActions";

import { request } from "./redux/http/axios.config";

function App() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.marvel.characters);

  useEffect(() => {
    // dispatch(fetchCharacters());
    request("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log("response", response.data);
    });
  }, []);

  console.log("CHARACTERS", characters);

  return <div className="App"></div>;
}

export default App;
