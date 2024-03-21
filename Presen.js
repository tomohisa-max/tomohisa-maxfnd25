let imagesItems = [...document.querySelectorAll(".img-wrap")];
console.log(imagesItems);
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

//監視対象になった瞬間、activeを付加する関数
let setItemActive = (entries) => {
    //console.log(entries);
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
};

let options = {
    rootMargin: "0px",
    threshold: 0.5,
};


//どこの位置にいるのか監視する。そして特定の位置に来たら関数を呼び出す。
let observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);

//img-wrapは偶数と奇数で出現する場所が違います。
imagesItems.map((item, index) => {
    console.log(item, index);
    item.children[0].style.backgroundImage = `url(./picture/${index + 1}.png)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
});

titles.map((title, index) => {
    index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "45%");
    observer.observe(title);
});

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
//ヘッダーがulタグの位置に来たらヘッダーを固定する。scrollYで見ている
window.addEventListener("scroll", () => {
//   console.log(window.pageYoffset);
//   console.log(menu.offsetTop);
if(window.scrollY >= menu.offsetTop) {
    navbar.classList.add("sticky");
} else {
    navbar.classList.remove("sticky");
}
})

//---------------------------------------------------------------------
//<button id="linkButton">リンク付きボタン</button>

// const linkButton = document.getElementById('heading');

// linkButton.addEventListener('click', () => {
//   window.location.href = 'https://example.com';
// });

// //---------------------------------------------------------------------
// //<h2 id="heading" onclick="alertHeadingText()">Hello, World!</h2>

// // function alertHeadingText() {
// //     var headingText = document.getElementById("heading").textContent;
// //     alert(headingText);

// function alertHeadingText() {
//     var headingText = document.getElementsByClassName("heading").textContent;
//     alert(headingText);
// }
