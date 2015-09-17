var basicInfo = {
	createStudent: function() {
		var name = $('#name').val();
    var startReadingAge = $('#startReadingAge').val();
		var parentType = $('#parentSelect').val();
		var birthday = $('#YYYY').val()+"-"+$('#MM').val()+"-"+$('#DD').val();
    var readingCount = 0;
    var readingCountArr = document.getElementsByName("readingCount");
    for(var i = 0; i < readingCountArr.length; i++){
      if (readingCountArr[i].checked == true) {
        readingCount = i+1;
        break;
      }
    }
    switch (readingCount) {
      case 1:
        readingCount = 2;
        break;
      case 2:
        readingCount = 1;
        break;
      case 3:
          readingCount = 4;
        break;
      case 4:
          readingCount = 3;
        break;
      default:

    }

    var gender = 0;
    var genderRadioArr = document.getElementsByName("gender");
    for(var i = 0; i < genderRadioArr.length; i++){
      if (genderRadioArr[i].checked == true) {
        gender = i+1;
        break;
      }
    }

    var schoolType = 0;
    var schoolTypeRadioArr = document.getElementsByName("schoolType");

    for(var i = 0; i < schoolTypeRadioArr.length; i++){
      if(schoolTypeRadioArr[i].checked == true) {
        schoolType = i+1;
        break;
      }
    }

    var readingHourPerWeek = 0;
    var readingHourPerWeekArr = document.getElementsByName("readingHourPerWeek");

    for(var i = 0; i < readingHourPerWeekArr.length; i++){
      if(readingHourPerWeekArr[i].checked == true) {
        readingHourPerWeek = i+1;
        break;
      }
    }

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

		if(0 == readingCount) {
			M._alert('请输入宝宝的阅读量');
			return false;
		}

    if(0 == gender) {
			M._alert('请输入宝宝性别');
			return false;
		}

    if(startReadingAge =='') {
			M._alert('请输入宝宝阅读开始的年龄');
			return false;
		}

    if(0 == schoolType) {
			M._alert('请选择宝宝目前的受教育阶段');
			return false;
		}

    if(0 == readingHourPerWeek) {
			M._alert('请输入您每周的亲子阅读时间');
			return false;
		}

		var param = {
			name: name,
			birthday: birthday,
			parentType: parentType,
			readingCount: readingCount,
      gender: gender,
      startReadingAge: startReadingAge,
      nickName: nickName,
      schoolType: schoolType,
      schoolName: schoolName,
      readingHourPerWeek: readingHourPerWeek,
		};

		$.post("http://121.41.98.144:80/mmUser/createStudent/", param, function(e){
			if(0 === Number(e.ret)) {
				location.href = "/regist.html";
			}
		});
		return false;
	}
}
