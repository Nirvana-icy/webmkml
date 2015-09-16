var basicInfo = {
	createStudent: function() {
		var name = $('#name').val();
		var birthday = $('#birthday').val();
		var readingCount = $('#readingCount').val();
		var gender = $('#gender').val();
    var startReadingAge = $('#startReadingAge').val();
    var schoolType = $('#schoolType').val();
    var readingHourPerWeek = $('#readingHourPerWeek').val();

    var nickName = $('#nickName').val();
    var schoolName = $('#schoolName').val();

		if(name == '') {
			M._alert('请输入宝宝姓名');
			return false;
		}

    if(birthday == '') {
			M._alert('请输入宝宝生日');
			return false;
		}

		if(readingCount =='') {
			M._alert('请输入宝宝的阅读量');
			return false;
		}

    if(gender =='') {
			M._alert('请输入宝宝性别');
			return false;
		}

    if(startReadingAge =='') {
			M._alert('请输入宝宝阅读开始的年龄');
			return false;
		}

    if(schoolType =='') {
			M._alert('请选择宝宝目前受教育的阶段');
			return false;
		}

    if(readingHourPerWeek =='') {
			M._alert('请输入您每周的亲子阅读时间');
			return false;
		}

		var param = {
			phoneNum: phoneNum,
			password: pw_1,
			verifyNum: validNum,
		};

		$.post("http://121.41.98.144:80/mmUser/createStudent/", param, function(e){
			if(0 === Number(e.ret)) {
				location.href = "/regist.html";
			}
		});
		return false;
	}
}
