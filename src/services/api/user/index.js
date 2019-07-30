const API_BASE_URL = `http://localhost:3002`;

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json"
};

const getUserProfile = () => {
  return fetch(`${API_BASE_URL}/api/v1/users/profile`, {
    headers: { ...headers, Authorization: localStorage.getItem("token") }
  }).then(res => res.json());
};

export default {
  getUserProfile
};
