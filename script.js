var co = require('co');
var rp = require("request-promise");


function callApi(otp) {
  var options = { 
    method: 'POST',
    url: 'url',
    headers: { 
        Accept: 'application/json, text/plain, */*',
        accesstoken: '',
        authtoken: '' 
      },
    body: {
        'otp': otp
      },
    json: true // Automatically stringifies the body to JSON
  };

  return rp(options)
}

co( function* (){
  for(var i = 2830; i < 2840; i++){
    var otp = i.toString();
    var result = yield callApi(otp);
    resp = JSON.parse(result)
    console.log(`result for otp =  ${i} :- ` + resp.Message);    
    if (result.messageCode == '1004') {
      break;
    }
  }
}).then(res => {
  console.log('in then..................................................');
}).catch(err => {
  console.log(err)
})