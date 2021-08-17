# Advanced JS Workshop

## Initialize the project
Consider these steps after cloning the project:
- first of all, make sure you have node installed by running the following command:
```bash
  node -v
```
if you get back v[version_number], so you have it installed, download Node.js installer for your OS through this [link](https://nodejs.org/en/download/):
- Then, you should restore your node modules by running the following command in your cmd:
```bash
  npm install
```
Now, you can run your JS scripts by running the following command:
```bash
  node [file_name].js
```

## How to prevent the browser from throwing CORS policy error
- create an empty directory in your C:\Users\\[your_username]
- add chrome.exe file location path to your environment path variables (C:\Program Files\Google\Chrome\Application - if you haven't changed the default installation location of your own chrome)
- run the following command in your cmd:
```bash
  chrome --user-data-dir="C:\Users\[your_username]\[your_empty_directory]" --disable-web-security
```
- now you can open your index.html file in the new browser to be able to test ajax