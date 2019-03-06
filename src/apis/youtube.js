import axios from 'axios';

const KEY = 'AIzaSyDr3b5auJ7TdmmPbN7dCtTHH-wI1Vvso_U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});