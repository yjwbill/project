window.onload=function () {
    var jsDivBox = document.getElementById("loopDiv");
//图片节点
    var jsImg = document.getElementById("pic");
//左右按钮节点
    var jsLeft = document.getElementById("left");
    var jsRight = document.getElementById("right");

//显示当前的图片下标
    var currentPage = 0;

//启动定时器
    var timer = setInterval(func, 2000);

    function func() {
        currentPage++;
        changePic();
    }

    function changePic() {
        if (currentPage === 8) {
            currentPage = 0;
        }
        if (currentPage === -1) {
            currentPage = 7;
        }
        //更换图片
        //"img/1.jpg"
        jsImg.src = "../images/" + currentPage + ".jpg";
    }

//鼠标进入
    jsDivBox.addEventListener("mouseover", func1, false);

    function func1() {
        //停止定时器
        clearInterval(timer);
        //显示左右按钮
        jsLeft.style.display = "block";
        jsRight.style.display = "block";
    }

//鼠标移出
    jsDivBox.addEventListener("mouseout", func2, false);

    function func2() {
        //重启定时器
        timer = setInterval(func, 1000);

        //隐藏左右按钮
        jsLeft.style.display = "none";
        jsRight.style.display = "none";
    }

//点击左右按钮
    jsLeft.addEventListener("click", function func3() {
        currentPage--;
        changePic();
    })
    jsLeft.onmouseover = function () {
        this.style.backgroundColor = "rgba(0,0,0,0.6)";
    }
    jsLeft.onmouseout = function () {
        this.style.backgroundColor = "rgba(0,0,0,0.2)";
    }
    jsRight.addEventListener("click", function func4() {
        currentPage++;
        changePic();
    })
    jsRight.onmouseover = function () {
        this.style.backgroundColor = "rgba(0,0,0,0.6)";
    }
    jsRight.onmouseout = function () {
        this.style.backgroundColor = "rgba(0,0,0,0.2)";
    }
}
