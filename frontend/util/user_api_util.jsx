export const fetchUser = userId => {
  
  return $.ajax({
    url: `api/users/${userId}`
  })
}

export const updateUser = (formData) => {
  return $.ajax({
    url: `api/users/${user.id}`,
    method: `PATCH`,
    data: formData,
    processData: false,
    contentType: false,
  });
};