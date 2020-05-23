import axios from 'axios';

export default axios.create({
    baseURL: 'https://random-word-api.herokuapp.com/word?number=1&swear=0'
});