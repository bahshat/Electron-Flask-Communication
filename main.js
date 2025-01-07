const { app, BrowserWindow } = require("electron");


const launchPythonServer = () => {
  const { spawn } = require('child_process');
  const pythonProcess = spawn('python', ['server.py']);
  console.log('Python server started');
  // Handle the output of the Python process
  pythonProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  })
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile("index.html");
  launchPythonServer();
};

app.whenReady().then(() => {
  createWindow();
});