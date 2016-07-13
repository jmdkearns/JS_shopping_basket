var assert = require( 'chai' ).assert;
var basket = require( '../basket' );
var item = require( '../item' );

describe( 'Basket', function(){

  it( 'should have starting price of 0', function(){
    assert.equal( 0, basket.totalPrice )
  })

  it( 'should have starting contents of 0', function(){
    assert.equal( 0, basket.contents )
  })

  it( 'add item to basket and price to total price', function(){
    basket.addItem( item )
    assert.equal( 5, basket.totalPrice )
    assert.equal( 1, basket.contents.length )
  })

  it( 'remove item from basket by index', function(){
    basket.addItem( item )
    console.log(basket.contents)
    basket.removeItem( 0 )
    assert.equal( 0, basket.contents.length )
  })

  // it( '10% discount if total price is greater than 20 then', function(){
  //   basket.addItem( item )
  //   assert.equal( )
  // })

})