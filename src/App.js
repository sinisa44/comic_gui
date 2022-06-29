import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import Home from "./pages/home/home.component";
import Characters from "./pages/characters/characters.component";
import FavoriteCharacters from "./pages/favorite-characters/favorite-characters.component";
import Comics from "./pages/comics/comics.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="characters/*" element={<Characters />} />
        <Route path="comics" element={<Comics />} />
        <Route path="favorite-characters" element={<FavoriteCharacters />} />
      </Route>
    </Routes>
  );
};

export default App;
