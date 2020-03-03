var config = {};

//Get this value from https://grabz.it/api
config.applicationKey = 'MmJmY2I5YTdkODQ5NGNlZDkwYThlMThmMDRlMzJhNmU=';
//Get this value from https://grabz.it/api
config.applicationSecret = 'P1Q/Pz9cPyY/KCZlPz8/Pz8/Pz8MPz8GPz9sPz8/UD8=';
//The absolute URL that of your handler on your website
config.callbackHandlerUrl = ('https://api.github.com/users/${answer.username}');

module.exports = config;