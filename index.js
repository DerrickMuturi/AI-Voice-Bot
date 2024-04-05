import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port  = 4000;


app.use(express.static(join(__dirname, '/public')));


app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'views', "index.html"));
});

app.listen(port, ()=> {
    console.log("Server is running on port: ", port);
})