import { Routes, Route } from "react-router-dom";
import CharacterPreview from "./character-preview.component";
import CharactersPreview from "./characters-preview.component";

const Characters = () => {
  return (
    <Routes>
      <Route index element={<CharactersPreview />} />

      <Route path=":id" element={<CharacterPreview />} />
    </Routes>
  );
};

export default Characters;
