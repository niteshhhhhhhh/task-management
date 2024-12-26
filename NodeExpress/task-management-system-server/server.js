import mongoose from 'mongoose';

import app from './app.js';

const PORT = 8080;
const database_URL = "mongodb+srv://np3234:thisismypassword@cluster0.cfaxn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
mongoose.connect(database_URL)
.then(() => console.log("Database Connected Successfully"))
.catch(error => console.log("Error connecting to database: "+ error));      






