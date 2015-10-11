var registAction = {
	submit: function() {
		var phoneNum = $('#phoneNum').val();
		var pw_1 = $.md5($('#pw_1').val());
		var pw_2 = $.md5($('#pw_2').val());

		var validNum = $('#validNum').val();

		if(phoneNum == '') {
			M._alert('请输入手机号');
			return false;
		}

		if(pw_1 != pw_2) {
			M._alert('请核对您的密码');
			return false;
		}

		if(validNum =='') {
			M._alert('请输入验证码');
			return false;
		}

		var param = {
			phoneNum: phoneNum,
			password: pw_1,
			verifyNum: validNum,
		};

		$.post("http://121.41.98.144:80/mmUser/register/", param, function(ret){
			// if(Number(ret.id) > 0) {
				location.href = "/profile.html";
			// }
		});
		return false;
	}
}
