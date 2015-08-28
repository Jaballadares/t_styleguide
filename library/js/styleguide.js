// var copyEmailBtn = document.querySelector('.copy');
// copyEmailBtn.addEventListener('click', function(event) {
//   // Select the email link anchor text
//   var emailLink = document.querySelector('.green-text');
//   var range = document.createRange();
//   range.selectNode(emailLink);
//   window.getSelection().addRange(range);
//
//   try {
//     // Now that we've selected the anchor text, execute the copy command
//     var successful = document.execCommand('copy');
//     var msg = successful ? 'successful' : 'unsuccessful';
//     console.log('Copy email command was ' + msg);
//   } catch (err) {
//     console.log('Oops, unable to copy');
//   }
//
//   // Remove the selections - NOTE: Should use
//   // removeRange(range) when it is supported
//   window.getSelection().removeAllRanges();
// });

var copyBtn = document.querySelector('.hover-notification');
copyBtn.addEventListener('click', function() {
  var urlField = document.querySelector('.hex-code');

  // create a Range object
  var range = document.createRange();
  // set the Node to select the "range"
  range.selectNode(urlField);
  // add the Range to the set of window selections
  window.getSelection().addRange(range);

  // execute 'copy', can't 'cut' in this case
  document.execCommand('copy');
}, false);

// function changeNotification() {
//   var x = $(this).children($('.hover-notification'));
//   x.html('Copied!');
// }
//
// $('.front').click(changeNotification);
