"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const button = document.getElementById('submission-button');
const userInput = document.getElementById('user-input');
const responseOutput = document.getElementById('response');
function sendInput() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!userInput || !responseOutput) {
            console.error('Required DOM elements are missing.');
            return;
        }
        const inputText = userInput.value.trim();
        if (!inputText) {
            responseOutput.textContent = 'Input cannot be empty.';
            return;
        }
        try {
            const response = yield fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer $OPENAI_API_KEY'
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: inputText }]
                })
            });
            if (!response.ok) {
                const errorText = yield response.text();
                throw new Error(`Error: ${response.status} - ${errorText}`);
            }
            const data = yield response.json();
            if (data.choices && data.choices.length > 0 && data.choices[0].message) {
                responseOutput.textContent = data.choices[0].message.content.trim();
            }
            else {
                throw new Error('Unexpected response structure');
            }
        }
        catch (error) {
            if (error instanceof Error) {
                responseOutput.textContent = `Error: ${error.message}`;
            }
            else {
                responseOutput.textContent = 'An unknown error occurred';
            }
        }
    });
}
if (button) {
    button.addEventListener('click', sendInput);
}
else {
    console.error('Button element not found.');
}
