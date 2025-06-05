// Translation dictionary
let translations = {};

// Current language setting
let currentLanguage = 'en';

/**
 * Set the current language for translations
 * @param {string} lang - Language code (e.g., 'en', 'fr', 'es')
 */
async function setLanguage(lang) {
  currentLanguage = lang;
  await loadTranslationsFromJSON(`${import.meta.env.VITE_BASE_URL}/lang/${lang}.json`);
}

/**
 * Get the current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
  return currentLanguage;
}

/**
 * Get translation for a key
 * @param {string} key - Translation key
 * @returns {string} Translated text
 */
function msg(key) {
  if(!translations[key]) {
    console.log(`Missing translation for key: ${key}`);
    return key;
  }
  return translations[key];
}

/**
 * Get all available translations for a key
 * @param {string} key - Translation key
 * @returns {Object} Object containing translations for all languages
 */
function getAllTranslations(key) {
  const result = {};
  Object.keys(translations).forEach(lang => {
    if (translations[lang][key]) {
      result[lang] = translations[lang][key];
    }
  });
  return result;
}

/**
 * Fetch and load translations from a JSON file
 * @param {string} url - URL of the JSON file
 * @param {string} [lang='en'] - Language code to load translations for
 * @returns {Promise<void>} Promise that resolves when translations are loaded
 */
async function loadTranslationsFromJSON(url, lang = 'en') {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    translations = await response.json();
    console.log(translations);
    return translations;
  } catch (error) {
    console.error('Error loading translations:', error);
    throw error;
  }
}

function getLanguage() {
    // First check URL parameter
    const url = new URL(window.location.href);
    const urlLang = url.searchParams.get('lang');
    if (urlLang) {
        return urlLang;
    }
    
    // Then check HTML lang attribute
    const htmlLang = document.documentElement.lang;
    
    // Return the first valid language found
    return htmlLang || 'en';
}

// Expose functions to window object
window.i18n = {
  setLanguage,
  getLanguage,
  getCurrentLanguage,
  msg,
  getAllTranslations,
  loadTranslationsFromJSON
};

// Also export for module usage
export {
  setLanguage,
  getLanguage,
  getCurrentLanguage,
  msg,
  getAllTranslations,
  loadTranslationsFromJSON
};

// Example usage:
// setLanguage('fr');
// console.log(msg("Energy")); // Outputs: "Énergie"