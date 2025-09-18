require("dotenv").config();
const OpenAI = require("openai");
const readLine = require("readline");


const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "yo:",
});

console.log("chat iniciado escribe tu mensaje");
rl.prompt(); // Esperando a mi mensaje

rl.on("line", async (input)=> { // Escucha mis mensajes  y los manda al modelo de IA que asigne.
    try {
        const respuesta = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{role: "user", content: input}],
    });
    console.log("ChatGpt:", respuesta.choices[0].message.content, "\n" ); // Respuesta que me da chatgpt
    } catch (err) {
        console.error("Error",err) // Si sale mal algo, que me arroje el error
    }
    rl.prompt(); // puedo seguir mandar mensajes, después que chatgpt me responda.
});


    
    
