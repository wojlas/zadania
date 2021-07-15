const body = document.querySelector("body");
cities.forEach(el=> {
    const newA = document.createElement("a");
    newA.dataset.href = el.href;
    newA.classList.add("map-marker");
    newA.dataset.name = el.name;
    newA.dataset.population = el.population;
    newA.style = `left: ${el.map_x}px; top: ${el.map_y}px;`;
    body.appendChild(newA);
    newA.innerText = el.name
})

const newDiv = document.createElement("div");
    newDiv.classList.add("map-tooltip");
    newDiv.style = "left: -9999px; top: -9999px";

const getMarker = document.querySelectorAll(".map-marker");
getMarker.forEach(e=> {
    e.addEventListener("mouseover", el=> {
        newDiv.innerHTML = `
            <h2>${e.dataset.name}</h2>
            <div>Population: <strong>${e.dataset.population}</strong></div>
            `
        newDiv.style.left = `${el.pageX+30}px;`;
        newDiv.style.top = `${el.pageY+30}px;`;
        newDiv.style.display = "inline-block";
        body.append(newDiv);
    })
    e.addEventListener("mousemove", el=> {
        newDiv.style = `left: ${el.pageX+30}px; top: ${el.pageY+30}px;`;
    })
    e.addEventListener("mouseout", el=> {
        newDiv.innerHTML = "";
        newDiv.style.display = "none";
    })
})