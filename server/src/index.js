const express = require('express');
const cors = require('cors')
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const connectDB = require('./config/database-config');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await connectDB();
    console.log("Db connected");
});
