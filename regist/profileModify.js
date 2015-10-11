var profile = {
	Modify: function() {
		var nickName = $('#nickName').val();
    var gender = $('#gender').val();
    var phoneNum = $('#phoneNum').val();
    var babyNum = $('#babyNum').val();
    var community = $('#community').val();
    var career = $('#career').val();
    var status = $('#status').val();

		var param = {
      nickName: nickName,
			gender: gender,
			phoneNum: phoneNum,
      babyNum: babyNum,
      community: community,
      career: career,
      status: status,
		};

		$.post("http://121.41.98.144:80/mmUser/userUpdate/", param, function(e){
			// if(0 === Number(e.ret)) {
				location.href = "/regist/profile.html";
			// }
		});
		return false;
	}
}
