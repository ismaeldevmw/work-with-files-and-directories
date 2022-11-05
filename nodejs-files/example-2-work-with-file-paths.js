const path = require("path");

console.log(__dirname);

// The path module doesn't care whether or not things actually exist. Paths are conceptual, not physical. It's just building and parsing strings for you.

// Join paths
console.log(path.join("stores", "201")); // stores/201

// Determine filename extensions
console.log(path.extname("sales.json"));

// This method returns an object that contains the current directory you're in, the name of the file, the filename extension, and even the name of the file without the extension.
console.log(path.parse("stores/201/sales.json"));
// { root: '', dir: 'stores/201', base: 'sales.json', ext: '.json', name: 'sales' }