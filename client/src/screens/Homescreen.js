import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Clothe from "../components/Clothe";
import { getAllClothes } from "../actions/clotheActions";


function Homescreen() {
  const dispatch = useDispatch();

  //useSelector is used to get data from reducers
  const clothestate = useSelector((state) => state.getAllClothesReducer);
  const { clothes, error, loading } = clothestate

  useEffect(() => {
    dispatch(getAllClothes());
  },[]);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>loading...</h1>
        ) : error ? (
          <h1>something went wrong</h1>
        ) : (
          clothes.map((clothe) => {
            return (
              <div className="col-md-3 m-3" key={clothe._id}>
                <div>
                  <Clothe clothe={clothe} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
