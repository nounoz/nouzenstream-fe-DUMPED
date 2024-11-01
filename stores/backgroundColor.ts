import { defineStore } from "#imports";

interface backgroundColor {
  pageColor: string;
}

export const useBackgroundColorStore = defineStore("BackgroundColor", {
  state: (): backgroundColor => ({
    pageColor: "bg-black",
  }),
  actions: {
    setPageColor(color: string) {
      this.pageColor = color;
    },
  },
});
