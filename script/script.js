let form = document.forms.createTable;
let output = document.querySelector("table");
let buttonCreateTable = document.querySelector("#buttonCreateTable");
buttonCreateTable.addEventListener("click", function () {
    addConstruct(createTable.tableCaption.value,
        createTable.tableRows.value,
        createTable.tableColumns.value);
    for(let i = 0; i < createTable.elements.length; i++) {
            const element = createTable.elements[i];
            if (element.value) element.value;
    }
});

    // build table caption, rows and columns
function addConstruct(caption, rows, columns) {
    // create caption 
    let captionTable = document.createElement("caption");
    captionTable.textContent = caption;
    // append caption in table
    output.appendChild(captionTable);
    // create rows
    for (let k = 0; k < rows; k++) {
        let tr = document.createElement("tr");
        // create columns
        for (let i = 0; i < columns; i++) {
            let td = document.createElement("td");
            td.innerHTML = `<input>`;
            // append columns in rows
            tr.appendChild(td);
            if (k === rows-1) {
                if(i === columns - 1) {
                td.style.borderRadius = "0px 0px 5px 0px";
                }
                if (i === columns - 2) {
                    td.style.borderRadius = "0px 0px 0px 5px";
                }
            }
        }
        // append rows and columns in table
        output.appendChild(tr);
    } 
    sectionOutput.append(saveButton);
}
// create save button table
let saveButton = document.createElement("input");
// set attribute
saveButton.setAttribute("type", "submit");
saveButton.setAttribute("value","Save in PDF");
// append save button in section output
saveButton.className = "save-button";
let sectionOutput = document.querySelector(".output");
saveButton.addEventListener("click", function () {
    const element = output;
    html2pdf()
        .from(element)
        .save();
});