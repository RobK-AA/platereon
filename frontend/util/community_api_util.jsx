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

export const createCommunity = community => (
  $.ajax({
    url: 'api/communities',
    method: 'POST',
    data: { community }
  })
);

export const updateCommunity = community => (
  $.ajax({
    url: `api/communities/${community.id}`,
    method: 'PATCH',
    data: { community }
  })
);


