const fs = require('fs');
//reading files
fs.readFile ('./docs/blog.txt' , (err,data) => {
    if (err){
        console.log(err)
    }
    console.log(data.toString())
});


//writing
fs.writeFile('./docs/blog.txt', 'Hello, world', () => {
   // console.log('file was written');
});
fs.writeFile('./docs/blog.txt', 'Hello, universe', () => {
    //console.log('file was written');
});
//dir//
if (!fs.existsSync('./assets')){
fs.mkdir('./assets', err => {
    if(err) {
        console.log(err);
    }
    console.log('folder created');
});
}else{
    fs.rmdir('./assets', (err) => { 
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    });
}
//deleting//
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}