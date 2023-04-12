
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