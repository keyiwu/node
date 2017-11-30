"use strict";
var projectData={
    "name":"flnet",//项目的名称
    "filedata":[{
        "name":"css",
        "type":"dir"
    },
        {
            "name":"js",
            "type":"dir"
        },{
            "name":"image",
            "type":"dir"
        },{
            "name":"index.html",
            "type":"file",
            'content':`
            <html>
            <head>\n\t
            <title>title</title>
            </head>\n\t
            <body>         
</body>\n  
</html>
            `
        }
    ]
};
const  fs=require("fs");
var projectFile=projectData.name;
if(projectData.name){
    fs.mkdir(projectFile,function (err) {
        if (err){
            console.log("文件夹创建失败");
            throw err;
        }
        else
        {
            if (projectData.filedata){
                projectData.filedata.forEach(function (f) {
                    // console.log(f);
                    f.content=f.content||'';
                   switch (f.type){
                       case "dir":
                           fs.mkdir(projectFile+"/"+f.name,function (err) {
                               if (err){
                                   console.log(f.name+"创建失败");
                                   throw err;
                               }
                               else{
                                   console.log(f.name+"创建成功");
                               }

                           });
                           break;
                       case "file":
                           fs.writeFile(projectFile+"/"+f.name,f.content,function (err) {
                               if (err){
                                   console.log("文件写入失败");
                                   throw err;
                               }
                           })


                   }


                })

            }



        }
    })
}