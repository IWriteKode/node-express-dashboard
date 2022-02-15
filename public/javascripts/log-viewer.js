const connection = new WebSocket("http://localhost:3000/");
const logWindow = document.querySelector("log-window");

connection.onopen = () => {
    connection.send("Hello From the Client");
}

connection.onmessage = (event)=> {
    logWindow.innerHTML = event.data;
}