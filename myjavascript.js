$(function(){
    $('.bcontent').addClass("hidden");
    alert("Welcome to the Amazing Store.");
    });


$(".tile").click(function (event){
    // this.childNodes.item(1).style.margin = '2px 30%';
    // this.childNodes.item(3).style.display = 'block';
    var change = $(this.childNodes.item(1));
    var self = $(this.childNodes.item(3));
    if(self.hasClass('hidden'))
    {
        self.removeClass('hidden').addClass('visible');
        change.css({'margin':"2px 30%","color":'pink'});
        $(this).css({'background-color':'#00008B'});
    }
    else{
        self.removeClass('visible').addClass('hidden');
        change.css({'margin':'20% 30%','color':'Black'})
        $(this).css({'background-color':'white'})

    }
})

// $('#mobiles').blur(function (event){
//     console.log(this);
// })