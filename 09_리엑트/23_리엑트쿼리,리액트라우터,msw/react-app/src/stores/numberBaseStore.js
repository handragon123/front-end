import { create } from 'zustand';

const useNumberBaseStore = create((set) => ({
  numberA: 0,
  numberB: 0,
  increaseNumberA: function () {
    set((state) => ({
      numberA: state.numberA + 1,
    }));
  },
  // inCreaseNumberB사용시 전달되는 인자를 NUM으로 받음
  increaseNumberB: function (num) {
    set((state) => ({
      numberB: state.numberB + num,
    }));
  },
}));

export default useNumberBaseStore;
