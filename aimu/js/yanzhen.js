var issend=true;		
function num(){
	var num='';
	for(var i=0;i<4;i++){ 
		 var n=parseInt(Math.random()*10)
		 num+=n+'';
	}
	$('#get_code').html('验证码：'+num);
 }
function senmobile(url,datas,fn){ 
	if(issend){ 
		var phoneObj = document.getElementById('phone'); 
		var pw = document.getElementById('passw'); 
		var get_code=document.getElementById('get_code'); 
		if (phoneObj.value != ""){  
		    var phoneVal=phoneObj.value;  
		    var p1 = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;  
		    var me = false;  
		 	if (p1.test(phoneVal)) {
		        me=true;
		    }
	        if(!me){  
	            phoneObj.value='';             
	            mui.toast('请输入正确的手机号码'); 
	            phoneObj.focus();  
	            return false; 
	        }else if($('#u_code').val()!=$('#get_code').html().substr(4,4)||$('#u_code').val()==''){
	        	 mui.toast('请输入正确的验证码');
	        }else if(pw.value.length<6||pw.value.length>12){
	          	 mui.toast('6-12位数字加字母组合密码');			          	
	          	return false;  
	        }else{              
	            issend=false; 
	            $.ajax({ 
	                url:'http://123.206.43.228/Love/index.php'+url, 
	                dataType:"jsonp", 
	                jsonp:'jsoncallback',
	                callback:'?',
	                type:"get", 
	                data:datas,//{'ms_user_phone':phoneObj.value,'ms_user_password':pw.value}
	                success:fn/*function(data){
	                    if(data.return== '1003'){			                    	
	                       plus.nativeUI.toast('用户已存在！', {verticalAlign: 'center'}); 
	                        return false; 
	                    }else{
		                    mui('.reg-submint').on('tap','input',function(){
								mui.openWindow({
									url:'login.html',  
									id:'login',   
								})
							}) 
			            } 
	                }*/
	            })
	        }
		}else{ 
	        plus.nativeUI.toast('手机号码不能为空！', {verticalAlign: 'center'}); 
	        return false; 
		} 
	}
}