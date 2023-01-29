# React with FARM Stack (FastAPI, React, MongoDB)

## Create react app

```
npx create-react-app . --template redux-typescript
```

## Set up

```
npm install react-router-dom@5.3.0 @types/react-router-dom@5.3.1
npm install react-query@3.39.0
```

### Install Tailwindcss

```
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Edit tailwinc.config.js like below.

```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
