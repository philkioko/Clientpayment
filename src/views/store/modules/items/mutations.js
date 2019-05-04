export const mutations = {
    
    STORE_ITEMS (state, useritems) {
        state.items = useritems
      },

      STORE_TOTALS(state, totals) {
          state.totals = totals
      },

      STORE_ITEMS_NUMBER(state, itemsNumber) {
          state.itemsNumber = itemsNumber
      }
}

export default mutations