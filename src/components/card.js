import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimeById } from "../redux/features/anime.feature";
import loader from "../asset/loader.gif";
import ReactStars from "react-rating-stars-component";

import "../styles/card.scss";

const Card = () => {
  const dispatch = useDispatch();
  const animeState = useSelector((store) => {
    return store["anime"];
  });

  const changeId = (max, min) => () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const { loading, anime } = animeState;
  const [id, setId] = useState(changeId(2841, 1));

  const secondExample = {
    size: 40,
  };

  useEffect(() => {
    dispatch(getAnimeById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!loading && anime?.data) console.log(anime);
  }, [loading, anime]);

  return (
    <div className="card">
      {loading && (
        <div className="card__loader">
          <img alt="loader" src={loader}></img>
        </div>
      )}
      {!loading && !anime?.data && (
        <div className="card__loader">
          <h1 className="card__title">{`The anime with the ID ${id} is not available.`}</h1>
        </div>
      )}
      {!loading && anime?.data && (
        <div className="card__content">
          {anime?.data?.images?.jpg?.image_url && (
            <div className="card__aside">
              <img
                alt={anime?.data?.title}
                className="card__image"
                src={anime?.data?.images?.jpg?.image_url}
              ></img>
              <div className="card__score">
                <ReactStars {...secondExample} />
              </div>
            </div>
          )}
          <div className="card__header">
            {anime?.data?.title && (
              <h1 className="card__title">{anime?.data?.title}</h1>
            )}
            <div className="card__subtitle">
              {anime?.data?.status && (
                <span>{`Status: ${anime?.data?.status}`}</span>
              )}
              {anime?.data?.year && <span>{`Year: ${anime?.data?.year}`}</span>}
            </div>
            <p className="card__copy">{anime?.data?.synopsis}</p>
          </div>
        </div>
      )}
      <div className="card__footer">
        {!loading && (
          <button
            className="card__button"
            onClick={() => setId(changeId(2841, 1))}
          >
            View more
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
