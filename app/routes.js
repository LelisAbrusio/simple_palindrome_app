
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

module.exports = function (app) {

    app.post('/api/pal', function (req, res) {

        if(palindrome(req.body.text)){
          res.status(200).send(' is a palindrome');
          return true;
        }else{
          res.status(400)
             .send(' is not a palindrome');
          return false;
        }
    });


    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
