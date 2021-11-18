function UserApi() {
  this.getUserApi = () => {
    return axios({
      url: `https://6183cae691d76c00172d1b57.mockapi.io/api/user`,
      method: "GET",
    });
  };
}
