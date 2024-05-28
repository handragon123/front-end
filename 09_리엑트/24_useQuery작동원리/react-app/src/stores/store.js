import { create } from 'zustand';

// 상태객체 리턴하는 useStore훅 생성
const useStore = create((set) => ({
  // 전역상태
  bears: 0,
  increasePopulation: function () {
    set((state) => ({ bears: state.bears + 1 }));
  },
  // 기존 전역상태를 업데이트하지않으므로 콜백함수 필요없음
  removeAllBears: function () {
    set({ bears: 0 });
  },
}));

export default useStore;
