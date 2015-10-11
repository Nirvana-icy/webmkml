var login = {
	submit: function() {
		var phoneNum = $('#phoneNum').val();
		var pw = $.md5($('#pw').val());

    var userType = 0;
    var userTypeArr = document.getElementsByName("userType");
    for(var i = 0; i < userTypeArr.length; i++){
      if (userTypeArr[i].checked == true) {
        userType = i;
        break;
      }
    }
		if(phoneNum == '') {
			M._alert('请输入手机号');
			return false;
		}

		if(pw == '') {
			M._alert('请输入密码');
			return false;
		}

		var param = {
			phoneNum: phoneNum,
			logonPassword: pw,
			userType: userType,
		};

		$.post("http://121.41.98.144:80/mmUser/login/", param, function(ret){
				location.href = "/regist/profile.html"; 
		});
		return false;
	}
}
