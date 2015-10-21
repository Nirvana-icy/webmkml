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
    $('#community').text(community);
    $('#signature').text(signature);

  }
})
