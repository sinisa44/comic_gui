import { Fragment } from "react";
import { useParams } from "react-router-dom";

const CharacterPreview = () => {
  const { id } = useParams();

  return <Fragment>character id = {id}</Fragment>;
};

export default CharacterPreview;
