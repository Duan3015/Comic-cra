import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimeById } from "../redux/features/anime.feature";

const Card = () => {
  const dispatch = useDispatch();
  const animeState = useSelector((store) => {
    return store["anime"];
  });

  const { loading, anime } = animeState;

  useEffect(() => {
    dispatch(getAnimeById(15));
  }, [dispatch]);

  useEffect(() => {
    if (!loading) console.log(anime?.data);
  }, [loading, anime]);
  return <div className="card"></div>;
};

export default Card;
