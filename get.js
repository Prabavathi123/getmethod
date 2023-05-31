const https=require('https');

const getdata=() =>
{
    var result='';
    const praba=https.get('https://rapidapi.com/developer/dashboard',(res) =>
    {
        res.on('data',(value) => {
            result +=value;
        });
        res.on('end', ()=>{
            console.log(result);
        });
    });
};
getdata();