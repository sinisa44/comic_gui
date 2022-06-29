import { useEffect } from "react";

import useMarvel from "../../hooks/useMarvel";
import { useDispatch, useSelector } from "react-redux";

import { fetchComics } from "../../redux/actions/marvelComicActions";

import { setOffset } from "../../redux/slices/marvelComicSlice";

const Comics = () => {
  const dispatch = useDispatch();

  const { offset, comics } = useSelector((state) => state.marvelComics);
  const { marvelUrl } = useMarvel();
  console.log({ comics });

  useEffect(() => {
    if (marvelUrl) {
      dispatch(fetchComics({ marvelUrl: `/comics${marvelUrl}`, offset }));
    }
  }, [marvelUrl]);

  return <>Comics</>;
};

export default Comics;
