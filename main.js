const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const preloadPath = path.join(__dirname, "preload.js");
  console.log("Preload script path:", preloadPath); // 打印路径进行验证

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: preloadPath,
      contextIsolation: false, // 禁用 contextIsolation
      nodeIntegration: true, // 启用 nodeIntegration
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
