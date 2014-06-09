(function(script) {
  'use strict';

  var run = setTimeout.bind(this, script);

  if (document.readyState !== 'complete') {
    window.addEventListener('load', run, true);
  } else {
    run();
  }
})(function() {
  'use strict';

  var d = document;

  var notice = d.getElementById('notifiedUsersLeft');

  if (!notice) {
    return false;
  }

  notice.style.marginTop = '15px';

  d.getElementById('loom').appendChild(notice);
});
