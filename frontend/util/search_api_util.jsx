export const createSearch = (keyword) => (
  $.ajax({
    url: `api/searches`,
    method: `POST`,
    data: { keyword }
  })
);

export const fetchResults = searchId => {

  return $.ajax({
    url: `api/searches/${searchId}`
  })
};