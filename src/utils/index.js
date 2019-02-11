import {GET_PHOTOS_FAIL, GET_PHOTOS_SUCCESS} from "../constants";

let photosArr = [];
let cached = false;

const makeYearPhotos = (photos, selectedYear) => {
  let createdYear,
    yearPhotos = [];

  photos.forEach(item => {
    createdYear = new Date(item.date * 1000).getFullYear();
    if (createdYear === selectedYear) {
      yearPhotos.push(item)
    }
  });

  yearPhotos.sort((a, b) => b.likes.count - a.likes.count);

  return yearPhotos
};

const getMorePhotos = (offset, count, year, dispatch) => {
  //eslint-disable-next-line no-undef
  VK.Api.call(
    'photos.getAll',
    { extended: 1, count: count, offset: offset, v: '5.80' },
    r => {
      try {
        photosArr = photosArr.concat(r.response.items);
        if (offset <= r.response.count) {
          offset += 200;
          getMorePhotos(offset, count, year, dispatch)
        } else {
          let photos = makeYearPhotos(photosArr, year);
          cached = true;
          dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: photos,
          })
        }
      } catch (e) {
        dispatch({
          type: GET_PHOTOS_FAIL,
          error: true,
          payload: new Error(e),
        })
      }
    }
  )
};

export {
  photosArr,
  cached,
  makeYearPhotos,
  getMorePhotos
}
