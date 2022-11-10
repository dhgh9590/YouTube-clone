/* API의 주소 관리 */

export const BASE_URL = 'https://youtube.googleapis.com';

export const API_KEY = process.env.REACT_APP_API_KEY;

export const USER_URL = {
  LOGIN: '/auth/signin',
  SINGUP: '/auth/signup',
  LOGOUT: '/auth/logout',
};
