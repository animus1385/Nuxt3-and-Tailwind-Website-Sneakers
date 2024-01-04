export const useStore = defineStore("store", {
  state: () => ({
    cartModal: false,
    search: "",
    orderBy: {},
    items: [],
    obj: {},
  }),
  actions: {
    async getItems() {
      const data = await useFetch("https://604781a0efa572c1.mokky.dev/items", {
        transform: (elems) => {
          return elems.map((e) => {
            e.isFavorited = false;
            e.isAdded = false;
            return e;
          });
        },
      });
      this.items = data.data.value;
      return data;
    },
    async getFavorites() {
      const query = {
        sortBy: this.orderBy.name,
      };
      if (this.search) {
        query.title = `*${this.search}*`;
      }
      const data = await useFetch("https://dd38c3eaa419c084.mokky.dev/favorites", {
        query,
        transform: (elems) => {
          return this.items.map((e) => {
            const favorite = elems.find((favorite) => favorite.parentId == e.id);

            if (!favorite) {
              return e;
            } else {
              return {
                ...e,
                isFavorited: true,
                favoriteId: favorite.id,
              };
            }
          });
        },
      });
      return data;
    },
    async auth() {
      const data = await useFetch("https://dd38c3eaa419c084.mokky.dev/auth", {
        method: 'POST',
        body: {
          // email: ''
          // passowrd:''
        }
      });
    },
  },
});
