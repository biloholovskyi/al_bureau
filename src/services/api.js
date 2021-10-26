class ApiService {
  constructor() {
    this.api = 'https://amitil.pythonanywhere.com/api/v_0.1/';
    // this.api = 'http://127.0.0.1:8000/api/v_0.1/';
  }

  getApi = () => {
    return this.api;
  }
}

export default ApiService;