export const fetchCommunity = communityId => (
  $.ajax({
    url: `api/communities/${communityId}`
  })
);

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


