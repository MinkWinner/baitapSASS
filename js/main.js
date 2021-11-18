let connectApi = new UserApi();

const getEle = (id) => document.getElementById(id);

const getUserData = () => {
  connectApi
    .getUserApi()
    .then(function (result) {
      renderUserData(result.data);
    })
    .catch(function (err) {
      alert("Không tìm thấy dữ liệu");
    });
};

getUserData();

const renderUserData = (list) => {
  let content = "";
  list.forEach((user) => {
    if (user.loaiND == "GV") {
      content += `
            <div class="col-3 mb-5">
                <div class="mycard">
                    <div class="image-content">
                        <img src="./images/${user.hinhAnh}" alt="teacher">
                    </div>
                    <div class="text-content">
                        <h6>${user.ngonNgu}</h6>
                        <h3>${user.hoTen}</h3>
                        <p>${user.moTa}</p>
                    </div>
                </div>
            </div>
            `;
    }
  });
  document.querySelector("section.personalCards .container .row").innerHTML =
    content;
};
