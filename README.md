# Template for next animation file
This is a template to be use as reference for next animation file

## Initialization
### Step 1
Copy assets into the development folder

### Step 2
Set environment variable .env
```.env
VITE_BASE_URL=<your-base-url>
VITE_PREFIX=<your-bundle-name>
```

### Step 3
Change css and js path in src/resources files

### Step 4
#### Installation
+ To copy contents from assets to public/src and rename css to scss
+ Wrap scss with bundle prefix
+ Compile scss file
+ Replace bundle name accordingly

```Grunt
npm run build:copy-contents
npm run build:assets
```
or
```Grunt
npm run build:all
```

### Step 5
Run dev environment
```
npm run dev
```

## Localization
Steps to do localization
### Step 1
Replace all sentences to be translated with ```msg('<sentence_to_be_translated')```
### Step 2
Extract messages to json format (```content.json```)
```nodejs
npm run extract:messages
```
### Step 3
Copy content.json to public/lang and rename to ```en.json``` or any desired language ```<lang>.json```

## Build Process
Initialize build process
### Step 1
Ensure all environment variables is set
```.env
.env.development
.env.preview
.env.production
.env.staging
```
### Step 2
Change build path for dev, preview, staging, production to the correct path in ```package.json```

### Step 3
To build all the environments respectively
```
npm run build:staging
npm run build:preview
npm run build
```