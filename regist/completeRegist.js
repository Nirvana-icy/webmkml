var images = {
		localId: [],
		serverId: []
};
var completeRegist = {
	//定义images用来保存选择的本地图片ID，和上传后的服务器图片ID
	submit: function() {
		var nickName = $('#nickName').val();
		var birthday = $('#YYYY').val()+"-"+$('#MM').val()+"-"+$('#DD').val();
    var gender = 0;
    var genderRadioArr = document.getElementsByName("gender");
    for(var i = 0; i < genderRadioArr.length; i++){
      if (genderRadioArr[i].checked == true) {
        gender = i+1;
        break;
      }
    }

    var resume = $('#resume').val();

    var community = $('#communitySelect').val();
		console.info(community);
    var careery = $('#careery').val();

		if(careery == '') {
			M._alert('请输入您的职业信息.');
			return false;
		}
		    document.getElementById('upload').onclick = function(){
		        var i = 0, len = images.localId.length;
		        function wxUpload(){
		            wx.uploadImage({
		                localId: images.localId[i], // 需要上传的图片的本地ID，由chooseImage接口获得
		                isShowProgressTips: 1, // 默认为1，显示进度提示
		                success: function (res) {
		                    i++;
		                    //将上传成功后的serverId保存到serverid
		                    images.serverId.push(res.serverId);
		                    if(i < len){
		                        wxUpload();
		                    }
		                }
		            });
		        }
		        wxUpload();
		    }

		var param = {
			gender: gender,
			nickName: nickName,
			resume: resume,
			careery: careery,
			birthday: birthday,

		};

		$.post("http://121.41.98.144:80/mmUser/userUpdate/", param, function(e){
			if(0 === Number(e.ret)) {
				location.href = "/regist.html";
			}
		});
		return false;
	}
}

var wxSelectImg = {
	selectImage: function() {
		var imageView = document.getElementById('userImageView');
			wx.ready(function () {
				// 在这里调用 API
				btn.onclick = function(){
						wx.chooseImage ({
								success : function(res){
										images.localId = res.localIds;  //保存到images
										// 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
										imageView.src = res.localIds[0];
								}
						});
				}
	});
	return false;
}
}
