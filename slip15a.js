const fs = require('fs');

fs.readFile("sam.txt", 'utf-8', (err, data)=>{
    if(err) throw err
    
    let word = "Naruto";
    let count=0;
    let sub;
    const words = data.split(/\s+/);
    for(let i=0;i<words.length;i++)
    {
        if(words[i] == word)
        {
            count++;
        }
    }
    console.log("Occurrence: "+count);
});
