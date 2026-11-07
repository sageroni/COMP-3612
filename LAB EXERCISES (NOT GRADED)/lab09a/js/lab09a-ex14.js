const paintings = JSON.parse(content);

document.addEventListener("DOMContentLoaded", () => {
    const template = document.querySelector('#sampleCard');
    const parent = document.querySelector('#parent');
    // loop thru each painting
    for (let pnt of paintings) {
        // here is the magic: making a clone of the template
        const clone = template.content.cloneNode(true);
        // and now we insert content into the clone
        const img = clone.querySelector("img");
        img.setAttribute("src",
        `images/paintings/${pnt.imageFileName}`);
        img.setAttribute("alt", `${pnt.title}`);
        const h2 = clone.querySelector("h2");
        h2.textContent = pnt.title;
        const h3 = clone.querySelector("h3");
        h3.textContent = pnt.firstName + ' ' + pnt.lastName;
        const h4 = clone.querySelector("h4");
        h4.textContent =
        `${pnt.gallery.name} (${pnt.yearOfWork})`;
        const p = clone.querySelector("p");
        p.textContent = pnt.details.excerpt;
        const btn = clone.querySelector("button");
        btn.dataset.painting = pnt.paintingID;
        btn.addEventListener('click', e => {
        alert(`You clicked on painting
        ${e.target.dataset.painting}`);
    });
    // and then add the clone to the document
    parent.appendChild(clone);
    }
});
