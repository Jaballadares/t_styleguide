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
