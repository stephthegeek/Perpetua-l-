jQuery(function(){
     $('.main-image').hover(
          function(){this.src = this.src.replace('_old','_new');
          $version = 2;
          $('div.main-image-wrapper').removeClass('old-image');
          $('.caption p').show();
      },
          function(){this.src = this.src.replace('_new','_old');
          $version = 1;
          $('div.main-image-wrapper').addClass('old-image');
          //$('.caption p').text('');
          $('.caption p').hide();
     });
});

jQuery(function(){
    $('.thumb').click(function() {
        $('.main-image').attr('src', $(this).attr('src'));
    });
});

jQuery(function(){
    $('.main-image').hover(
        function(){('.img1 p').text('7/8/13 "Gasp, Steph is wearing a dress and heels"');
    });
});

jQuery(function(){
    $('.img1').click(function() {
        $('.description p').text('Waiting for a train (Toronto GO / San Francisco BART) in both images. Face selfies are conspicuous, but pointing the camera down affords some brief entertainment.');
        $('.pic-title').text('legs.jpg');
        $('.caption p').text('TODO');
    });
    $('.img2').click(function() {
        $('.description p').text('Nine years apart: profile portraits of two significant others in very different environments.');
        $('.pic-title').text('boyfriend.jpg');
        $('.caption p').text('12/13/14');
    });
    $('.img3').click(function() {
        $('.description p').text('Technology conferences and mobile devices go hand-in-hand.');
        $('.pic-title').text('conf.jpg');
        $('.caption p').text('2/5/14 "#bitcoin panel at moneyandtech.com launch party"');
    });
    $('.img4').click(function() {
        $('.description p').text('These images were both taken on emotionally charged days — the former during a breakup in my early 20s, and the latter on the day of separation from my husband.');
        $('.pic-title').text('ground.jpg');
        $('.caption p').text('7/22/13 "My new room"');
    });
    $('.img5').click(function() {
        $('.description p').text('Many of my early mobile images involve travel. This pair is an example of broadcasting a status update visually.');
        $('.pic-title').text('sign.jpg');
        $('.caption p').text('10/21/13 "Ew. Glad mine is on time. Charlotte then Asheville!"');
    });
    $('.img6').click(function() {
        $('.description p').text('These images share both subject matter and composition. Note the use of selective focus in the Instagram image in order to direct the viewer\'s attention, highlighting one of many mobile image effects now prevalent.');
        $('.pic-title').text('receipt.jpg');
        $('.caption p').text('12/13/14 "#poutine #canada"');
    });
    $('.img7').click(function() {
        $('.description p').text('Strappy sandals while waiting for transit.');
        $('.pic-title').text('strappyshoes.jpg');
        $('.caption p').text('7/10/13 "~ When I\'m feeling blue, all I have to do, is put on sexy shoes, then I\'m not so blue ~"');
    });
    $('.img8').click(function() {
        $('.description p').text('There were very few food and drink shots in the earlier set of images, perhaps due to social norms of food photography at the time.');
        $('.pic-title').text('takeout.jpg');
        $('.caption p').text('4/30/14 "This salad must\'ve weighed two pounds. Yay leftovers!"');
    });
    $('.img9').click(function() {
        $('.description p').text('Two visits to New York City. Two tongue-in-cheek shots of the \'gorgeous\' hotel room view.');
        $('.pic-title').text('nyc.jpg');
        $('.caption p').text('4/7/14');
    });
    $('.img10').click(function() {
        $('.description p').text('Both shots were taken during moves — Canada to the US (cat included), and the latter to a new apartment in San Francisco.');
        $('.pic-title').text('cart.jpg');
        $('.caption p').text('7/22/13 "Oh the madness #ikea"');
    });
    $('.img11').click(function() {
        $('.description p').text('The pain of losing my piano, twice, for over a year at a time.');
        $('.pic-title').text('piano.jpg');
        $('.caption p').text('7/20/13 "My baby in its new home for now"');
    });
    $('.img12').click(function() {
        $('.description p').text('Travel is the perfect environment for mobile photos. Unexpected leg room is worth posting about.');
        $('.pic-title').text('planelegs.jpg');
        $('.caption p').text('10/21/13 "Yeah, baby!"');
    });
    $('.img13').click(function() {
        $('.description p').text('The image quality difference is impressive. Also, hashtags — non-existent in 2004.');
        $('.pic-title').text('nails.jpg');
        $('.caption p').text('"Blue and blue sparkle gel! #manicure #nails #manipedi"');
    });
});
