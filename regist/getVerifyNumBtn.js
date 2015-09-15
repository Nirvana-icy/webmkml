var VerifyNum = {
	getVerifyNum: function() {
		var wait=60;
		var phoneNum = $('#phoneNum').val();
		if(phoneNum == '') {
			M._alert('请输入手机号');
			return false;
		}
		time(document.getElementById("getVerifyNumBtn"));

		function time(o) {
		if (wait === 0) {
			o.removeAttribute("disabled");
			o.text="获取验证码";
			wait = 60;
		} else {
			if (wait === 60) {
				var $form = $( this ),
						phoneNum = $form.find( "input[name='phoneNum']" ).val()
				var url = "http://121.41.98.144:80/mmUser/generateVerifyNum/"
				var get = $.get( url, { 'phoneNum': $('#phoneNum').val(), 'verifyType': 1 } );

				get.done(function( data ) {
						alert("content");
				});
			}
			o.setAttribute("disabled", true);
			o.text="重新发送(" + wait + ")";
			wait--;
			setTimeout(function() {
				time(o)
			},
			1000)
			}
			}
	}
}
