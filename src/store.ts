import { create } from "zustand";

interface UIState {
  bgColor: string;
  buttonColor: string;
  setBgColor: (color: string) => void;
  setButtonColor: (color: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  bgColor: "bg-[#8dd3f7]",
  buttonColor: "bg-[#56B3E4]",
  setBgColor: (color) => set({ bgColor: color }),
  setButtonColor: (color) => set({ buttonColor: color }),
}));