/**
 * Created by yjwbill on 2019/3/24.
 */
function checkpost(){
        if(document.getElementById("account").value=="123"&&document.getElementById("pwd").value=="456"){
            // alert("success");
            window.event.returnValue=false
        }else {
            alert("用户名或密码不正确！")
            return false;
        }
}