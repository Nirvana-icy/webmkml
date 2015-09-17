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
		var nickName = $('#nickName').val();
    var gender = $('#gender').val();
    var phoneNum = $('#phoneNum').val();
    var babyNum = $('#babyNum').val();
    var community = $('#community').val();
    var career = $('#career').val();
    var status = $('#status').val();

		var param = {
			
		};

		$.post("http://121.41.98.144:80/mmUser/userUpdate/", param, function(e){
			if(0 === Number(e.ret)) {
				location.href = "/regist.html";
			}
		});
		return false;
	}
}
