# AI-Voice-Bot
This app will listen to the user's voice and reply with a synthetic voice

# STEPS TAKEN:
01. Use the web speech api's "SpeechRecogniton" interface to listen to the user's voice.
02. Send the user's message to a commercial natural-language-provessing API as a text string.
03. Once API.AI returns the response text back, use the "SpeechSynthesis" interface to give it a synthetic voice.

![image](https://github.com/DerrickMuturi/AI-Voice-Bot/assets/165120766/413cc170-a509-47c4-92a6-a4a546183ee5)

 # PREREQUISITES
I used Node.js to create it

# File structure
.
├── index.js
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
└── views
    └── index.html
