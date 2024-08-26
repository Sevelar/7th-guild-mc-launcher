import { ElectronAPI } from '@electron-toolkit/preload'
import { PreloadAPI } from './index.api'

declare global {
  interface Window {
    electron: ElectronAPI
    api: PreloadAPI
  }
}
