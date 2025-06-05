const fs = require('fs');
const path = require('path');
const glob = require('glob');
const postcss = require('postcss');

const prefix = process.env.VITE_PREFIX || ''; 

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'), // Optional: Uncomment if you have a package.json file
    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true // reload Gruntfile when it changes
        }
      },
      styles: {
        files: ['src/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      }
    },

    copy: {
      main: {
        files: [
          // 1. Copy all assets from 'assets/' to 'src/assets/',
          //    excluding the 'assets/css/' directory's contents.
          //    This will copy subdirectories like 'js/', 'images/', etc.
          {
            expand: true,
            cwd: 'assets/', // Source directory, relative to Gruntfile
            src: [
              '**/*',       // Select all files and folders
              '!css/**'     // Exclude everything within the 'css' subfolder
            ],
            dest: 'src/assets' // Destination directory
          },
          // 2. Copy '*.css' files from 'assets/css/' to 'src/styles/scss/',
          //    renaming them to '*.scss'.
          {
            expand: true,
            cwd: 'assets/css/', // Source directory for CSS files
            src: ['*.css'],     // Select all .css files directly in 'assets/css/'
                                // Use '**/*.css' if CSS files are in subdirectories of 'assets/css/'
                                // and need to be processed as well.
            dest: 'src/styles/scss/', // Destination for SCSS files
            rename: function(dest, src) {
              // dest parameter is the destination directory, e.g., 'public/assets/scss/'
              // src parameter is the source file name, e.g., 'styles.css'
              return dest + src.replace(/\.css$/, '.scss');
            }
          }
        ]
      }
    },
    clean: {
      public_assets: ['public/']
    },
    
    // If you need to clean the 'public/assets' directory before copying,
    // you can add the grunt-contrib-clean task:
    // clean: {
    //   public_assets: ['public/assets']
    // }
  });

  // Load Grunt plugins.
  // Make sure to install this plugin via npm: npm install grunt-contrib-copy --save-dev
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-clean');
  // If using grunt-contrib-clean, uncomment the following and install it:
  // grunt.loadNpmTasks('grunt-contrib-clean');

  // Register tasks.
  // The 'default' task runs when you simply type 'grunt' in the command line.
  // If using 'clean', you might want to run it before 'copy':
  // grunt.registerTask('default', ['clean:public_assets', 'copy:main']);
  grunt.registerTask('wrap-scss-content', 'Wraps SCSS file content with bundle-3ds-iawc-ad-evtolaam-interactive', function() {
    const done = this.async();


    // These modules (glob, fs) are assumed to be required at the top of the Gruntfile,
    // as they are used by the 'scope-css' task defined later without inline requires.
    // Example: const glob = require('glob'); const fs = require('fs');

    const files = glob.sync('./src/styles/scss/**/*.scss');
    //const files = ['./src/styles/scss/pages.scss'];

    if (files.length === 0) {
      grunt.log.warn('No SCSS files found in ./src/styles/scss/ to wrap.');
      done();
      return;
    }

    let processedCount = 0;
    let errorsEncountered = false;

    const allFilesProcessedCallback = () => {
      processedCount++;
      if (processedCount === files.length) {
        if (errorsEncountered) {
          done(new Error('One or more SCSS files failed to wrap. See logs for details.'));
        } else {
          grunt.log.ok(`All ${files.length} SCSS files in ./src/styles/scss/ processed for wrapping.`);
          done();
        }
      }
    };

    files.forEach(filePath => {
      fs.readFile(filePath, 'utf8', (readErr, content) => {
        if (readErr) {
          grunt.log.error(`Error reading file ${filePath}: ${readErr.message}`);
          errorsEncountered = true;
          allFilesProcessedCallback();
          return;
        }

        const trimmedContent = content.trim();

        if (trimmedContent === '') {
          grunt.log.writeln(`Skipping empty file: ${filePath}`);
          allFilesProcessedCallback();
          return;
        }

        // Check to prevent re-wrapping.
        // This checks if the content starts with the wrapper selector and an opening brace,
        // and also ends with a closing brace.
        if ((trimmedContent.startsWith(`${prefix} {`) || trimmedContent.startsWith(`${prefix}{`)) &&
            trimmedContent.endsWith('}')) {
          grunt.log.writeln(`File content suggests it is already wrapped, skipping: ${filePath}`);
          allFilesProcessedCallback();
          return;
        }

        // Wrap the trimmed content of the file.
        const wrappedContent = `${prefix} {\n${trimmedContent}\n}`;

        fs.writeFile(filePath, wrappedContent, 'utf8', writeErr => {
          if (writeErr) {
            grunt.log.error(`Error writing wrapped content to ${filePath}: ${writeErr.message}`);
            errorsEncountered = true;
          } else {
            grunt.log.ok(`Successfully wrapped ${filePath}`);
          }
          allFilesProcessedCallback();
        });
      });
    });
  });

  //TODO: add bundle-3ds-iawc-ad-evtolaam-interactive prefix to all scss files in the src/styles/scss directory
  grunt.registerTask('add-bundle-3ds-iawc-ad-evtolaam-interactive', 'Adds bundle-3ds-iawc-ad-evtolaam-interactive prefix to all SCSS files in the src/styles/scss directory', function() {
    const done = this.async();
    const prefix = 'bundle-3ds-iawc-ad-evtolaam-interactive';

    const scssFiles = glob.sync('src/styles/scss/*.scss');
    if (scssFiles.length === 0) {
      grunt.log.warn('No SCSS files found in src/styles/scss/ to add bundle-3ds-iawc-ad-evtolaam-interactive prefix to.');
      done();
      return;
    }
    
    let processedCount = 0;
    let errorsEncountered = false;

    const allFilesProcessedCallback = () => {
      processedCount++;
      if (processedCount === scssFiles.length) {
        if (errorsEncountered) {
          done(new Error('One or more SCSS files failed to process. See logs for details.'));
        } else {
          grunt.log.ok(`All ${scssFiles.length} SCSS files processed successfully.`);
          done();
        }
      }
    };

    scssFiles.forEach(filePath => { 
      fs.readFile(filePath, 'utf8', (readErr, content) => {
        if (readErr) {
          grunt.log.error(`Error reading file ${filePath}: ${readErr.message}`);
          errorsEncountered = true;
          allFilesProcessedCallback();
          return;
        }

        // Process the content to add prefix to all selectors
        const processedContent = content
          .split('\n')
          .map(line => {
            // Skip empty lines and comments
            if (!line.trim() || line.trim().startsWith('//')) {
              return line;
            }
            
            // Add prefix to selectors that start with html, body, or other root elements
            /*if (line.trim().match(/^(:root|\.|#)/)) {
              console.log(`${line} ${prefix}`);
              return `${prefix} ${line}`;
            }*/

            let newLine = line;

            // Add prefix to selectors that start with html, body, or other root elements
            //html,
            if (newLine.trim().match(/^(html,)/)) {
              newLine = newLine.replace(/^(html,)/, `html ${prefix},`);
            }
            //body,
            if (newLine.trim().match(/^(^.*body,)/)) {
              const regex = /^(^.*body,)/;
              const match = newLine.match(regex);
              if(match) {
                // remove endline comma
                const newLineWithoutComma = match[0].replace(/,$/, '');
                newLine = newLine.replace(newLineWithoutComma, `${newLineWithoutComma} ${prefix}`);
              }
            }
            //body[class*='scaled-'],
            if(newLine.trim().match(/^((^.*body(\[[^\]]+\])+,))/)) {
              const regex = /^(^.*body(\[[^\]]+\])+,)/;
              const match = newLine.match(regex);
              if(match) {
                // remove endline comma
                const newLineWithoutComma = match[0].replace(/,$/, '');
                newLine = newLine.replace(newLineWithoutComma, `${newLineWithoutComma} ${prefix}`);
              }
            }
            //body[class*='scaled-']{}
            if(newLine.trim().match(/^((^.*body(\[[^\]]+\])+{))/)) {
              const regex = /^(^.*body(\[[^\]]+\])+{)/;
              const match = newLine.match(regex);
              if(match) {
                // remove endline comma
                const newLineWithoutComma = match[0].replace(/{$/, '');
                newLine = newLine.replace(newLineWithoutComma, `${newLineWithoutComma} ${prefix}`);
              }
            }
            if(newLine.trim().match(/^.*body(\[[^\]]+\])+/)) {
              const regex = /^.*body(\[[^\]]+\])+/;
              const match = newLine.match(regex);
              if(match) {
                // remove endline comma
                const newLineWithoutComma = match[0].replace(/{$/, '');
                newLine = newLine.replace(newLineWithoutComma, `${newLineWithoutComma} ${prefix}`);
              }
            }
            //body.zoomed:not([class*='scaled-']) #container { position:absolute; }
            if(newLine.trim().match(/^body\\.[^\s{]+/)) {
              const regex = /^body\.[^\s{]+/;
              const match = newLine.match(regex);
              if(match) {
                // remove endline comma
                const newLineWithoutComma = match[0].replace(/{$/, '');
                newLine = newLine.replace(newLineWithoutComma, `${newLineWithoutComma} ${prefix}`);
              }
            }
            if(newLine.trim().match(/^html\.[^\s{]+/)) {
              const regex = /^html\.[^\s{]+/;
              const match = newLine.match(regex);
              if(match) {
                // remove endline comma
                const newLineWithoutComma = match[0].replace(/{$/, '');
                newLine = newLine.replace(newLineWithoutComma, `${newLineWithoutComma} ${prefix}`);
              }
            }
            if(newLine.trim().match(/^html\:[^\s{]+/)) {
              const regex = /^html\:[^\s{]+/;
              const match = newLine.match(regex);
              if(match) {
                // remove endline comma
                const newLineWithoutComma = match[0].replace(/{$/, '');
                newLine = newLine.replace(newLineWithoutComma, `${newLineWithoutComma} ${prefix}`);
              }
            }


            return newLine;
           
            
          })
          .join('\n');

        fs.writeFile(filePath, processedContent, 'utf8', writeErr => {
          if (writeErr) {
            grunt.log.error(`Error writing processed content to ${filePath}: ${writeErr.message}`);
            errorsEncountered = true;
          } else {
            grunt.log.ok(`Successfully processed ${filePath}`);
          }
          allFilesProcessedCallback();
        });
      });
    });
  });

  grunt.registerTask('swap-bundle-prefix', 'Swap bundle prefix to all SCSS files in the src/styles/scss directory', function() {
    const done = this.async();
    const prefix = 'bundle-3ds-iawc-ad-evtolaam-interactive';

    const cssFiles = glob.sync('public/assets/css/*.css');
    //const cssFiles = ['./public/assets/css/pages.css'];

    if (cssFiles.length === 0) {
      grunt.log.warn('No CSS files found in public/assets/css to swap bundle-3ds-iawc-ad-evtolaam-interactive prefix to.');
      done();
      return;
    }
    
    let processedCount = 0;
    let errorsEncountered = false;

    const allFilesProcessedCallback = () => {
      processedCount++;
      if (processedCount === cssFiles.length) {
        if (errorsEncountered) {
          done(new Error('One or more CSS files failed to process. See logs for details.'));
        } else {
          grunt.log.ok(`All ${cssFiles.length} CSS files processed successfully.`);
          done();
        }
      }
    };

    cssFiles.forEach(filePath => { 
      fs.readFile(filePath, 'utf8', (readErr, content) => {
        if (readErr) {
          grunt.log.error(`Error reading file ${filePath}: ${readErr.message}`);
          errorsEncountered = true;
          allFilesProcessedCallback();
          return;
        }

        // Process the content to add prefix to all selectors
        const processedContent = content
          .split('\n')
          .map(line => {
            // Skip empty lines and comments
            if (!line.trim() || line.trim().startsWith('//')) {
              return line;
            }

            let newLine = line;

            //remove bundle-3ds-iawc-ad-evtolaam-interactive from body
            newLine = newLine.replace(`${prefix} body`, 'body');

            //remove prefix generated by sass html, body related text 

            const rulesToReplacePrefix = [
                { regex: /^(.*html(\[[^\]]+\])+)/, charToStripSuffixRegex: /$/ },
                { regex: /^.*html\.[^\s]+/, charToStripSuffixRegex: /{$/ },
                { regex: /^.*html\:[^\s]+/, charToStripSuffixRegex: /{$/ },
                { regex: /^(.*body(\[[^\]]+\])+)/, charToStripSuffixRegex: /$/ },
                { regex: /^(.*body(\[[^\]]+\])+,)/, charToStripSuffixRegex: /,$/ },
                { regex: /^(.*body(\[[^\]]+\])+ {)/, charToStripSuffixRegex: /{$/ },
                { regex: /^.*body\.[^\s]+/, charToStripSuffixRegex: /{$/ },
                { regex: /^.*body\:[^\s]+/, charToStripSuffixRegex: /{$/ },
            ];

            const trimmedLine = newLine.trim();

            //only process lines containing "html" or "body" for general prefix removal
            const mainRegex = /(html|body)/;

            if(!trimmedLine.match(mainRegex)) {
              return newLine;
            }

            for (const rule of rulesToReplacePrefix) {
                const match = trimmedLine.match(rule.regex);

                if (match && match[0]) {
                    newLine = newLine.replaceAll(prefix, '');
                }
            }


            return newLine;
           
            
          })
          .map(line => {
            // Skip empty lines and comments
            if (!line.trim() || line.trim().startsWith('//')) {
              return line;
            }
            
            // Add prefix to selectors that start with html, body, or other root elements
            /*if (line.trim().match(/^(:root|\.|#)/)) {
              console.log(`${line} ${prefix}`);
              return `${prefix} ${line}`;
            }*/

            let newLine = line;

            // Add prefix to selectors that start with html, body, or other root elements
            //html,
            // Define the rules for modifying selectors.
            // These rules are applied in order, and only the first matching rule will be applied to a line.
            const rulesToAddPrefix = [
                // Matches 'html,'
                { regex: /^(.*body,)/g, charToStripSuffixRegex: /,$/ },
                { regex: /\bbody(\[[^\]]+\])+/g, charToStripSuffixRegex: /$/ },
                { regex: /body\.[^\s]+/g, charToStripSuffixRegex: /$/ },
                { regex: /(?!.*\bbody\b).*html\:[^\s]+/g, charToStripSuffixRegex: /$/ },
                { regex: /(?!.*\bbody\b).*html(\[[^\]]+\])+/g, charToStripSuffixRegex: /$/ },
                { regex: /(?!.*\bbody\b).html\.[^\s]+/g, charToStripSuffixRegex: /$/ },
            ];

            const trimmedLine = newLine.trim();

            for (const rule of rulesToAddPrefix) {
                const match = trimmedLine.match(rule.regex);

                if (match) {
                  
                    const matchedOriginalSelectorPortion = match[0]; // The part of the string that matched the rule's regex

                    let baseSelector = matchedOriginalSelectorPortion;
                    let suffix = '';

                    // Check if the matched portion ends with the character to strip (e.g., ',' or '{')
                    const suffixMatch = matchedOriginalSelectorPortion.match(rule.charToStripSuffixRegex);
                    if (suffixMatch && suffixMatch[0] && matchedOriginalSelectorPortion.endsWith(suffixMatch[0])) {
                        suffix = suffixMatch[0];
                        baseSelector = matchedOriginalSelectorPortion.substring(0, matchedOriginalSelectorPortion.length - suffix.length);
                    }
                    
                    // Remove one instance of the prefix from the base selector part, if it exists.
                    // This mimics the original `base.replace(prefix, '')` behavior.
                    let baseSelectorCleaned = baseSelector;
                    const prefixIndex = baseSelector.indexOf(prefix);
                    if (prefixIndex !== -1) {
                        baseSelectorCleaned = baseSelector.substring(0, prefixIndex) + baseSelector.substring(prefixIndex + prefix.length);
                    }

                    // Construct the new selector part with the prefix.
                    // Consistent with original: `${cleanedSelector} ${prefix}` which results in " ${prefix}" if cleanedSelector is empty.
                    const newBaseSelectorWithPrefix = baseSelectorCleaned + " " + prefix;
                    
                    const finalPrefixedSelectorPortion = newBaseSelectorWithPrefix + suffix;
                    
                    // Replace the originally matched portion in the original (untrimmed) newLine.
                    // String.prototype.replace(string, string) replaces only the first occurrence.

                    //unique array of match
                    const uniqueMatch = [...new Set(match)];
                    for(let i = 0; i < uniqueMatch.length; i++) {
                      newLine = newLine.replaceAll(uniqueMatch[i], finalPrefixedSelectorPortion);
                    }
                    
                }
            }


            return newLine;
          })
          .join('\n');

        fs.writeFile(filePath, processedContent, 'utf8', writeErr => {
          if (writeErr) {
            grunt.log.error(`Error writing processed content to ${filePath}: ${writeErr.message}`);
            errorsEncountered = true;
          } else {
            grunt.log.ok(`Successfully processed ${filePath}`);
          }
          allFilesProcessedCallback();
        });
      });
    });
  });


  grunt.config.merge({
    sass: {
      options: {
        implementation: require('sass'),
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/styles/scss',
          src: ['*.scss'],
          dest: 'src/assets/css',
          ext: '.css',
          rename: function(dest, src) {
            // Keep the exact same filename including dots, just change the extension
            return path.join(dest, src.replace(/\.scss$/, '.css'));
          }
        }]
      }
    }
  });

  // Load the grunt-sass plugin
  // Make sure to install this plugin via npm: npm install grunt-sass sass --save-dev
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register a new task to run the SASS compilation.
  // This task can then be added to the 'default' or 'build-assets' task arrays.
  // For example: grunt.registerTask('default', ['clean:public_assets', 'copy:main', 'wrap-scss-content', 'compileSass']);
  grunt.registerTask('compileSass', 'Compiles SCSS files to CSS using grunt-sass', ['sass:dist']);


  grunt.registerTask('build:copy-contents', ['copy:main', 'wrap-scss-content']);

  // You can also define a more specific task name if you prefer:
  grunt.registerTask('build:assets', ['compileSass', 'swap-bundle-prefix']);

};
