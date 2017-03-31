
var shares=null,sharex=null,arr=[];
			// 监听plusready事件  
document.addEventListener( "plusready", function(){
	// 扩展API加载完毕，现在可以正常调用扩展API
	plus.share.getServices( function(s){
		shares = s;
		for(var i in s){
			if('qq'==s[i].id){
				arr[0]=s[i];
			}
			if('sinaweibo'==s[i].id){
				arr[1]=s[i];							
			}
			if('weixin'==s[i].id){
				arr[2]=s[i];						
			}
		}
	}, function(e){
		alert( "获取分享服务列表失败："+e.message);
	} );
}, false );
function shareMessage(i){				
	arr[i].send( {title:sharex,content:"和我一起",href:"http://127.0.0.1:8020/foodxm/recommend/recommend1.html",extra:{scene:"WXSceneTimeline"}}, function(){
		alert( "分享成功！" );
	}, function(e){
		alert( "分享失败："+e.message);
	});
}