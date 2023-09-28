  # IMPORTANT , IN CASE OF TEXT ENCODING ERROR AFTER RUNNING NPM START
    GO TO :backend/node_modules/whatwg-url/lib/encoding.js
    PASTE THIS IN SECOND LINE : const {TextDecoder,TextEncoder} = require('util');
  Then try 'npm start' again
