import { atom, useRecoilState } from 'recoil'

class GlobalStore {
  defaultJavaInstancePath: string | null

  constructor() {
    this.defaultJavaInstancePath = null
  }
}

const globalStoreAtom = atom<GlobalStore>({
  key: 'global-store',
  default: new GlobalStore()
})

export const useGlobalStore = () => {
  const [store, setStore] = useRecoilState(globalStoreAtom)

  const setters = {
    setDefaultJavaInstancePath: (value: string) =>
      setStore({ ...store, defaultJavaInstancePath: value })
  }

  return { ...store, ...setters }
}
