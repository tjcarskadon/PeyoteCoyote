
let formatDate = (context)  => {
  let month = context.state.date.getMonth() + 1; 
  let day = context.state.date.getDate(); 
  let year = context.state.date.getFullYear();

  return month + "/" + day + "/" + year;

}

let formatTime = (context) => {
   let hr = context.state.date.getHours() > 12 ? context.state.date.getHours() - 12 : context.state.date.getHours();
   let min = context.state.date.getMinutes() <=9 ? '0' + context.state.date.getMinutes() : context.state.date.getMinutes();
   let suf = context.state.date.getHours() > 12 ? 'PM' : 'AM';

  return hr + ':' + min + ' ' + suf;

}

module.exports.formatDate = formatDate;
module.exports.formatTime = formatTime;