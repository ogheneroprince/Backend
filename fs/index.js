const fs = require('fs');
const path = require('path');


    const folder = path.join(__dirname, "text");
    if (!fs.existsSync(folder)){
        fs.mkdirSync(folder);
        console.log('folder created');
    }

    // //sync file

    // const fold = path.join(folder, "text.txt");

    // fs.writeFileSync(fold, 'this is a sample of file');
    //     console.log('writing file in a sync way');

    // const read = fs.readFileSync(fold, 'utf8');
    // console.log(read);

    // fs.appendFileSync(fold, '\nthis the second line');
    // console.log('appending file');

    // const upread = fs.readFileSync(fold, 'utf8');
    // console.log(upread);

    // fs.renameSync(fold, path.join(folder, 'test.txt'))
    // console.log('name change');
    
    //async file
    const filesync = path.join(folder, "textsync.txt");
    
    fs.writeFile(filesync, 'this the async way of writing', (err)=>{
        if (err) throw err;
        console.log('writing async');

        fs.readFile(filesync, 'utf8', (err, data)=>{
            if (err) throw err;
            console.log(data);

            fs.appendFile(filesync, '\nthis the second line', (err)=>{
                if (err) throw err;
                console.log('append');

                 fs.readFile(filesync, 'utf8', (err, updata)=>{
            if (err) throw err;
            console.log(updata);

            fs.rename(filesync, path.join(folder, 'testsync.txt'), (err)=>{
                 if (err) throw err;
            console.log('rename');
            })
                 })
            })
    })
    })

    
    
