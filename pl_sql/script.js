
const btns = document.querySelectorAll('.btns')
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const txt = btn.nextElementSibling.innerText;
        btn.innerHTML = "Copied";
        setTimeout(() => {
            btn.innerHTML = "Copy";
        }, 2000)
        copyToClipboard(txt)
    })
})

function copyToClipboard(txt) {
    navigator.clipboard.writeText(txt)
        .then(() => console.log(`${txt} was copied...`))
        .catch((e) => console.log('Copy failed ${e}'))
}


function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("topic");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


const sButton = document.querySelectorAll(".item");

//by default hiding <div class="one">
const display_none_oneClass = document.querySelectorAll(".one");
for (let i =1; i<display_none_oneClass.length; i++) {
    display_none_oneClass[i].style.display = "none";
}
//end by default hiding <div class="one">

for (let btn of sButton) {
    btn.addEventListener('click', (e) => {
        const event = e.target;

        const active = document.querySelector(".active");
        if (active) {
            active.classList.remove("active");
        }

        event.classList.add("active");


        const contents = document.querySelectorAll(".one");

        for (let content of contents) {
            if (content.getAttribute("id") === btn.getAttribute("id")) {
                content.style.display = "block";
            }
            else {
                content.style.display = "none";
            }
        }




    })
}