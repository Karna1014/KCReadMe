var grabzit = require('grabzit');

var client = new grabzit("MmJmY2I5YTdkODQ5NGNlZDkwYThlMThmMDRlMzJhNmU=", 
"P1Q/Pz9cPyY/KCZlPz8/Pz8/Pz8MPz8GPz9sPz8/UD8=");

// To take a image screenshot
client.url_to_image(`https://api.github.com/users/${answer.username}`);

client.save(`https://api.github.com/users/${answer.username}`, function (error, id){
    if (error != null){
        throw error;
    }
 }); 

 app.get('/handler', function (req, res) {
   var queryData = url.parse(req.url, true).query;

   var message = queryData.message;
   var customid = queryData.customid;
   var id = queryData.id;
   var filename = queryData.filename
   var format = queryData.format;
   var targeterror = queryData.targeterror;
   var client = new grabzit("MmJmY2I5YTdkODQ5NGNlZDkwYThlMThmMDRlMzJhNmU=", 
     "P1Q/Pz9cPyY/KCZlPz8/Pz8/Pz8MPz8GPz9sPz8/UD8=");

   client.get_result(id, function(err, result){
       if (err != null) {            //           return;
       }

       file.writeFile(path.join('public', path.join('results', filename)), result, 'binary');
   });

   res.end();
 });    

//  Profile PDF:**${result.pdf}