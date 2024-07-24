// Example of setting authorization headers in Axios
import axios from 'axios';

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

axiosInstance.get('/api/user/profile').then(response => {
  console.log('User profile:', response.data);
}).catch(error => {
  console.error('Error fetching user profile:', error);
});
