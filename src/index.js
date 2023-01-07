const app = require("express")();
const {port} = require("../config.json");


app.listen(port,
    () => console.log(`api listening at ${port}`)
    )

app.get("/client/status",(req,res)=>{
    res.json({})
})