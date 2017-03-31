function ajaxMain(url,datas,fn){
$.ajax({
    url:'http://123.206.43.228/Love/index.php'+url, 
    dataType:"jsonp", 
    jsonp:'jsoncallback',
    callback:'?',
    type:"get",
    data:datas,
    timeout:100000,
    success:fn,   
    error:function(){
    	alert('加载失败');
    }
})
}