# synergy

Created homepage

# Typescript and Parcel setup - IMPORTANT COMMANDS

This project uses TypeScript with Parcel for a simple and efficient development workflow.

## Setting up API Server

1. Open terminal (in vscode)
2. Make sure you are inside "server" directory
3. Run: npm install
4. Run: node app.js
5. API server is up and running

## Getting Started With Typescript

### 1. Initialize npm Project:

```bash
npm init -y
```

### 2. Disable strict SSL (if needed):

```bash
npm config set strict-ssl false
```

### 3. Install Parcel and TypeScript:

```bash
npm i parcel typescript --save-dev
```

### 4. Install project dependencies::

```bash
npm i
```

### 5. Initialize TypeScript configuration:

```bash
npx tsc --init
```

### 6. Create a src folder and add TypeScript files:

- Example TypeScript file: src/index.ts

### 7. create html file and link the .ts file using script tag.(No more transpilation needed manually, Parcel takes care of it)

### 8. Update package.json with the start script:

- "start": "(npx parcel ./file_name.html & npx parcel watch ./file_name.html)" to package.json

### 9. Remove the "main": "index.js" line from package.json.

### 10. Run the project using Parcel:

```bash
npm start
```
