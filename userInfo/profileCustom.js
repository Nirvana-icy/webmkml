$.ajax({
url : "https://raw.githubusercontent.com/Nirvana-icy/mkml/master/screenshot/profile.json",
data : "id=1",
dataType : "json",//这里的dataType就是返回回来的数据格式了html,xml,json
cache: false,//设置是否缓存，默认设置成为true，当需要每次刷新都需要执行数据库操作的话，需要设置成为false
success : function(data) {
  var json = eval(data); //数组

    var id = json["id"];
    var nickName = json["nickName"];
    var gender = json["gender"];
    var phoneNum = json["phoneNum"];
    var community = json["community"];
    var career = json["career"];
    var signature = json["signature"];

    $('#nickName').text(nickName);
    $('#gender').text(gender == 1 ? "男" : "女");
    $('#phoneNum').text(phoneNum);
    $('#signature').text(signature);

  }
})


var profileCustom = {
	addBabyBtnTaped: function() {
  var oldHtml = document.getElementById("babyInfoDiv").innerHTML;
  var addedHtml =

    "<div class="add-row">
        <span class="input_title">阿宝的状态</span>
        <label class="user_info_center" id="customLevel">您还未成为会员</label>
        <span><a href="#" class="button_ok_small smallLeftBtn" id="joinMemberShipBtn" onclick="">升级</a>
    </div>";

  document.getElementById("babyInfoDiv").innerHTML = oldHtml + addedHtml;
  }
}
