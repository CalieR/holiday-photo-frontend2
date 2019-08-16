const API_BASE_URL = `http://localhost:3002`;

const getAlbumPhotos = id => {
  return fetch(`${API_BASE_URL}/api/v1/albums/${id}`).then(resp => resp.json());
};

export default {
  getAlbumPhotos
};
