import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage = 
      typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: sessionStorage, // configure which storage will be used to store the data
  converter: JSON // configure how values will be serialized/deserialized in storage
});

export const sheetMusicState = atom({
  key: 'sheetMusic',
  default: [],
  effects_UNSTABLE: [persistAtom]
});

export const sheetMusicModalDataState = atom({
  key: 'sheetMusicModalData',
  default: {}
})

export const sheetMusicPagingNationState = atom({
  key: 'sheetMusicPagingNation',
  default: 1
});

export const sheetMusicModalIsOpenState = atom({
  key: 'sheetMusicModalIsOpen',
  default: false
});

