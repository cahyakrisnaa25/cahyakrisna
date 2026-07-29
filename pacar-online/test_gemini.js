async function testGemini() {
    const GEMINI_API_KEY = "AIzaSyCINmovE--9VQgzn-FW6VdRFqfiL3876hg";
    const promptText = "halo";
    const systemInstruction = `Kamu adalah "Caca".`;

    const chatHistory = [{ role: 'user', parts: [{ text: promptText }] }];

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            systemInstruction: {
                parts: [{ text: systemInstruction }]
            },
            contents: chatHistory
        })
    });

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
}
testGemini();
