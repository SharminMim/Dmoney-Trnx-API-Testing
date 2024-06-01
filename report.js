const newman= require('newman');
newman.run({
    collection: 'https://api.postman.com/collections/35117532-7d801d64-356c-49fe-a8e5-a9602de0df09?access_key=PMAT-01HZ9DBDZARQ034G7NGTYQG9C3',
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter:{
        htmlextra:{
            export: './Reports/report.html',
        }
    }
}, function(err){
    if(err){throw err;}
    console.log('collection run complete!');
}
);