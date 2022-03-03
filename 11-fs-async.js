const {readFile , writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt' , 'utf8',(err,result) =>{
    if(err){
        console.log(err);
        return
    }
    const first = result

    readFile('./content/second.txt','utf8',(err,result) =>{
        if(err){
            console.log(err);
            return
        }
        const second = result

        writeFile(
            './content/result-async.txt',
            `Here is the result ${first}, ${second}`,
            (err,result) =>{
                if(err){
                    console.log(err);
                    return
                }
                // console.log(result);
                console.log('end');
            }
        )
    })
  

})
console.log('starting the new task');

// in async code it is faster than sync code because  sync code is read line by line and in async code it starts the task and then start the new task given by another user and then finish the old task which saves time and is faster
