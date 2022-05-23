import axios from 'axios';

//change baseurl
axios.defaults.baseURL = 'https://zenithar-dev.herokuapp.com/';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGIzOTRkNzA4OWY5MDAxNmRiYzlkMSIsImlhdCI6MTY1MzI5MTM4Mn0.z11A1VUEDgMQFVfVpNuRSeaVEAV0uLmsYoqLPhT-yUs"
