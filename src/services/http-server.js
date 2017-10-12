/*jshint esversion: 6 */
import 'whatwg-fetch';

class HttpService {
  getProducts = () => {
   let promise = new Promise((resolve, reject) => {
  fetch('http://localhost:3001/product')
  .then(res => {
      // console.log(res.json());
      resolve(res.json());
      })
  })
    return promise;
  }
}

export default HttpService;
