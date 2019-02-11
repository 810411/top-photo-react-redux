import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from "../constants";
import {cached, getMorePhotos, makeYearPhotos, photosArr} from "../utils";

const getPhotos = year => {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    });

    if (cached) {
      let photos = makeYearPhotos(photosArr, year);
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: photos,
      })
    } else {
      getMorePhotos(0, 200, year, dispatch)
    }
  }
};


export {
  getPhotos
}
