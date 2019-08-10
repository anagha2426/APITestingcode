module.exports = {
    "Retrieve API (POST)": ''+function (client) {
          var apiUrl = 'https://your-api-endpoint/'
   var postData = {'name':'habib'};
      client.apiPost(apiUrl, postData, function (response) {
        console.log(response.body);
        var data = JSON.parse(response.body);
        console.log(data.status);
  
        client.assert.equal(response.statusCode, 200, "200 OK");
  
        client.end();
      });
  
    }
  
  };
  