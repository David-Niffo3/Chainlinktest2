@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    background-color: #C7DDF5;
    margin: 0;
    padding: 0;
    color: #336799;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

#scoreBoard {
    background-color: #336799;
    color: #fff;
    padding: 10px 0;
}

.container {
    margin-top: 20px;
    background: #9ACEFF;
    padding: 20px;
    width: 80%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    text-align: center;
    flex-grow: 1;
}

.hidden {
    display: none;
}

h1 {
    font-size: 28px;
    font-weight: 600;
    text-transform: uppercase;
    color: #336799;
}

p {
    font-size: 18px;
    margin: 10px 0;
}

#inputContainer {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin: 20px 0;
}

.letter-box {
    width: 40px;
    height: 40px;
    font-size: 24px;
    text-align: center;
    border: 2px solid #336799;
    background-color: #669ACC;
    color: #336799;
    font-weight: bold;
    border-radius: 5px;
    text-transform: uppercase;
}

/* 🎁 Stijl voor hintletters (vergrendeld) */
.hint-letter {
    background-color: #555; /* Donkergrijze achtergrond */
    color: white; /* Witte tekst */
    font-weight: bold;
    border: 2px solid #444; /* Donkerdere rand */
    cursor: not-allowed; /* Verandert de cursor zodat duidelijk is dat het niet bewerkt kan worden */
}

/* Knopstijl */
button {
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #9ACEFF;
    color: #336799;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #669ACC;
}

#feedback {
    font-size: 22px;
    font-weight: bold;
    margin-top: 15px;
    color: #336799;
}

/* 🎉 Animatie voor correcte antwoorden */
.correct {
    animation: correctAnim 0.5s ease-in-out;
}

@keyframes correctAnim {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

/* ❌ Animatie voor foute antwoorden */
.wrong {
    animation: shake 0.3s ease-in-out;
}

@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}

/* Info-bord onderaan */
.info-board {
    background: #9ACEFF;
    color: #336799;
    padding: 15px;
    margin: 20px auto;
    width: 80%;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    position: relative;
    bottom: 0;
}

.info-board h2 {
    font-size: 20px;
    font-weight: bold;
}

.info-board p {
    font-size: 16px;
    line-height: 1.5;
}
