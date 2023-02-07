import Image from 'next/image'
import logo from "./logo.png"
const Navbar = () => {
    return (
        <div>
    <nav class="navbar navbar-expand-lg bg-transparent p-t-45">
    <div class="container">
        <a class="navbar-brand" href="#"><Image src={logo}  width={115}/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 f-w-900 m-l-150">
            <li class="nav-item">
            <a class="nav-link active f-s-10 f-w-600 text-dark" aria-current="page" href="#">STUDIO</a>
            </li>
            <li class="nav-item">
            <a class="nav-link f-s-10 f-w-600 text-dark m-l-30" href="#">COMMUNITY</a>
            </li>
            <li class="nav-item">
            <a class="nav-link f-s-10 f-w-600 text-dark m-l-30" href="#">SOUNDS</a>
            </li>
            <li class="nav-item">
            <a class="nav-link f-s-10 f-w-600 text-dark m-l-30" href="#">PLUGINS</a>
            </li>
            <li class="nav-item">
            <a class="nav-link f-s-10 f-w-600 text-dark m-l-30" href="#">BLOGS</a>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <button class="btn  rounded-pill p-l-30 p-r-30 f-s-10 text-white m-r-30" type="submit">LOGIN</button>
            <button class="btn  rounded-pill p-l-30 p-r-30 f-s-10 btn-trans" type="submit">SIGN UP</button>
        </form>
        </div>
    </div>
    </nav>
        </div>
    );
}

export default Navbar;
