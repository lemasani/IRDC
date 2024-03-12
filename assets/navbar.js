const navbar = document.querySelector('.header');

const topbar = document.createElement('div')
topbar.className = 'logos container d-flex justify-content-center w-100'
topbar.innerHTML = `<picture>
<source media="(min-width: 884px)" srcset="../assets/img/top.png">
<source media="(min-width: 565px)" srcset="../assets/img/Tablettop.png">
<img src="../assets/img/Phonetop.png" style="width:auto;">
</picture>

<div class="mobile">

  <img src="../assets/img/udsm.png" alt="udsm">
  <div class="logo-heading">
        <h2>UNIVERSITY OF DAR ES SALAAM <br> COLLEGE OF SOCIAL SCIENCE 
            <br> DEPARTMENT OF GEOGRAPHY <br>
            RESEARCH CHAIR ON FORCED DISPLACEMENT
        </h2>
  </div>
  <img src="../assets/img/IRDC.png" alt="IRDC">

</div>  `
navbar.appendChild(topbar);

const navItems = document.createElement('nav');
navItems.className = 'navbar navbar-expand-lg bg-primary justify-content-center z-2';
navItems.innerHTML = `
<div class="container d-flex flex-row justify-content-end ">
<!-- <a class="navbar-brand" href="index.html">IRDC-CRDI</a> -->
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="nav-items collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
<ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="../about.html">About us</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Research
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Fieldworks</a></li>
            <li><a class="dropdown-item" href="#">Working papers</a></li>
            <li><a class="dropdown-item" href="#">Publications</a></li>
            <li><a class="dropdown-item" href="#">Outreach</a></li>
            <li><a class="dropdown-item" href="#">Symposyium and conferences</a></li>
        </ul>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Training
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Seminars</a></li>
            <li><a class="dropdown-item" href="#">Intership</a></li>
            <li><a class="dropdown-item" href="#">Research support</a></li>
        </ul>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Policy Dialogues
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">First National Policy Dialogue</a></li>
            <li><a class="dropdown-item" href="#">Second National Policy Dialogue</a></li>
        </ul>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Links & Collaboration
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">IDRC's Research Chairs</a></li>
            <li><a class="dropdown-item" href="#">Network of Academic Scholars</a></li>
            <li><a class="dropdown-item" href="#">Partners</a></li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="news/index.html">News</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
    </li>
</div>
</div>
`
navbar.appendChild(navItems);


//selecting anchor tags in navitems
let links = document.querySelectorAll('.nav-item a'); 

// trims the pathname of the page if it starts with a slash
function trimPathname(pathname) {
    if (pathname.startsWith('/')) {
        return pathname.slice(1);
    }
    return pathname;
}
//controls the navigation of the page
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const  currentUrl = window.location.href;
    links.forEach((link) => {
        // console.log('this is link',link);
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const trimmedUrl = trimPathname(window.location.pathname);
            if (href === trimmedUrl) {
                e.preventDefault();
                console.log('you are in the same page');
            }else{
               location.href=href;    
            }
            
        });
       
    });
});
