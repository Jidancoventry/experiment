import axios from "axios";

export default axios.create({
    baseURL:'https://axn0uz7l4l.execute-api.us-east-1.amazonaws.com',
    headers:{
        "content-type":"application/json"
    }
})