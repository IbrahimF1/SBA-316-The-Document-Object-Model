body {
    background-color: rgb(33, 34, 100);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.hidden {
    display: none;
}

main {
    background-color: rgba(20, 26, 37, 0.614);
    padding: 2rem;
    border-radius: 0.8rem;
    box-shadow: 0 0 10rem;
    text-align: center;
    height: 60vh;
    width: min(25rem, 90%);
    z-index: 1;
    border-width: 0.1rem;
    border-style: solid;
    color: white;
}

button {
    background-color: rgba(44, 34, 71, 0.893);
    border-style: solid;
    border-color: rgb(187, 187, 187);
    color: white;
    border-radius: 1rem;
    padding: 0.35rem;
}

button:hover {
    transform: translateY(-1px);
}

button:active {
    transform: translateY(0);
}

#fate-btn {
    background-color: #6c53e1;
    font-weight: bold;
    border-color: rgb(0, 0, 0);
    border-style: solid;
    border-width: 0.2rem;
    border-radius: 0.4rem;
}

#fate-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

#fate-btn:hover {
    border-color: rgb(50, 81, 220);
    background-color: #8281e9;
}

.correct {
    background-color: green;
    color: white;
}

.correct-border {
    border-color: green;
    box-shadow: 0 0 10rem green;
}

.wrong {
    background-color: red;
    color: white;
}

.wrong-border {
    border-color: red;
    box-shadow: 0 0 10rem red;
}

.scores {
    text-align: left;
}

#answer-container {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.how-to-play {
    text-align: left;
    font-size: small;
}


/* Background */

#up {
    position: fixed;
    height: 8000px;
    width: 8000px;
    border-radius: 50%;
    background-image: linear-gradient(to right, rgb(5, 172, 75), rgb(10, 114, 199));
    filter: blur(80px);
    animation: down 40s infinite;
}

#down {
    position: fixed;
    right: 0;
    height: 5000px;
    width: 5000px;
    border-radius: 50%;
    background-image: linear-gradient(to right, rgba(172, 164, 5, 0.807), rgb(199, 45, 10));
    filter: blur(80px);
    animation: up 50s infinite;
}

#left {
    position: fixed;
    right: 0;
    height: 2000px;
    width: 2000px;
    border-radius: 50%;
    background-image: linear-gradient(to right, rgba(94, 5, 172, 0.539), rgba(10, 113, 197, 0.282));
    filter: blur(80px);
    animation: left 40s infinite;
}

#right {
    position: fixed;
    right: 0;
    height: 500px;
    width: 500px;
    border-radius: 50%;
    background-image: linear-gradient(to right, rgba(7, 115, 30, rgba(151, 64, 5, 0.698), 0.698));
    filter: blur(80px);
    animation: right 60s infinite;
}

@keyframes down {

    0%,
    100% {
        top: -100px;
    }

    70% {
        top: 700px;
    }
}

@keyframes up {

    0%,
    100% {
        bottom: -70px;
    }

    70% {
        bottom: 500px;
    }
}

@keyframes left {

    0%,
    100% {
        left: -100px;
    }

    70% {
        left: 1300px;
    }
}

@keyframes right {

    0%,
    100% {
        right: -100px;
    }

    70% {
        right: 1100px;
    }
}
