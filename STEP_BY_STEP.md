# Step by step

1. Create the folder
2. npm init
3. npm install --save-dev qunit and follow the https://qunitjs.com/intro/
4. npm install browser-sync (for windows, it does have some problems with libs: https://browsersync.io/docs)
5. browsersync init to create the config file and add the correct configurations.
   1. browser-sync start --server --files '.'  
6. add a npm start script with the command to run browser-sync with the config file
