import axios from 'axios';
const APIkey = "AIzaSyA1eq-eUIqcojWzXa68apVUldqWCeqpmOE";

export default axios.create({
    ytURL: "https://www.googleapis.com/youtube/v3",
    params: {
        maxResults: 1,
        key: APIkey,
    }
})