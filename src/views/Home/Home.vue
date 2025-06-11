<script>
    export default{
        data(){
            return {
                articleJson: null,
                currentArticle: null,
                othersArticle: null
            }
        },
        methods: {
            gotoArticle(id){
                window.location.href = "/article/" + id
            },   
            gotoAllArticle(){
                window.location.href = "/article-list"
            }   
        },
        async setup(){
            const res = await fetch(import.meta.env.VITE_BASE_URL_API + 'article/list/1/4')
            const posts = await res.json()
            // console.log(posts);

            const res2 = await fetch(import.meta.env.VITE_BASE_URL_API + 'banner/list/0/0')
            const posts2 = await res2.json()
            
            const allBanner = posts2.data;
            
            return {
                posts,
                allBanner
            }
        },
        mounted(){
            let el = window.location.hash;
            console.log(el);
            if(typeof el !== 'undefined' && el != ''){
                console.log('ini');
                console.log(el.replace('#',''));
                
                var element = document.getElementById(el.replace('#',''))
                var elementPosition = element.getBoundingClientRect().top;
                console.log(elementPosition);
                var headerOffset = 10;
                var offsetPosition = elementPosition;
      
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                // .scrollIntoView({ behavior: "smooth" });
            }
            
            // if (typeof el.length === undefined) {
            //     // document.getElementById(el).scrollIntoView({ behavior: "smooth" });
            // }
        }
    }

    
</script>

<template>
    
    <!-- <BCarousel controls indicators :ride="true">
        <template v-for="i in allBanner">
            <p>{{ i.image }}</p>
            <img v-bind:src="i.image">
            <BCarouselSlide class="banner" v-bind:src="i.image" />    
        </template> -->
        <!-- <BCarouselSlide class="banner" img-src="http://mill-cloud.id/storage/img/1.png" />
        <BCarouselSlide class="banner" img-src="http://mill-cloud.id/storage/img/2.png" @click="gotoArticle(5)" />
        <BCarouselSlide class="banner" img-src="http://mill-cloud.id/storage/img/3.png" @click="gotoArticle(4)"/>
        <BCarouselSlide class="banner" img-src="http://mill-cloud.id/storage/img/4.png" @click="gotoArticle(6)"/> -->
    <!-- </BCarousel> -->
<BCarousel controls indicators :ride="true">
  <BCarouselSlide
    v-for="(i, index) in allBanner"
    :key="index"
    class="banner"
    :img-src="i.image"
    @click="gotoArticle(i.article)"
  />
</BCarousel>
    <!-- <div>
         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <img class="d-block w-100" src="http://mill-cloud.id/storage/img/1.png" alt="First slide">
               </div>
               <div class="carousel-item">
                  <img class="d-block w-100" src="http://mill-cloud.id/storage/img/2.png" alt="Second slide">
               </div>
            </div>
         </div>
      </div> -->

    <BContainer class="bv-example-row color-tone" id="transformasicloud" fluid='xxl'>
        <BRow>
            <BCol class="section1-left" md="8">
                <h2>Mulai transformasi digital Anda sekarang! Tingkatkan data ERP  Anda menjadi informasi berharga melalui analitik modern untuk Keputusan & strategi yang lebih tepat</h2>
                <p style="text-align: justify;">Transformasi digital bukan sekadar tren, tetapi kebutuhan bagi bisnis yang ingin tetap relevan dan kompetitif. Dengan mengintegrasikan teknologi seperti ERP cloud computing, kecerdasan buatan (AI), analitik data, dan otomatisasi, Anda dapat meningkatkan produktivitas, mengoptimalkan operasional, serta dapat membantu dan menciptakan strategi pemasaran & strategi penjualan yang lebih efektif.</p>
                <!-- <span>Discover more</span> -->
            </BCol>
            <BCol>
                <div class="section1-right">
                    <img src="../../assets/img/section2.png" width="250px">
                </div>
            </BCol>
        </BRow>
    </BContainer>
    <BContainer class="bv-example-row section2" fluid='xxl'>
        <BRow class="section2-row">
            <BCol md="6">
                <div class="section2-content">
                    <div>
                        <img src="../../assets/img/assess.png">
                    </div>
                    <div>
                        <h4>Evaluasi Lanskap Data Saat Ini</h4>
                        <p>Evaluasi kualitas, aksesibilitas, dan struktur data dalam 
                            sistem ERP Anda. Identifikasi data apa yang dimiliki, di mana data tersebut berada, 
                            bagaimana data tersebut digunakan saat ini, serta kesenjangan atau masalah dari kualitas data.
                        </p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div class="section2-content">
                    <div>
                        <img src="../../assets/img/clear.png">
                    </div>
                    <div>
                        <h4>Tetapkan Tujuan yang Jelas</h4>
                        <p>Tentukan pertanyaan terkait bisnis Anda yang perlu dijawab dan hasil 
                            bisnis yang ingin dicapai melalui anallisa. Tujuan yang jelas akan memandu strategi analisis 
                            Anda dan memastikan keselarasan dengan tujuan keseluruhan organisasi.</p>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow class="section2-row">
            <BCol md="6">
                <div class="section2-content">
                    <div>
                        <img src="../../assets/img/strategy.png">
                    </div>
                    <div>
                        <h4>Kembangkan Strategi Data</h4>
                        <p>Rumuskan strategi yang menentukan bagaimana data akan dikumpulkan, 
                            disimpan, dikelola, dan dianalisis. Pastikan mencakup aspek seperti integrasi data, tata 
                            kelola, privasi, dan keamanan.</p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div class="section2-content">
                    <div>
                        <img src="../../assets/img/select.png">
                    </div>
                    <div>
                        <h4>Pilih Alat Analitik yang Tepat</h4>
                        <p>Pilih alat dan platform analitik yang dapat memproses dan menganalisis 
                            data dari sistem ERP Anda secara efektif. Cari solusi yang dapat diukur dan terintegrasi dengan 
                            sistem lain jika diperlukan.</p>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow class="section2-row">
            <BCol md="6">
                <div class="section2-content">
                    <div>
                        <img src="../../assets/img/skiled.png">
                    </div>
                    <div>
                        <h4>Bangun Tim yang Kompeten</h4>
                        <p>Siapkan integrasi antara sistem ERP Anda dan alat analitik. 
                            Ini mungkin melibatkan proses ekstraksi, transformasi, dan pemuatan data agar data dapat 
                            digunakan dalam analisis.</p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div class="section2-content">
                    <div>
                        <img src="../../assets/img/integrate.png">
                    </div>
                    <div>
                        <h4>Integrasikan Data ERP dengan Alat Analitik</h4>
                        <p>Siapkan integrasi antara sistem ERP Anda dan alat analitik. 
                            Ini mungkin melibatkan proses ekstraksi, transformasi, dan pemuatan data agar data 
                            dapat digunakan dalam analisis.</p>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow class="section2-row">
            <BCol md="6">
                <div class="section2-content">
                    <div>
                        <img src="../../assets/img/reports.png">
                    </div>
                    <div>
                        <h4>Buat Laporan dan Dasbor</h4>
                        <p>Kembangkan model analitik, laporan, dan dasbor yang memberikan wawasan 
                            bermakna sesuai dengan tujuan strategis Anda. Gunakan visualisasi data untuk menyajikan 
                            informasi dalam format yang mudah diakses oleh pengambil keputusan.</p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div class="section2-content">
                    <div>
                        <img src="../../assets/img/implement.png">
                    </div>
                    <div>
                        <h4>Terapkan Analitik Lanjutan (jika diperlukan)</h4>
                        <p>Bergantung pada kebutuhan Anda, pertimbangkan untuk menggunakan teknik 
                            analitik lanjutan seperti pemodelan prediktif, pembelajaran mesin, atau AI untuk mengungkap 
                            wawasan yang lebih mendalam dan memprediksi tren di masa depan.</p>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow class="section2-row">
            <BCol md="6">
                <div class="section2-content">
                    <div>
                        <img src="../../assets/img/foster.png">
                    </div>
                    <div>
                        <h4>Dorong Budaya Berbasis Data</h4>
                        <p>Dorong budaya di organisasi Anda di mana keputusan dibuat berdasarkan 
                            wawasan berbasis data. Hal ini memerlukan pelatihan, manajemen perubahan, dan komunikasi yang 
                            berkelanjutan tentang nilai analitik.</p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div class="section2-content">
                    <div>
                        <img src="../../assets/img/monitor.png">
                    </div>
                    <div>
                        <h4>Pantau, Analisis, dan Iterasi</h4>
                        <p>Pantau hasil secara terus-menerus untuk mengukur dampak analitik Anda. 
                            Gunakan umpan balik dan hasil untuk secara teratur menyempurnakan pendekatan dan model Anda.</p>
                    </div>
                </div>
            </BCol>
        </BRow>
    </BContainer>

    <BContainer class="bv-example-row section2" fluid='xxl' style="background-color: #f9f9f9;">
        <div style="text-align: center; padding-bottom: 50px;">
            <h1>Pendiri</h1>
        </div>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/user.png">
                    </div>
                    <div>
                        <h4>Budi Herwana</h4>
                        <span style="font-size: 20px;">Komisaris</span> <br><br>
                        <p style="font-size: 14px;">Budi Herwana, sebagai Komisaris, memiliki pengalaman luas dalam 
                            bisnis pengembangan aplikasi TI untuk berbagai industri, usaha bisnis di bidang Digital 
                            Marketing. Selain itu, ia juga menjalankan usaha Non-TI seperti construction 
                            engineering/real-estate, furniture manufacturing, distribusi kosmetik, food & beverage, 
                            dan building material.</p>
                        <p style="font-size: 14px;">Dengan lebih dari 30 tahun pengalaman dalam berbagai proyek TI dan bisnis non-TI, 
                            ia telah berkontribusi dalam sejumlah inisiatif besar dan proyek TI di perusahaan 
                            SME sampai dengan Large Enterprises.
                        </p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/user.png">
                    </div>
                    <div>
                        <h4>Jongki Sundah</h4>
                        <span style="font-size: 16px;">Direktur</span> <br><br>
                        <p style="font-size: 14px;">Jongki Sundah, Direktur, memiliki lebih dari 14 tahun 
                            pengalaman di Oracle Applications (Oracle E-Business Suite dan Oracle Fusion), 
                            serta lebih dari 13 tahun sebelumnya di SAP, SAS Institute, dan solusi perbankan 
                            (Base24, sistem kartu kredit, dan lainnya).</p>
                        <p style="font-size: 14px;">Sepanjang kariernya, ia telah menjalani berbagai peran. Ia memulai sebagai konsultan 
                            solusi di perusahaan konsultan TI yang berfokus pada solusi perbankan dan 
                            telekomunikasi. Selama 10 tahun sebelumnya di SAP Indonesia, beliau juga 
                            mempunyai tanggung jawab di berbagai peran dari penjualan, pelatihan, dan 
                            terlibat di dalam manajemen proyek selama kurun waktu tersebut.</p>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/user.png">
                    </div>
                    <div>
                        <h4>Halim Sugandi</h4>
                        <span style="font-size: 16px;">Head of Technology</span> <br><br>
                        <p style="font-size: 14px;">Halim Sugandi, Head of Technology, 
                            memiliki lebih dari 30 tahun pengalaman dalam aplikasi TI dan proyek 
                            integrasi sistem. Dedikasinya terhadap teknologi TI dan pengembangan aplikasi, 
                            termasuk aplikasi mobile, menjadikannya aset berharga dalam menciptakan solusi 
                            terpadu yang terintegrasi dengan Oracle NetSuite.</p>
                        <p style="font-size: 14px;">Ia menguasai berbagai keterampilan dan telah terlibat dalam beragam proyek, 
                            seperti pengembangan mobile trading berbasis web streaming, aplikasi mobile 
                            canvasing untuk produk konsumen, implementasi JPOS berbasis Java untuk protokol 
                            ATM NDC+, sistem pencadangan otomatis, deploy e-commerce dan sistem keamanan, 
                            integrasi SAP, pengembangan High-Speed Streaming Mobile Web Stock, serta 
                            integrasi internal ESB untuk sistem LTE berbasis Huawei & CRM, dan masih banyak lagi.
                        </p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <!-- <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/techplatform.png">
                    </div>
                    <div>
                        <h4>Platform Teknologi</h4>
                        <p style="font-size: 14px;">Dalam beberapa tahun terakhir, pertumbuhan pesat teknologi digital dan seluler telah merevolusi 
                            dunia bisnis, memungkinkan munculnya model bisnis berbasis platform. Platform digital ini berfungsi sebagai perantara 
                            yang memfasilitasi pertukaran barang, jasa, dan informasi antara berbagai pemangku kepentingan, termasuk pemasok, mitra, 
                            pengembang, dan pelanggan.
                            Munculnya ekonomi berbasis platform didorong oleh konvergensi beberapa kemajuan teknologi utama, termasuk adopsi 
                            perangkat seluler secara luas, proliferasi algoritma pembelajaran mesin, dan peningkatan kecanggihan kecerdasan 
                            buatan (AI).</p>
                    </div>
                </div> -->
            </BCol>
        </BRow>
        

    </BContainer>

    <BContainer class="bv-example-row color-tone section3" fluid='xxl'>
        <BRow>
            <BCol class="section3-left" md="6">
                <span class="desc">Oracle Customers WorldWide</span>
            </BCol>
            <BCol class="section3-right">
                <div>
                    <span class="angka">40.000+</span><br>
                    <span class="desc">Customer World Wide</span>
                </div>
                <div>
                    <span class="angka">300+</span><br>
                    <span class="desc">Customer Indonesia</span>
                </div>
                <div>
                    <span class="angka">200+</span><br>
                    <span class="desc">Country</span>
                </div>
            </BCol>
        </BRow>
    </BContainer>

    <BContainer class="bv-example-row aboutus" id="aboutus" style="" fluid='xxl'>
        <BRow>
            <BCol class="aboutus-left" md="6">
                <img src="../../assets/img/aboutus.png">
            </BCol>
            <BCol class="aboutus-right">
                <div>
                    <span class="title">Tentang Kami</span><br>
                    <p style="text-align: justify; font-size: 12px;">Berdiri di Jakarta pada tahun 2024, kami merupakan bagian dari grup perusahaan IT (yang telah beroperasi sejak 2013), dengan fokus utama pada solusi bisnis Oracle NetSuite. Sebagai perusahaan Konsultan IT profesional, kami menyediakan berbagai produk dan layanan di bidang Teknologi Informasi dan Komunikasi (TIK), khususnya perangkat lunak aplikasi bisnis seperti Enterprise Resource Planning (ERP), Analytical Solution & Aplikasi-aplikasi penting yang melengkapi suatu total solution yang berorientasi added value pada klien kami. Kami juga menawarkan layanan pendukung lainnya yang dirancang untuk membantu Klien-klien kami meningkatkan efisiensi dan efektivitas operasionalnya.</p>
                </div>
            </BCol>
        </BRow>
    </BContainer>


    <BContainer class="bv-example-row chooseus" style="" fluid='xxl'>
        <div class="title">
            Kenapa Memilih Kami
        </div>
        <div class="container">
            <div class="item">
                <div>
                    <img src="../../assets/img/choose1.png">
                </div>
                <div>
                    <h4>Tingkatkan level bisnis Anda dengan transformasi digital Modern</h4>
                    <p>Integrasikan teknologi digital ke seluruh aspek bisnis Anda dan ubah cara Anda beroperasi serta memberikan nilai lebih kepada pelanggan. Jadilah lebih efisien, inovatif, dan kompetitif di era digital!"</p>
                </div>
            </div>
            <div class="item">
                <div>
                    <img src="../../assets/img/choose2.png">
                </div>
                <div>
                    <h4>Manajemen keuangan berbasis cloud yang modern dan komprehensif</h4>
                    <p>Manajemen keuangan berbasis cloud yang modern dan kompre- hensif dengan dukungan fitur multi currency dan multi subsidi- ary. Modern Finance adalah transformasi ter-Integrasi yang di dukung Analisa real-time, kolaborasi, skalabilitas, Mitigasi resiko, & penghematan biaya.</p>
                </div>
            </div>
            <div class="item">
                <div>
                    <img src="../../assets/img/choose3.png">
                </div>
                <div>
                    <h4>Perencanaan yang efektif dalam manufaktur & rantai pasokan</h4>
                    <p>Kolaborasi antara perencanaan permintaan, pengelolaan persediaan, perencanaan produksi, penerapan sistem manajemen rantai pasokan, pengendalian kualitas, serta analisis dan simulasi untuk mendukung proses manufaktur yang efisien dan efektif.</p>
                </div>
            </div>
            <div class="item">
                <div>
                    <img src="../../assets/img/choose4.png">
                </div>
                <div>
                    <h4>Penerapan Sistem Penjualan Modern</h4>
                    <p>Modern sistem sales memungkinkan Pengelolaan data pelanggan, segmentasi yang terfokus, pelaporan yang efisien, strategi berbasis data, personalisasi dalam pemasaran dan promosi, serta kolaborasi organisasi yang optimal.</p>
                </div>
            </div>
            <div class="item">
                <div>
                    <img src="../../assets/img/choose5.png">
                </div>
                <div>
                    <h4>Manajemen persediaan & gudang yang efektif</h4>
                    <p>Sistem harus memastikan akurasi, penerapan teknologi terkini, pemeriksaan kualitas, optimisasi ruang gudang, prosedur pengambilan & pengemasan yang efisien, pengiriman & distribusi yang tepat, serta pemantauan kinerja dan analisis data.</p>
                </div>
            </div>
        </div>
        
    </BContainer>

    
    <BContainer class="bv-example-row" id="petasolusi" fluid='xxl' style="padding-left: 0px; padding-right: 0px;">
        <img src="../../assets/img/coreproduct.png" style="width: 100%;">
    </BContainer>

    <BContainer class="bv-example-row section2" fluid='xxl' id="manfaatbisniserp" style="background-color: #f9f9f9;">
        <div style="text-align: center; padding-bottom: 50px;">
            <h1>Manfaat Bisnis ERP</h1>
        </div>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/financial.png">
                    </div>
                    <div>
                        <h4>Manajemen Finansial</h4>
                        <p style="font-size: 14px;">Manajemen keuangan adalah aspek penting dalam menjalankan organisasi apa 
                            pun, baik itu bisnis kecil, korporasi besar, atau entitas nirlaba. Manajemen keuangan yang 
                            efektif melibatkan perencanaan, pengorganisasian, dan pengendalian sumber daya keuangan 
                            organisasi untuk memastikan keberlanjutan dan pertumbuhannya dalam jangka panjang.</p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/projectmanagement.png">
                    </div>
                    <div>
                        <h4>Manajemen Proyek</h4>
                        <p style="font-size: 14px;">Dalam lingkungan bisnis yang dinamis saat ini, di mana organisasi 
                            menghadapi berbagai tantangan seperti keterbatasan anggaran, siklus pengembangan yang lebih 
                            singkat, dan persaingan global, kebutuhan akan manajemen proyek yang efektif menjadi semakin 
                            penting.</p>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/supplychain.png">
                    </div>
                    <div>
                        <h4>Manajemen Supply Chain</h4>
                        <p style="font-size: 14px;">Dalam operasi bisnis modern, yang mencakup koordinasi dan optimalisasi 
                            aliran barang, jasa, dan informasi dari titik asal hingga titik konsumsi. Rantai pasok yang 
                            dirancang dan diimplementasikan dengan baik dapat memberikan keunggulan kompetitif 
                            bagi organisasi, memungkinkan mereka untuk mengurangi biaya, meningkatkan kepuasan 
                            pelanggan, dan meningkatkan efisiensi secara keseluruhan</p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/techplatform.png">
                    </div>
                    <div>
                        <h4>Platform Teknologi</h4>
                        <p style="font-size: 14px;">Dalam beberapa tahun terakhir, pertumbuhan pesat teknologi digital dan seluler telah merevolusi 
                            dunia bisnis, memungkinkan munculnya model bisnis berbasis platform. Platform digital ini berfungsi sebagai perantara 
                            yang memfasilitasi pertukaran barang, jasa, dan informasi antara berbagai pemangku kepentingan, termasuk pemasok, mitra, 
                            pengembang, dan pelanggan.
                            Munculnya ekonomi berbasis platform didorong oleh konvergensi beberapa kemajuan teknologi utama, termasuk adopsi 
                            perangkat seluler secara luas, proliferasi algoritma pembelajaran mesin, dan peningkatan kecanggihan kecerdasan 
                            buatan (AI).</p>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/apptools.png">
                    </div>
                    <div>
                        <h4>Aplikasi</h4>
                        <p style="font-size: 14px;">Dalam lanskap pengembangan perangkat lunak yang terus berkembang, 
                            konsep aplikasi tambahan (add-on) semakin banyak digunakan, menawarkan pengguna cara untuk 
                            meningkatkan fungsionalitas dan personalisasi pengalaman digital mereka.</p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/techinfra.png">
                    </div>
                    <div>
                        <h4>Infrastruktur Teknologi</h4>
                        <p style="font-size: 14px;">Komputasi awan/Cloud Computing telah menjadi bagian penting dari 
                            infrastruktur teknologi modern. Konsep komputasi awan pertama kali digambarkan sebagai 
                            virtualisasi sumber daya komputer. Cloud Computing adalah model yang memungkinkan akses 
                            sesuai permintaan ke kumpulan sumber daya komputasi yang dapat dikonfigurasi, seperti jaringan, 
                            server, penyimpanan, aplikasi, dan layanan, yang dapat disediakan dan dilepaskan dengan cepat 
                            dengan upaya manajemen minimal atau interaksi penyedia layanan.</p>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/crm.png">
                    </div>
                    <div>
                        <h4>Manajemen Akuisisi & Retensi Pelanggan</h4>
                        <p style="font-size: 14px;">Akusisi dan retensi pelanggan adalah dua pilar dasar dari strategi pemasaran yang sukses. Kemampuan untuk menarik pelanggan baru secara efektif dan mempertahankan hubungan jangka panjang dengan pelanggan yang ada dapat menentukan kesuksesan atau kegagalan suatu bisnis di lanskap kompetitif saat ini. Solusi kami adalah untuk membantu mengatasi masalah di atas yang sering kali kesulitan mengelola proses ini dengan efektif. Keterbatasan data sering kali membuat pengambil keputusan hanya fokus pada masalah pelanggan terkait.</p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/analytics.png">
                    </div>
                    <div>
                        <h4>Analisa</h4>
                        <p style="font-size: 14px;">Gudang analitik adalah repositori terpusat yang mengonsolidasikan dan 
                            mengorganisasi data dari berbagai sumber, memungkinkan organisasi untuk memperoleh wawasan 
                            berharga dan membuat keputusan yang tepat. Berbeda dengan basis data tradisional yang dirancang 
                            untuk tugas operasional, gudang analitik secara khusus dirancang untuk mendukung pelaporan, 
                            kueri ad-hoc, dan analitik lanjutan.</p>
                    </div>
                </div>
            </BCol>
        </BRow>

    </BContainer>

    <BContainer class="bv-example-row section2" fluid='xxl' id="manfaatteknologicloud">
        <div style="text-align: center; padding-bottom: 50px;">
            <h1>Manfaat Teknologi Cloud</h1>
        </div>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/costsavings.png">
                    </div>
                    <div>
                        <h4>Efisiensi Biaya</h4>
                        <p style="font-size: 14px;">Perkembangan pesat dalam teknologi komputasi awan telah mengubah cara 
                            bisnis mendekati infrastruktur teknologi informasi (TI) mereka, menawarkan peluang penghematan 
                            biaya yang signifikan yang dapat secara substansial mengurangi investasi TI secara keseluruhan
                        </p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/reliability.png">
                    </div>
                    <div>
                        <h4>Reliabilitas</h4>
                        <p style="font-size: 14px;">Komputasi awan telah muncul sebagai teknologi yang mengubah permainan, 
                            merevolusi cara kita menyimpan, mengakses, dan memproses data. Model ini memiliki dampak 
                            signifikan terhadap keandalan dan ketahanan sistem komputasi, karena memungkinkan organisasi 
                            untuk mengatasi keterbatasan infrastruktur tradisional yang ada di lokasi."</p>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/cloud.png">
                    </div>
                    <div>
                        <h4>Sentralisasi Cloud Computing</h4>
                        <p style="font-size: 14px;">Adopsi komputasi awan telah meningkatkan faktor keamanan data 
                            yang jauh lebih baik pada sistem terpusat</p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/scalability.png">
                    </div>
                    <div>
                        <h4>Skalabilitas</h4>
                        <p style="font-size: 14px;">Salah satu keuntungan utama dari komputasi awan adalah kemampuannya 
                            untuk meningkatkan sumber daya sesuai kebutuhan, memungkinkan organisasi untuk beradaptasi 
                            dengan beban kerja dan permintaan yang berubah tanpa perlu investasi perangkat keras yang 
                            mahal atau pemeliharaan</p>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/optim.png">
                    </div>
                    <div>
                        <h4>Optimasi Performa</h4>
                        <p style="font-size: 14px;">Salah satu keuntungan utama dari komputasi awan adalah kemampuannya 
                            untuk meningkatkan kinerja. Seiring organisasi semakin mengandalkan aplikasi dan layanan 
                            yang intensif data, kebutuhan akan solusi komputasi yang dapat diskalakan, efisien, dan 
                            hemat biaya menjadi sangat penting. Komputasi awan memenuhi kebutuhan ini dengan menyediakan 
                            infrastruktur yang fleksibel dan dapat diskalakan yang dapat beradaptasi dengan perubahan 
                            permintaan</p>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div style="display: flex;">
                    <div style="margin-right: 10px;">
                        <img src="../../assets/img/compliance.png">
                    </div>
                    <div>
                        <h4>Adaptasi & Regulasi</h4>
                        <p style="font-size: 14px;">Adopsi komputasi awan juga membawa kekhawatiran terkait 
                            kepatuhan dan keamanan data, yang merupakan pertimbangan penting bagi organisasi 
                            yang beroperasi di lanskap global. 
                            Solusi komputasi awan kami menyediakan tingkat kepatuhan tertinggi yang diberikan 
                            oleh berbagai pihak ketiga yang terotorisasi.</p>
                    </div>
                </div>
            </BCol>
        </BRow>

    </BContainer>

    <BContainer class="bv-example-row partner" fluid='xxl' id="ourpartner" style="text-align: center;">
        <div style="text-align: center; padding-bottom: 50px;">
            <h1>Partner Kami</h1>
        </div>
        <div>
            <img src="../../assets/img/partners/Oracle OCI.png" alt="" width="700">
            <img src="../../assets/img/partners/Oracle.png" alt="">
            <img src="../../assets/img/partners/Oracle CLoud.png" alt="">
            <img src="../../assets/img/partners/Neo4J.png" alt="">
            <img src="../../assets/img/partners/Oracle Netsuite.png" alt="">
            <img src="../../assets/img/partners/MySQL-Logo.png" alt="">
            <img src="../../assets/img/partners/Oracle Fusion.png" alt="">
            <img src="../../assets/img/partners/Oracle e-business suite.png" alt="">
        </div>
    </BContainer>
    <BContainer class="bv-example-row articles" id="artikel" fluid='xxl'>
        <div style="text-align: center; padding-bottom: 50px;">
            <h1>Artikel</h1>
        </div>
        <BRow style="margin-bottom: 50px;">
            <BCol md="6">
                <div style="display: flex;" >
                    <div>
                        <img v-bind:src="posts.data[0].image">
                    </div>
                    <div class="artikel-home">
                        <h4>{{posts.data[0].title}}</h4>
                        <p>{{posts.data[0].description}}</p>
                        <div class="discovery-btn" @click="gotoArticle(posts.data[0].id)">
                            <span>Discover More</span>
                            <img src="../../assets/img/down.png" style="width: 18px;">
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </BCol>
            <BCol>
                <div style="display: flex;">
                    <div>
                        <img v-bind:src="posts.data[1].image">
                    </div>
                    <div>
                        <h4>{{posts.data[1].title}}</h4>
                        <p>{{posts.data[1].description}}</p>
                        <div class="discovery-btn" @click="gotoArticle(posts.data[1].id)">
                            <span>Discover More</span>
                            <img src="../../assets/img/down.png" style="width: 18px;">
                        </div>
                    </div>
                </div>
            </BCol>
        </BRow>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div style="display: flex;">
                    <div>
                        <img v-bind:src="posts.data[2].image">
                    </div>
                    <div>
                        <h4>{{posts.data[2].title}}</h4>
                        <p>{{posts.data[2].description}}</p>
                        <div class="discovery-btn" @click="gotoArticle(posts.data[2].id)">
                            <span>Discover More</span>
                            <img src="../../assets/img/down.png" style="width: 18px;">
                        </div>
                    </div>
                </div>
            </BCol>
            <BCol>
                <div style="display: flex;">
                    <div>
                        <img v-bind:src="posts.data[3].image">
                    </div>
                    <div>
                        <h4>{{posts.data[3].title}}</h4>
                        <p>{{posts.data[3].description}}</p>
                        <div class="discovery-btn" @click="gotoArticle(posts.data[3].id)">
                            <span>Discover More</span>
                            <img src="../../assets/img/down.png" style="width: 18px;">
                        </div>
                    </div>
                </div>
            </BCol>
        </BRow>
        <br>

        <div class="all-article-btn" @click="gotoAllArticle()">
                            <span>Lihat Selengkapnya</span>
                            <img src="../../assets/img/down.png" style="width: 18px;">
                        </div>

    </BContainer>

    <BContainer class="bv-example-row" id="kontakkami" fluid='xxl' >
        <div style="text-align: center; padding-bottom: 50px;">
            <h1>Kontak Kami</h1>
        </div>
        <BRow style="margin-bottom: 30px;">
            <BCol md="6">
                <div class="maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7472271002716!2d106.91196577579854!3d-6.164596493822644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ad2eef61e0f%3A0xcc11b45554e76f6f!2sKirana%20Two%20Office%20Tower!5e0!3m2!1sen!2sid!4v1738592061244!5m2!1sen!2sid" width="550" height="500" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </BCol>
            <BCol>
                <div>
                    <BForm>
                        <BFormGroup id="input-group-1" label-for="input-1" style="margin-bottom: 10px;">
                            <BFormInput id="input-1"  type="text" placeholder="Name: "
                                required />
                        </BFormGroup>

                        <BFormGroup id="input-group-2" label-for="input-2" style="margin-bottom: 10px;">
                            <BFormInput id="input-2" placeholder="HP: " required />
                        </BFormGroup>

                        <BFormGroup id="input-group-2" label-for="input-2" style="margin-bottom: 10px;">
                            <BFormInput id="input-2" placeholder="Subject: " required />
                        </BFormGroup>
                        <BFormTextarea placeholder="Your Message: " rows="3" style="margin-bottom: 10px;" />

                        <BButton type="submit" variant="primary">Send Message</BButton>
                    </BForm>
                </div>
            </BCol>
        </BRow>
    </BContainer>

    
</template>
