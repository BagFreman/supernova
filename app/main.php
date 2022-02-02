<?php include 'header.php' ?>

<section class="form-online">
   <div class="form-online__wr">
      <div class="form-online__img ">
         <img class="d-none d-lg-block" src="img/form-online.jpg" alt="">
         <img class="" src="img/form-online-2.jpg" alt="">
      </div>

      <div class="container">
         <div class="row"></div>
         <div class="offset-lg-5 col-lg-7">
            <div class="form-online__wr-2">
               <div class="section-title">
                  Посмотрите как строится ваш катер <span class="blue">прямо сейчас!</span>
               </div>
            </div>
            <form class="form-online__form" action="">
               <div class="row no-gutters">
                  <div class="col-lg-4">
                     <input type="text" placeholder="Введите номер договора" class="input" required>
                  </div>
                  <div class="col-lg-4">
                     <input type="text" placeholder="Введите пароль" class="input" required>
                  </div>
                  <div class="col-lg-4">
                     <button class="btn" type="submit">смотреть трансляцию</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>

</section>

<?php include 'component/services.php' ?>
<?php include 'component/block-contact-form.php' ?>
<?php include 'component/block-contact.php' ?>
<?php include 'footer.php' ?>