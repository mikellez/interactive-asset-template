import { defineConfig } from 'vite';
import topLevelAwait from "vite-plugin-top-level-await";
import json from '@rollup/plugin-json';

function randomHash() {
  return Math.random().toString(36).substring(2, 8)
}

export default defineConfig({
  base: './',
  plugins: [
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
    json()
  ],
  build: {
    /*lib: {
      entry: 'src/custom-element.js', 
      name: 'evtolaamInteractive',   
      formats: ['umd'],    
    },*/
    rollupOptions: {
      output: {
        entryFileNames: (chunkInfo) => {
          return `assets/[name]-${randomHash()}.js`;
        }
      }
    }
  }
  /*build: {
    manifest: true,
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        customEl: 'src/components/custom-element.js',
        i18n: 'src/components/i18n.js'
      },
      output: {
        entryFileNames: (chunkInfo) => {
           return `components/[name]-${randomHash()}.js`;
          return chunkInfo.name === 'i18n' 
            ? `[name]-${randomHash()}.js`
            : `components/[name]-${randomHash()}.js`;
        }
      }
    }
  }*/
})