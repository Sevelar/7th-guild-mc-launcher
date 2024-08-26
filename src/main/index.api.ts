import { API } from '@shared/index.api'
import { BrowserWindow, WindowOpenHandlerResponse, app, dialog, ipcMain, shell } from 'electron'
import { access, constants } from 'fs/promises'
import { join } from 'path'

export class HandlerAPI {
  mainWindow: BrowserWindow

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow
    mainWindow.webContents.setWindowOpenHandler(({ url }) => this.openURLInExternalBrowser(url))
    ipcMain.handle(API.DETECT_JAVA_INSTALLATION, () => this.detectJavaInstallation())
    ipcMain.handle(API.LOCATE_JAVA_INSTALLATION, this.locateJavaInstallation)
    ipcMain.handle(API.GET_APP_PATH, this.getAppPath)
  }

  openURLInExternalBrowser = (url: string) => {
    shell.openExternal(url)
    return { action: 'deny' } as WindowOpenHandlerResponse
  }

  getAppPath = () => {
    return app.getAppPath()
  }

  detectJavaInstallation = async (path?: string) => {
    const getExecutablePath = () => {
      if (path) return join(path, 'bin/java.exe')
      else if (process.env.JAVA_HOME) return join(process.env.JAVA_HOME, 'bin/java.exe')
      else return null
    }

    try {
      const executablePath = getExecutablePath()
      if (!executablePath) return false
      await access(executablePath, constants.F_OK | constants.X_OK)
      return true
    } catch {
      return false
    }
  }

  locateJavaInstallation = async () => {
    const response = await dialog.showOpenDialog(this.mainWindow, { properties: ['openDirectory'] })
    if (response.canceled || response.filePaths.length === 0) return null

    const isValid = await this.detectJavaInstallation(response.filePaths[0])
    if (!isValid) return false
    return response.filePaths[0]
  }
}
