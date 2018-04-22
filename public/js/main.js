$(document).ready(function() {
  $('img').on('error', () => {
    console.log('caught error')
  });
});
