const express = require("express");
const app = express();

var i=0;    //访问次数
app.use('/',express.static('public'));      //将public文件夹映射到根目录下
app.get("/BtCount",(req,res) => {
    i++;
    res.send("点击了："+i.toString())
})



app.listen(10317);