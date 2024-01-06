
import axios from 'axios';


export default axios.create({
  baseURL: 'http://localhost:5065',
  headers:{
    'Content-Type': 'application/json' 
  },
  timeout: 10000
});

// export default axios.create({
//   baseURL: 'http://localhost:8080',
//   headers: {
//     'Content-Type': 'application/json'  
//   },
//   timeout: 10000
// });

// o primeiro será com c#, o segundo com spring
