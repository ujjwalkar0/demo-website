export default function Navbar() {
    return (`
    <ul class="navbar">
        <div>
            <a href="/"><img src="https://www.clinisys.com/app/uploads/2022/09/Clinisys_logo_bk_rgb.svg" width="130px" class="logo"></a>
            <div class="right">
                <li class="navbar"><a class="active" href="/">Home</a></li>
                <li class="navbar"><a href="#news">News</a></li>
                <li class="navbar"><a href="#contact">Contact</a></li>
                <li class="navbar"><a href="#about">About</a></li>
                <li class="navbar"><a href="/login.html">Login</a></li>
            </div>
        </div>
    </ul>
`
    )
}