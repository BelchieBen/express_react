const express = require('express'); 
const path = require('path');

const PORT = process.env.POST || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.get("/api", (req,res)=> {
    res.json({message: "Hello from server"});
})

app.get('*', (req,res)=> {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, ()=> {
    console.log('listening on port ${PORT}');
})

