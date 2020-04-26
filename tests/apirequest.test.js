const apiRequest = require('../src/server/utils/apirequest.js')
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_ID
});




test('should make request to API and return non-error answer', () => {
  const result = textapi.sentiment(
    {
    'text':'some testing text for texting an API and stuff'
    }, function (error, data) {
    if (error) {
      return res.send({ error })
    } else {
      return data
    
    }
  
  })
})