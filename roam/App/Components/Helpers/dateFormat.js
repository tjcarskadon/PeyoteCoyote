let formatDate = (context, prop)  => {
  let month = context.state[prop].getMonth() + 1; 
  let day = context.state[prop].getDate(); 
  let year = context.state[prop].getFullYear();

  return month + "/" + day + "/" + year;

}

let formatTime = (context, prop) => {
   let hr = context.state[prop].getHours() > 12 
     ? context.state[prop].getHours() - 12 
     : context.state[prop].getHours() === 0 ? 12 : context.state[prop].getHours();
   let min = context.state[prop].getMinutes() <=9 ? '0' + context.state[prop].getMinutes() : context.state[prop].getMinutes();
   let suf = context.state[prop].getHours() > 12 ? 'PM' : 'AM';

  return hr + ':' + min + ' ' + suf;

}

module.exports.formatDate = formatDate;
module.exports.formatTime = formatTime;