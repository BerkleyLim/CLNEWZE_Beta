import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage = 
      typeof window !== 'undefined' ? window.sessionStorage : undefined


const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: sessionStorage, // configure which storage will be used to store the data
  converter: JSON // configure how values will be serialized/deserialized in storage
});

const InitState = {
  language : "ko"
}

export const languageState = atom({
  key: 'language',
  default: {...InitState},
  effects_UNSTABLE: [persistAtom]
});

