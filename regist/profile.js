$.ajax({
url : "/trundle/RawContentAction.getAjaxContent.act",
data : "param1=22",
dataType : "json",//这里的dataType就是返回回来的数据格式了html,xml,json
cache: false,//设置是否缓存，默认设置成为true，当需要每次刷新都需要执行数据库操作的话，需要设置成为false
success : function(data) {
$(data).each(function(te, u) {
alert(te);
$("#content").append(u.title+"</br>");
})
}
}) 
