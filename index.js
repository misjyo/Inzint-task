const express =require("express");
const app = express();

const port =3001;

app.get("/name/:name/age/:age",(req,res)=>{
  res.send({
    message:"Hello World",
    name:req.params.name,
    age:req.params.age
})
});

app.post("/alphabet",async(req,res)=>{
  const {alphabet , count} = req.query;

  let encrypt =  (alphabet,count) =>
{
    let result="";
    for (let i = 0; i < alphabet.length; i++)
    {
        let char = alphabet[i];
        if (char.toUpperCase(alphabet[i]))
        {
            let ch =  String.fromCharCode((char.charCodeAt(0) + count-65) % 26 + 65);
            result += ch;
        }
        else
        {
            let ch = String.fromCharCode((char.charCodeAt(0) + count-97) % 26 + 97);
            result += ch;
        }
    }
    return result;
}
let data= encrypt(alphabet,count)

res.send({status:200 , data})


})

app.listen(port,()=>{
  console.log("server connected")
})