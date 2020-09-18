export const fetchCommunities = (keyword="") => (
  $.ajax({
    url: `api/communities?search=${keyword}`
  })
);

export const fetchCommunity = communityId => {
  
  return $.ajax({
    url: `api/communities/${communityId}`
  })
};

export const createCommunity = formData => (
  $.ajax({
    url: 'api/communities',
    method: 'POST',
    data: formData,
    processData: false,
    contentType: false
  })
);

export const updateCommunity = community => (
  $.ajax({
    url: `api/communities/${community.id}`,
    method: 'PATCH',
    data: { community }
  })
);


