var images = {
		localId: [],
		serverId: []
};

var completeRegist = {
	submitBtnPressed: function() {
		function wxUpload(){
				wx.uploadImage({
						localId: images.localId[0], // 需要上传的图片的本地ID，由chooseImage接口获得
						isShowProgressTips: 1, // 默认为1，显示进度提示
						success: function (res) {
								complete.submit(res.serverId);
						}
				});
		}
		wxUpload();
		return false;
	}
}

var complete = {
	submit: function(serverImageId) {
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
		var param = {
			gender: gender,
			nickName: nickName,
			resume: resume,
			careery: careery,
			birthday: birthday,
			userImage: serverImageId,
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
		wx.config({
		 debug: true, //调试阶段建议开启
		//  appId: '<?php echo $signPackage["appId"];?>',
		//  timestamp: <?php echo $signPackage["timestamp"];?>,
		//  nonceStr: '<?php echo $signPackage["nonceStr"];?>',
		//  signature: '<?php echo $signPackage["signature"];?>',
		 jsApiList: [
						/*
						 * 所有要调用的 API 都要加到这个列表中
						 * 这里以图像接口为例
						 */
					 "chooseImage",
					 "previewImage",
					 "uploadImage"
		 ]
	 });
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
