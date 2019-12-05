
                                                        // Start add new li "Company"
let a = document.createElement("li");
    a.className = "ba-breadcrumbs__item";

let b = document.querySelector('.ba-breadcrumbs');
    b.appendChild(a);

let c = document.createElement("a");
    c.href = "#";
    c.className = "ba-breadcrumbs__link";
    c.innerText = "Company";
    a.appendChild(c);
                                                        // Finish add new li "Company"
                                                        
                                                        
                                                        // Start counting quantity h3


let g = document.querySelectorAll("h3");
    for (let i = 0; i < g.length; i++){
        g[i].innerText += "" + i}

                                                      // finish Counting quantity "h3"