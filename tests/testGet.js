module.exports = {
  "Retrieve API (GET)": ''+function (client) {
        var apiUrl = 'https://dog.ceo/api/breeds/list/all';
    client.apiGet(apiUrl, function (response) {
      console.log(response.body);
      var data = JSON.parse(response.body);
      console.log('---->'+data.message.bulldog);

      client.assert.equal(response.statusCode, 200, "200 OK");
       
      client.end();
    });

  },


  "Retrieve Parameters from bullDog ": function (client) {
    var apiUrl = 'https://dog.ceo/api/breeds/list/all';
    client.apiGet(apiUrl, function (response) {
      var data = JSON.parse(response.body);
      var bullDogData = data.message.bulldog;
      console.log('---->'+bullDogData.length);
      var res = bullDogData.length;
      exp = new Array(3);
      exp[0]='boston';
      exp[1]='english';
      exp[2]='french';
    
      for(var i =0;i<res;i++){

        client.assert.equal(bullDogData[i],exp[i]);

      }

     

      client.assert.equal(res,3,"The value is same");
//checking whether the actual array do not contain other than valid value
      for(var i =0;i<res;i++){

        client.assert.notEqual(bullDogData[i],'abcd');

      }
      client.end();
  
  });
},




};
