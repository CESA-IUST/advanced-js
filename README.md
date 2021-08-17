# Advanced JS Workshop

## Initialize the project
Consider these steps after cloning the project:
- First of all, make sure you have node installed on your system by running the following command in your terminal:
```bash
  node -v
```
Getting v[xx].[xx].[xx] as output means it's installed, otherwise download Node.js installer for your OS through this [link](https://nodejs.org/en/download/).
- Then, you should install your node modules by running the following command in your cmd:
```bash
  npm install
```
That's it, now, you can run your JS scripts by running the following command:
```bash
  node [file_name].js
```

## How to handle browser CORS policy error
- Create an empty directory in your C:\Users\\[your_username]
- Add chrome.exe file location path to your environment path variables (C:\Program Files\Google\Chrome\Application - if you haven't changed the default installation location of your own chrome)
- Run the following command in your cmd:
```bash
  chrome --user-data-dir="C:\Users\[your_username]\[your_empty_directory]" --disable-web-security
```
- Now, you can open your index.html file in the new browser to be able to test ajax