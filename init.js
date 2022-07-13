const concurrently = require("concurrently");

concurrently(['ng serve', 'electron .']);