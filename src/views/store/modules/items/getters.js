export const getters = {
  UserItems: state =>state.items,
  ItemsTotal: state =>state.totals,
  ItemsInCart: state => state.itemsNumber
}
export default getters