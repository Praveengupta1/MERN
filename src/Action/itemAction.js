import { LOADING_ITEMS, GET_ITEMS, ADD_ITEM, DELETE_ITEMS } from "./type";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(LoadingItems);
  axios
    .get("/api/items")
    .then((res) =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const addItem = (item) => (dispatch) => {
  axios.post("/api/items", item).then((res) =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    })
  );
};

export const deleteItems = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then(() => {
    dispatch({
      type: DELETE_ITEMS,
      payload: id,
    });
  });
};

export const LoadingItems = () => {
  return {
    type: LOADING_ITEMS,
  };
};
