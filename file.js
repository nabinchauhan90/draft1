const fs = require('fs');
//reading file
    fs.readFile(('./Docs/hello.txt'),(error,data)=>{
        if(error){
            console.log(error);
        }
        if(data){
            console.log(data);
            console.log(data.toString());
        }
    })
    console.log('Read File First.');
//writing file
    if(fs.existsSync('./Docs/new.txt')){
        console.log('File Already Exists');
        fs.writeFile('./Docs/New2.txt','Hello From New File 2',()=>{
            console.log('New File 2 Created Instead.');
        })
    }
    else{
        fs.writeFile(('./Docs/new.txt') ,'Hello Hello Hello',()=>{
            console.log('File Created Successfully.');
        })
        fs.writeFile('./Docs/New2.txt','Hello From New File 2',()=>{
            console.log('New File 2 Created Instead.');
        })
    }
    

//directories
    if(!fs.existsSync('./assets')){
        fs.mkdir(('./assets'),(error)=>{    
            if(error){
                console.log(error);
            }
            console.log("Directory Created Successfully!");
        });
    }else{
        fs.rmdir('./assets',err=>{
            if(err){
                console.log(err);
            }
            console.log("Directory Deleted Successfully!");
        })
    }

// deleting file
    if(fs.existsSync('./Docs/new.txt')){
        setTimeout(()=>{
            fs.unlink('./Docs/new.txt',(err)=>{
                if(err){
                    console.log(err);
                }
                console.log('File Deleted Successfully');
            })
        },2000)

    }else{
        console.log("File doesn't Exist");
        fs.unlink('./Docs/new2.txt',(err)=>{
            if(err){
                console.log(err);
            }
            console.log('File 2 Deleted Successfully');
        })
    }
