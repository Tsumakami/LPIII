$('.muito-top').replaceWith(function(i, v){
  console.log("ALOOOOOOOOOOUUUUU");
    return $('<div/>', {
        style: 'background-image: url(' + this.src + ');' +
        'width:' + this.width + 'px;' +
        'height:' + this.height + 'px;' ,
        class: 'fakeImg'
    })
})
