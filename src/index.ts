const form = document.getElementById('inputForm') as HTMLFormElement;
const userInput = document.getElementById('userInput') as HTMLInputElement;
const responseOutput = document.getElementById('responseOutput') as HTMLElement;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const inputText = userInput.value;

    const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer $OPENAI_API_KEY`
        },
        body: JSON.stringify({
            prompt: inputText,
            max_tokens: 150
        })
    });

    const data = await response.json();
    responseOutput.textContent = data.choices[0].text.trim();
});

