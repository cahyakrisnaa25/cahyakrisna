async function testFreeAPI() {
    try {
        const response = await fetch('https://api.airforce/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: [{ role: 'user', content: 'halo' }],
                model: 'llama-3-70b-chat'
            })
        });
        const data = await response.text();
        console.log("api.airforce:", data.substring(0, 500));
    } catch (e) {
        console.error("api.airforce error:", e.message);
    }
}

testFreeAPI();
