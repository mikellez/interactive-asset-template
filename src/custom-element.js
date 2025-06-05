import { html, css, LitElement, unsafeCSS } from 'lit';
import { JSresources } from './resources/js-resources.js';
import { CSSresources } from './resources/css-resources.js';
import { setLanguage, getLanguage, msg } from './components/i18n.js';

//import './resources/index.css';

// Constants
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Add global ds_event function that will be used as fallback
window.ds_event = window.ds_event || function(target, action, data) {
    console.log('Event tracking not available:', { target, action, data });
};

export class CustomElement extends LitElement {
    static properties = {
        message: {},
        isInitialized: { type: Boolean },
        isLoadInteractive: { type: Boolean },
        template: { type: Object }
    }

    constructor() {
        super();
        this.isInitialized = false;
        this.isLoadInteractive = false;
        this.template = null;
        console.log('Custom Element: Constructor');
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.initializeApp();
    }

    async initializeApp() {
        try {
            // Set initial language from URL parameter or fallback
            const language = getLanguage();
            await setLanguage(language);

            // Create and append preload stylesheet
            await this.loadCSSResources();
            //const preloadStyle = this.createPreloadStylesheet();
            //document.head.appendChild(preloadStyle);

            // Create CTA container
            const ctaDiv = this.createCtaContainer();
            this.appendChild(ctaDiv);

            // Set up button text and event listener
            this.setupLaunchButton();

            this.isInitialized = true;
        } catch (error) {
            console.error('Error initializing application:', error);
        }
    }

    createPreloadStylesheet() {
        const preloadStyle = document.createElement('link');
        preloadStyle.id = 'preloadStyle';
        preloadStyle.rel = 'stylesheet';
        preloadStyle.href = BASE_URL + '/assets/css/preload.css' + '?v=' + this.randomHash();
        return preloadStyle;
    }

    createCtaContainer() {
        const ctaDiv = document.createElement('div');
        ctaDiv.setAttribute('id', 'wcsplash');
        ctaDiv.innerHTML = `
            <div id="intro-container">
                <div id="intro-text">
                    <h2>${msg('Unlock the Right Combination')}</h2>
                    <p>${msg('Here\'s how you can deliver the best results in eVTOL aircraft development.')}</p>
                </div>
                <button id="launchiabtn">${msg('Crack the code')}</button>
            </div>
        `;
        return ctaDiv;
    }

    setupLaunchButton() {
        const launchButton = this.querySelector('#launchiabtn');
        if (launchButton) {
            launchButton.addEventListener('click', () => this.loadInteractiveAsset());
        }
    }

    async loadInteractiveAsset() {
        try {
            // Remove the CTA container
            const ctaDiv = this.querySelector('#wcsplash');
            if (ctaDiv) {
                ctaDiv.remove();
            }
            // Load template dynamically
            const { template } = await import('./templates/template.js');
            this.template = template;

            // Load CSS and JS resources
            await this.loadJSResources();

            // Set the flag to show interactive content
            this.isLoadInteractive = true;
            
            // Force a re-render to update translations
            this.requestUpdate();
            
            // Track the event if ds_event is available
            const buttonText = this.querySelector('#launchiabtn')?.innerHTML || '';
            if (typeof window.ds_event === 'function') {
                window.ds_event('this', 'clic', {
                    event: 'clic',
                    event_category: 'Navigation',
                    event_action: 'iframe_menu',
                    event_name: buttonText
                });
            }
        } catch (error) {
            console.error('Error loading interactive asset:', error);
        }
    }

    randomHash() {
        return Math.random().toString(36).substring(2, 8);
    }

    removeCSS(href) {
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        links.forEach(link => {
            if (link.href.includes(href)) {
                link.parentNode.removeChild(link);
            }
        });
    }

    async loadCSSResources() {
        CSSresources.forEach(async resource => {
            const link = document.createElement('link');
            link.href = `${resource.src}`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        });
    }

    async loadJSResources() {
        this._scriptPromises = this._scriptPromises || new Map();

        const loadScriptExternally = (resource) => {
            if (this._scriptPromises.has(resource.src)) {
                return this._scriptPromises.get(resource.src);
            }

            const promise = new Promise(async (resolve, reject) => {
                const script = document.createElement('script');
                script.src = `${resource.src}`;
                script.type = 'text/javascript';

                script.onload = () => {
                    console.log(`Custom Element: Successfully loaded external script: ${BASE_URL}/${resource.src}`);
                    resolve(resource);
                };
                script.onerror = () => {
                    const errorMsg = `Custom Element: Error loading external script: ${resource.src}`;
                    console.error(errorMsg);
                    reject(new Error(errorMsg));
                };
                document.head.appendChild(script);
            });

            this._scriptPromises.set(`${BASE_URL}/${resource.src}`, promise);
            return promise;
        };

        try {
            for (const resource of JSresources) {
                await loadScriptExternally(resource);
            }
            
            console.log('Custom Element: All external JS resources processed.');

        } catch (error) {
            console.error('Custom Element: Critical error during external script loading sequence:', error);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    createRenderRoot() {
        console.log('Custom Element: Create render root');
        return this;
    }

    render() {
        console.log('Custom Element: Render');
        return this.isLoadInteractive && this.template ? html`${this.template}` : html``;
    }
}

customElements.define('bundle-3ds-iawc-ad-evtolaam-interactive', CustomElement);