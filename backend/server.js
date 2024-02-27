import express from 'express';
const app = express()

app.get('/',(req,res)  => {
    res.send("server is ready")
});
app.get('/api/jokes',(req,res) =>{
    const jokes = [
        {
            id:"1",
            title:" one ",
            content:" What do you call an ant who fights crime? A vigilANTe!"
        },
        {
            id:"2",
            title:" two ",
            content:"What does a storm cloud wear under his raincoat? Thunderwear."
        },
        {
            id:"3",
            title:" three",
            content:" What do kids play when their mom is using the phone? Bored games."
        },
        {
            id:"4",
            title:" four",
            content:"Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands."
        },
        {
            id:"5",
            title:"five",
            content:"nixe neixeWhat’s a cat’s favorite dessert? A bowl full of mice-cream."
        }

    ];
    res.send(jokes)
});
const port = process.env.PORT|| 3000;

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})