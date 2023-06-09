class MobileNavbar{
    constructor(mobileMenu,navList,navLinks){
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList=document.querySelector(navList);
    this.navLinks=document.querySelector(navLinks);
    this.activeClass= "Active";

    this.handerClick = this.handerClick.bind(this)
    }

    handerClick(){
        this.navList.classList.toggle(this.activeClass)
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handerClick
        ("hey"));
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    "nav-list li",
)

MobileNavbar.init();