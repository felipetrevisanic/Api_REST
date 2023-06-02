import  express  from "express";
import db from "./config/dbConnect.js";
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'erro de conexão'))
db.once("open", ()=>{
    console.log('conexão com o banco feita com sucesso')
})

const app = express();
//necessita que use o app.use para que seja reconhecido o modelo json
app.use(express.json()) 
routes(app);

export default app;