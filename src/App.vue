<script setup>
    const attendants = [
      {
        app: 'whatsapp',
        label: 'Hubungi',
        name: 'Customer Service',
        number: '6281946542828',
        avatar: {
          src: 'http://mill-cloud.id/storage/img/man.png'
        }
      }
    ]

    function hideMenu(){
      var element = document.getElementById("nav-offcanvas");
      // element[0].style.display = "none"
      element.setAttribute("style","display:none");
      element.classList.remove("show");

      var element2 = document.getElementsByClassName("offcanvas-backdrop");
      console.log(element2);
      // element2[0].style.display = "none"
      // element2.remove()
      // while(element2.length > 0){
          element2[0].parentNode.removeChild(element2[0]);
      // }

      document.getElementsByTagName("body")[0].style.overflow = "auto"

      // document.getElementsByClassName("navbar2")[0].style.display = "none";
      
    }

</script>
<template>

  <BNavbar class="color-tone navbar1" v-b-color-mode="'dark'" variant="primary">
        <BNavbarBrand tag="h1" class="mb-0" href="/"><img src="../src/assets/img/logo.png" alt="" width="120"></BNavbarBrand>
        <BNavbarNav class="navbar1-item">
            <BNavItem href="/#aboutus">Tentang Kami</BNavItem>
            <BNavItem href="/#artikel">Artikel</BNavItem>
            <BNavItem href="/#transformasicloud">Transformasi Cloud</BNavItem>
            <BNavItem href="/#petasolusi">Peta Solusi</BNavItem>
            <BNavItem href="/#manfaatbisniserp">Manfaat Bisnis ERP</BNavItem>
            <BNavItem href="/#manfaatteknologicloud">Manfaat Teknologi Cloud</BNavItem>
            <BNavItem href="/#kontakkami">Kontak Kami</BNavItem>
        </BNavbarNav>
    </BNavbar>
    <BNavbar class="color-tone navbar2" v-b-color-mode="'dark'" :toggleable="true" variant="primary" :auto-close="'outside'">
        <BNavbarBrand tag="h1" class="mb-0" href="/"><img src="../src/assets/img/logo.png" alt="" width="120"></BNavbarBrand>
        <BNavbarToggle target="nav-offcanvas" />
        <BOffcanvas id="nav-offcanvas" placement="end" is-nav>
            <BNavbarNav>
                <BNavItem @click="hideMenu()" href="/#aboutus">Tentang Kami</BNavItem>
                <BNavItem @click="hideMenu()" href="/#artikel">Artikel</BNavItem>
                <BNavItem @click="hideMenu()" href="/#transformasicloud">Transformasi Cloud</BNavItem>
                <BNavItem @click="hideMenu()" href="/#petasolusi">Peta Solusi</BNavItem>
                <BNavItem @click="hideMenu()" href="/#manfaatbisniserp">Manfaat Bisnis ERP</BNavItem>
                <BNavItem @click="hideMenu()" href="/#manfaatteknologicloud">Manfaat Teknologi Cloud</BNavItem>
                <BNavItem @click="hideMenu()" href="/#kontakkami">Kontak Kami</BNavItem>
            </BNavbarNav>
        </BOffcanvas>
    </BNavbar>

  <Suspense>
    <RouterView />
  </Suspense>

  <BContainer class="bv-example-row color-tone footer" fluid='xxl' style="padding: 50px 100px 20px 100px;">
        <BRow style="margin-bottom: 30px;">
            <BCol md="6" style="color: white;">
                <div>
                    <div class="title-container">
                        <span class="title">PT Millenia Global Informatika</span><br><br>
                    </div>
                    <BRow>
                        <BCol cols="1">
                            <span><img src="../src/assets/img/address.png"></span>
                        </BCol>
                        <BCol cols="7" style="font-size: 13px;">
                            <span>Address : </span><br>
                            <span>Kirana Two Office Tower. Jl. Boulevard Timur no. 88. Jakarta 14240</span><br><br>
                            <span>Operation Office : Jl. Kelapa Puan Timur VII, NB7 no.14, Kelapa Gading, Jakarta 14250</span>
                        </BCol>
                    </BRow>
                    <BRow class="top-10">
                        <BCol cols="1">
                            <span><img src="../src/assets/img/phone.png"></span>
                        </BCol>
                        <BCol cols="5" style="font-size: 13px;">
                            <span>+62-21-4532828</span>
                        </BCol>
                    </BRow>
                    <BRow class="top-10">
                        <BCol cols="1">
                            <span><img src="../src/assets/img/mail.png"></span>
                        </BCol>
                        <BCol cols="5" style="font-size: 13px;">
                            <span>contact@mill-cloud.id</span>
                        </BCol>
                    </BRow>
                    <BRow class="top-10">
                        <BCol cols="1">
                            <span><img src="../src/assets/img/clock.png"></span>
                        </BCol>
                        <BCol cols="5" style="font-size: 13px;">
                            <span>Monday – Friday | 9:00am – 6:00pm</span>
                        </BCol>
                    </BRow>
                    
                </div>
            </BCol>
            <BCol style="text-align: right;">
                <div class="footer-right">
                    <div>
                        <img class="logo" src="../src/assets/img/logo.png" width="250">
                    </div>
                    <div>
                        <span style="color: white;">Follow Us : </span>
                        <img src="../src/assets/img/ig.png" width="20" style="margin-right: 10px;">
                        <img src="../src/assets/img/yt.png" width="20" style="margin-right: 10px;">
                        <img src="../src/assets/img/fb.png" width="10" style="margin-right: 10px;">
                    </div>
                </div>
            </BCol>
        </BRow>
    </BContainer>

  <div class='layout'>
    <!-- ommited -->
    <vue-social-chat
      icon
      :attendants="attendants"
    >
      <template #header>
        <p>Click on one of our attendants below to chat on WhatsApp.</p>
      </template>
      <template #button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        >      
      </template>
      <!-- <template #footer>
        <small>Opening hours: 8am to 6pm</small>
      </template> -->
    </vue-social-chat>
  </div>
</template>

