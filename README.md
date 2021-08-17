# Advanced JS Workshop

## How to prevent the browser from throwing CORS policy error
- create an empty directory in your C:\Users\\[your_username]
- add chrome.exe file location path to your environment path variables (C:\Program Files\Google\Chrome\Application - if you haven't changed the default installation location of your own chrome)
- run the following command in your cmd:
```bash
chrome --user-data-dir="C:\Users\[your_empty_directory]" --disable-web-security
```
- now you can open your index.html file in the new browser to be able to test ajax