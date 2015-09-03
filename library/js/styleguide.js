// var copyBtn = document.querySelector('.hover-notification');
// copyBtn.addEventListener('click', function() {
//
//   var urlField = document.querySelectorAll('.hex-code');
//
//   // create a Range object
//   var range = document.createRange();
//   // set the Node to select the "range"
//   range.selectNode(urlField);
//   // add the Range to the set of window selections
//   window.getSelection().addRange(range);
//
//   // execute 'copy', can't 'cut' in this case
//   document.execCommand('copy');
// }, false);
//
// $('.hover-notification').click(function() {
//   $(this)
// });
// function changeNotification() {
//   var x = $(this).children($('.hover-notification'));
//   x.html('Copied!');
// }
//
// $('.front').click(changeNotification);


var copyButton = $('.hover-notification');
copyButton.on('click', function(event) {
  var $this = $(this);

  var content = $this.closest('.swatch-container').find('.hex-code');

  var range = document.createRange();
  range.selectNode(content[0]);

  window.getSelection().addRange(range);

  try {
    var successful = document.execCommand('copy');
    if (successful) {
      $(this).after('<span class="success">Copied!</span>');
      setTimeout(function() {
        $('.success').addClass('show');
        setTimeout(function() {
          $('.success').fadeOut(function() {
            $('.success').remove();
          });
        }, 1000);
      }, 0);
    }

  } catch (err) {}
  window.getSelection().removeAllRanges();
});
// var copyBtn = document.querySelector('.hover-notification');

// var copyBtn = document.querySelector('.swatch-container');
// copyBtn.addEventListener('click', function(e) {
//
//   var urlField = e.currentTarget.parentElement.parentElement.querySelector('.hex-code');
//
//   // create a Range object
//   var range = document.createRange();
//   // set the Node to select the "range"
//   range.selectNode(urlField);
//   // add the Range to the set of window selections
//   window.getSelection().addRange(range);
//
//   // execute 'copy', can't 'cut' in this case
//   document.execCommand('copy');
// }, false);
