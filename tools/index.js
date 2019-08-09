const fs = require('fs'); 
const csv = require('csv-parser');

setInterval(function(){
    console.log("wow");
    fs.createReadStream('/Users/bagminseo/Desktop/coding/Blockchain/Quoroum HACK/tools/file.csv')
    .pipe(csv())
    .on('data', function(data){
        try {
            console.log(data);
            if(data[3]>0.17){
                console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!alert!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
            } 
        }
        catch(err) {
            console.log('Error');
        }
    })
    .on('end',function(){
    });  
},7000);

fs.createReadStream('/Users/bagminseo/Desktop/coding/Blockchain/Quoroum HACK/tools/file.csv')
.pipe(csv())
.on('data', function(data){
    try {
        console.log(data);
    }
    catch(err) {
        console.log('Error');
    }
})
.on('end',function(){
    console.log('Initial Read finished');
});  