function printpdf() {
    var content = document.getElementById("resume");

    // Clone the content to avoid modifying the original DOM
    var contentClone = content.cloneNode(true);

    // Remove unnecessary elements from the clone
    var buttons = contentClone.querySelectorAll("#print button");
    buttons.forEach(button => {
        button.remove();
    });

    var checkboxes = contentClone.querySelectorAll(".input-checkbox");
    checkboxes.forEach(checkbox => {
        checkbox.remove();
    });

    html2pdf(contentClone, {
        html2canvas: { scale: 1, logging: true, dpi: 500 }
    });
}

  function addedu() {
    const head = document.createElement('div');
    document.getElementById("education").appendChild(head);
    head.innerHTML = ('<div class="edublock"><span><input type="checkbox" class="input-checkbox"></span><span class="education-head" contenteditable="true">YOUR DEGREE</span><div ><span contenteditable="true">Institute name</span> - <span contenteditable="true">Passing Year</span></div></div>');
    saveresume();
  }
  function remedu(event) {
    let val = 0;
    let empty = true;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }
  
  
  function addskill() {
    const head = document.createElement('div');
    document.getElementById("skills").appendChild(head);
    head.innerHTML = ('<div class="skill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>   <span contenteditable="true">write your skill here</span></div>');
    saveresume();
  }
  
  function remskill(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }
  
  
  function addLang() {
    const head = document.createElement('div');
    document.getElementById("languages").appendChild(head);
    head.innerHTML = ('<div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">LANGNAME</span> - <span contenteditable="true">level u know</span></div>');
    saveresume();
  }
  function remLang(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }
  
  
  function addAch() {
    const head = document.createElement('div');
    document.getElementById("achievement").appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your achievement</span></div>');
    saveresume();
  }
  function remAch(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }
  
  
  function addInt() {
    const head = document.createElement('div');
    document.getElementById("interest").appendChild(head);
    head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write interest</span></div>');
    saveresume();
  }
  function remInt(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }
  
  let maxNewSection = 1;
  function addsec() {
    if (maxNewSection < 2) {
        const head = document.createElement('div');
        document.getElementById("newsec").appendChild(head);
        if (maxNewSection === 0) {
            head.innerHTML = ('<div><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }
        else {
            head.innerHTML = ('<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>');
        }
  
        maxNewSection = maxNewSection + 1;
    }
    else {
        alert("Atmost 2 NEW SECTION can be added!")
  
    }
    saveresume();
  }
  function remsec(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val = 1;
                maxNewSection = maxNewSection - 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("Please select the checkboxes to delete the required field!")
    }
    saveresume();
  }
  
  function saveresume() {
    var sec = document.getElementById("print");
    value1 = sec.innerHTML;
    var info = document.getElementById("custinfo");
    info.value = value1;
  }
  