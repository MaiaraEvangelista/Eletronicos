import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/'
});

        
export default api;