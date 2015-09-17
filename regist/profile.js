$.ajax({
url : "http://121.41.98.144:80/mmUser/userView",
data : "id=1",
dataType : "json",//这里的dataType就是返回回来的数据格式了html,xml,json
cache: false,//设置是否缓存，默认设置成为true，当需要每次刷新都需要执行数据库操作的话，需要设置成为false
success : function(data) {
  var json = eval(data); //数组
  $.each(json, function (index) {
    //循环获取数据
    var id = json[index].id;
    var fullImageURL = json[index].fullImageURL;
    var thumbImageURL = json[index].thumbImageURL;
    var type = json[index].type;
    var gender = json[index].gender;
    var resume = json[index].resume;
    var birthday = json[index].birthday;
    var community = json[index].community;
    var career = json[index].career;
    var status = json[index].status;
    var level = json[index].level;
    console.info(json);
  });
  }
})

var profile = {
	Modify: function() {
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

		$.post("http://121.41.98.144:80/mmUser/register/", param, function(e){
			if(0 === Number(e.ret)) {
				location.href = "/regist.html";
			}
		});
		return false;
	}
}
