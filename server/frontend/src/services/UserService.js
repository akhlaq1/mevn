import api from './RestService'

const BASE_URL = "/api/users/";

export function login(payload){
  const resourceUrl = BASE_URL + 'login';
  return api.post(resourceUrl, payload);
}

export function register(payload) {
  const resourceUrl = BASE_URL + 'register';
  return api.post(resourceUrl, payload);
}   

export function getProfile(token) {
  const resourceUrl = BASE_URL + 'profile';
  return api.post(resourceUrl, {token});
}
export function getPublicProfile(portfolioUrl){
  const resourceUrl = BASE_URL + 'getPortfolio/Url';
  return api.getPublicUser(resourceUrl,{
    "portfolioUrl":portfolioUrl
  }); 
}

export function getAdditionalData(userId) {
  const resourceUrl = BASE_URL + userId + "/bio";
  return api.get(resourceUrl);
}

export default {
  login,
  register,
  getProfile,
  getPublicProfile,
  getAdditionalData,
}