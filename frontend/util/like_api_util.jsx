export const like = like => {
  return $.ajax({
    url: `api/likes`,
    method: `POST`,
    data: { like }
  });
};

export const unlike = (likeId) => {
  return $.ajax({
    url: `api/likes/${likeId}`,
    method: `DELETE`
  });
};