var basket = {
  totalPrice: 0,
  contents:[], 
  addItem: function( item ){
    this.totalPrice += item.price;
    this.contents.push(item);
  },
  removeItem: function( i ){
    this.contents.splice( i, 1 );
  }
}

module.exports = basket;