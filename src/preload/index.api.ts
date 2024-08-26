import { API } from '@shared/index.api'
import { ipcRenderer } from 'electron'

export class PreloadAPI {
  detectJavaInstallation = (): Promise<boolean> => ipcRenderer.invoke(API.DETECT_JAVA_INSTALLATION)
  locateJavaInstallation = (): Promise<string | false> =>
    ipcRenderer.invoke(API.LOCATE_JAVA_INSTALLATION)
  getAppPath = (): Promise<string> => ipcRenderer.invoke(API.GET_APP_PATH)
}
