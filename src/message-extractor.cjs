const fs = require('fs');
const path = require('path');

/**
 * Extracts messages from a file or directory
 * @param {string} sourcePath - Path to the source file or directory
 * @returns {Object} - Object containing extracted messages
 */
function extractMessages(sourcePath) {
    const messages = {};
    
    function processFile(filePath) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Regular expression to match message patterns
        // This can be customized based on your specific message format
        const messageRegex = /\${msg\(['"]([^'"]+)['"]\)}/g;
        let match;
        
        while ((match = messageRegex.exec(content)) !== null) {
            const message = match[1];
            messages[message] = message;
            //console.log(message)
            //const key = message.toLowerCase().replace(/\s+/g, '_');
            //messages[key] = message;
        }
    }
    
    function processDirectory(dirPath) {
        const items = fs.readdirSync(dirPath);
        
        items.forEach(item => {
            const fullPath = path.join(dirPath, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                processDirectory(fullPath);
            } else if (stat.isFile() && /\.(js|html|css)$/.test(item)) {
                processFile(fullPath);
            }
        });
    }
    
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
        processDirectory(sourcePath);
    } else {
        processFile(sourcePath);
    }
    
    return messages;
}

/**
 * Saves messages to a JSON file
 * @param {Object} messages - Object containing messages
 * @param {string} outputPath - Path where to save the JSON file
 */
function saveMessagesToJson(messages, outputPath) {
    try {
        const jsonString = JSON.stringify(messages, null, 2);
        fs.writeFileSync(outputPath, jsonString, 'utf8');
        console.log(`Messages saved successfully to: ${outputPath}`);
    } catch (error) {
        console.error('Error saving messages to JSON:', error);
        throw error;
    }
}

// Main function
function main() {
    try {
        const sourcePath = process.argv[2] || '.';
        const outputPath = process.argv[3] || 'content.json';
        
        console.log(`Extracting messages from: ${sourcePath}`);
        const messages = extractMessages(sourcePath);
        
        console.log(`Found ${Object.keys(messages).length} messages`);
        saveMessagesToJson(messages, outputPath);
    } catch (error) {
        console.error('Error in main process:', error);
        process.exit(1);
    }
}

// Run the script if executed directly
if (require.main === module) {
    main();
}

module.exports = {
    extractMessages,
    saveMessagesToJson
};