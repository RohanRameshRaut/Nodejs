g('Id\tName\tAddress\tSalary');
        console.log('.................................');
        data.forEach((row)=>{
            console.log(`${row.id}\t${row.name}\t${row.address}\t${row.salary}`);
        });