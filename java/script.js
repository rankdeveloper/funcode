import { arr1 } from "./data.js";

console.log("developer noob")
const ul = document.getElementById("topic")
const main_content = document.querySelector(".main-content");


// arr1.map(pro => {

//     // if(pro.type=="strings"){
//        // const detail = document.createElement("details")
//         ul.innerHTML += `
//         <li><a id=${pro.index} class="item" data-type=${pro.type}><span>(Strings) </span>${pro.programName}</a></li>

//      ` 

//     // }

// })

// Assuming you have a container element with id "container" to which you want to append the details and ul elements
const container = document.getElementById("container");

// Create an object to store details elements for each pro.type
const detailsMap = {};

arr1.forEach(pro => {
    const type = pro.type;

    const basic_pro = (pro.type == "basic") ? 139 : ''
    const count_exceptionH_pro = (pro.type == "exception Handling") ? 13 : ''
    const count_delegationE_pro = (pro.type == "delegationEventModel") ? 20 : ''

    //     array
    // 2darray
    // awt
    // dataConversion
    // string
    // inheritance
    // input_output
    // jdbc
    // oop
    // strings
    // basic
    // function
    // 2dArray
    // delegationEventModel
    // exception Handling


    // Check if the details element for the current type already exists
    if (!detailsMap[type]) {
        // If it doesn't exist, create a new details element and append it to the container
        const details = document.createElement("details");

        details.innerHTML = `<summary>
        ${type} 
        ${count_exceptionH_pro}
        ${basic_pro}
        ${count_delegationE_pro}
        ${pro.type == "array" ? 1 : ''} ${pro.type == "2darray" ? 12 : ''} ${pro.type == "awt" ? 2 : ''}
        ${pro.type == "dataConversion" ? 1 : ''} ${pro.type == "strings" ? 4 : ''} ${pro.type == "inheritance" ? 1 : ''}
        ${pro.type == "input_output" ? 2 : ''} ${pro.type == "jdbc" ? 2 : ''} ${pro.type == "oop" ? 2 : ''}
        ${pro.type == "function" ? 10 : ''}  
        ${pro.type == "2dArray" ? 10 : ''}
        </summary><ul></ul>`;
        container.appendChild(details);
        detailsMap[type] = details;
    }

    // Append the list item to the corresponding ul inside the details element
    const ul = detailsMap[type].querySelector("ul");
    ul.innerHTML += `<li><a id=${pro.index} class="item" data-type=${type}><span>(${type}) </span> ${pro.pnumber}. ${pro.programName}</a></li>`;
});



arr1.map(pro => {
    main_content.innerHTML += `
            <div class="one" id=${pro.index}>
                <h2>${pro.programName}</h2><br>

                <div class="code">
                    <button class="btns">Copy</button>

                    <code>
                        <pre>
                            ${pro.code}
                        </pre>

                    </code>

                </div>

                <br>
                <button class="outputbtn" style="cursor:none;padding:5px 20px;
                outline:none;">Output</button>
                <div class="output-box" style="padding: 10px;margin-top: 1rem;border: 1px solid grey;">
                    
                    <div>${pro.output}</p>
                </div>
            </div>
   
            `;
})


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






const sButton = document.querySelectorAll(".item");

//by default hiding <div class="one">
const display_none_oneClass = document.querySelectorAll(".one");
for (let i = 1; i < display_none_oneClass.length; i++) {
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


//closing details 
const summaries = document.querySelectorAll('summary');

summaries.forEach((summary) => {
    summary.addEventListener('click', closeOpenedDetails);
});

function closeOpenedDetails() {
    summaries.forEach((summary) => {
        let detail = summary.parentNode;
        if (detail != this.parentNode) {
            detail.removeAttribute('open');
        }
    });
}