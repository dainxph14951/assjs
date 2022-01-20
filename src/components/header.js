const Header = {
    render() {
        return /* html */`<div class="vapare">
        <header class=" sticky-top w-full">
            <div class="inner-header container ">
                <div class="logo">
                    <a href=""><img src="https://pubcdn.ivymoda.com/images/logo.png" alt=""></a>
                </div>

                <nav>
                    <ul class="main-menu">
                        <li><a href="index.php">Trang Chủ</a></li>
                        <li><a href="index.php?act=gioithieu">Giới thiệu</a></li>
                        <li><a href="index.php?act=sanpham">Sản Phẩm</a></li>
                        <li><a href="index.php?act=blog">Blong</a></li>
                        <li><a href="index.php?act=lienhe">Liên Hệ</a></li>


                    </ul>
                </nav>
                <div class="icon">
                    <!-- <a href=""><i class="fas fa-user-lock" style="color: black !important;"></i></a> -->
                    <a href="" class="p-1"><i class="fas fa-bell " style="color: black !important;"></i></a>
                    <a href="" class="p-1"><i class="fas fa-shopping-bag" style="color: black !important;"></i></a>
                    <a href="" class="p-1"><i class="fas fa-fingerprint" style="color: black !important;"></i></a>
                    <a href="" class="p-1"><i class="fas fa-user-lock" style="color: black !important;"></i></a>
                </div>
            </div>

        </header> 
        <!-- -------------------------------------------- -->
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://pubcdn.ivymoda.com/files/news/2022/01/17/b4b52ab3742c304599a40807b44e62d1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://pubcdn.ivymoda.com/files/news/2022/01/17/b4b52ab3742c304599a40807b44e62d1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://pubcdn.ivymoda.com/files/news/2022/01/17/b4b52ab3742c304599a40807b44e62d1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
`;
    },
};
export default Header;