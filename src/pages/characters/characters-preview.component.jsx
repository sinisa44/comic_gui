import { useEffect } from "react";

import useMarvel from "../../hooks/useMarvel";

import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters } from "../../redux/actions/marvelCharacterActions";

import { setOffset } from "../../redux/slices/marvelCharacterSlice";

import Button from "react-bootstrap/Button";

const CharactersPreview = () => {
  const dispatch = useDispatch();
  const { characters, offset } = useSelector((state) => state.marvelCharacters);
  const { marvelUrl } = useMarvel();

  useEffect(() => {
    if (marvelUrl) {
      dispatch(
        fetchCharacters({ marvelUrl: `/characters${marvelUrl}`, offset })
      );
    }
  }, [marvelUrl, offset]);

  const handleClick = () => {
    dispatch(setOffset(offset + 100));
  };

  return (
    <div className="App">
      <Button>OK</Button>
    </div>
  );
};

export default CharactersPreview;
