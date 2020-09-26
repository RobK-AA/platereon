export const fetchUser = userId => {
  
  return $.ajax({
    url: `api/users/${userId}`
  })
}

export const updateUser = (formData, userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: `PATCH`,
    data: formData,
    processData: false,
    contentType: false,
  });
};