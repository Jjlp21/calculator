// create object to put in structure of information from given data

let objData = {
    page: 1,
    rows: 10
}

//create main div
let main = document.createElement("div");
main.innerHTML="PAGINATION TASK"
main.setAttribute("id","main");
document.body.append(main);

//create table, thead, tr, and ths
let table = document.createElement("table");
let thead = document.createElement("thead");
let tr = document.createElement("tr");

//give th values in innerHTML
let th1 = document.createElement("th");
th1.innerHTML="ID"
let th2 = document.createElement("th",);
th2.innerHTML="NAME"
let th3 = document.createElement("th",);
th3.innerHTML="EMAIL"

//append table to main, thead to table, tr to thead, ths to tr.
tr.append(th1,th2,th3);
thead.append(tr);
table.append(thead);
main.append(table);

//get data from url
let jsonData = new XMLHttpRequest();

try {
    jsonData.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    jsonData.send();

    //declare an empty array to add details and put in out objData
    let pageData = [];

    jsonData.onload = function(){
        let data = JSON.parse(this.response);

        //iterare over each element of data
        data.forEach((value)=>{

            //declare empty object to fill with data
            let customerDetails = {};

            //take all values to empty object using keys
            customerDetails.id = value.id;
            customerDetails.name = value.name;
            customerDetails.email = value.email;

            //push that object empty array
            pageData.push(customerDetails);

        })

        //create new prop in our objData with all the data as its value
        objData.pageData = pageData;
        
        //call function to load pagination which takes objData prop and true as parameters 
        loadPagination(objData.pageData,objData.page,objData.rows,true);
    };
} 
catch (error) {
    console.error(error);
}

//create function for grouping data for a page
function loadPagination(pageData,page,rows,isLoadButton){

    // 0th index = 1st position
    let firstRecord = (page - 1) * rows;

    // 10th index = 11th position
    let lastRecord = page * rows;

    //slice will return 1st to 10th position and store in customerData
    let customerData = pageData.slice(firstRecord,lastRecord);

    //call function to load table 
    loadTable(customerData);

    //if true then call function to load button passing the datas length by num of rows
    if(isLoadButton){
        
        loadButton(pageData.length/rows);
    }
}

//defining the function to load the table
function loadTable(data){

    //create element tbody and append to table
    let tbody = document.createElement("tbody");
    tbody.setAttribute("id","tablebody");
    
    //for each value of data create rows and insert tds with required values in innerHTML and append to tbody
    data.forEach((value)=>{

        let tr = document.createElement("tr");

        let tdID = document.createElement("td");
        tdID.innerHTML = value.id;

        let tdName = document.createElement("td");
        tdName.innerHTML = value.name;

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = value.email;

        tr.append(tdID,tdName,tdEmail);
        tbody.append(tr);
    })

    table.append(tbody);
}

//defining the function to load the buttons, datalength/rows will be passed to counts
function loadButton(counts){

    //create div to put in all buttons
    let buttondiv = document.createElement("div");
    buttondiv.setAttribute("id","button");

    //create first button
    let firstButton = document.createElement("button");
    firstButton.innerHTML ="First";
    firstButton.setAttribute("class","btn btn-primary");
    buttondiv.append(firstButton);

    //addeventlistener to the button and pass the event and a function to be executed
    firstButton.addEventListener("click",()=>reload(1)); 
 
    //create previous button
    let prevButton = document.createElement("button");
    prevButton.innerHTML ="Previous"
    prevButton.setAttribute("class","btn btn-primary");
    buttondiv.append(prevButton);

     //addeventlistener to the button and pass the event and a function to be executed
    prevButton.addEventListener("click",()=>{
        
        //if altready @pg1 stay there else go a page back
        if (objData.page === 1)
            reload(1);
        else
            reload(objData.page - 1);
    });

    //use forloop to create numeric buttons
    for(let count = 1; count<= counts; count++){
        let button = document.createElement("button");
        button.innerHTML=count;
        button.setAttribute("class","btn btn-primary");
        button.addEventListener('click',()=>reload(count));
        buttondiv.append(button);
    } 

    //create next button
    let nextButton = document.createElement("button")
    nextButton.innerHTML="Next"
    nextButton.setAttribute("class","btn btn-primary");
    buttondiv.append(nextButton);

    //addeventlistener to the button and pass the event and a function to be executed
    nextButton.addEventListener("click",()=>{

        //if altready last page stay there else go to next page
        if (objData.page === Math.ceil(objData.pageData.length/objData.rows))
            reload(objData.page);
        else
            reload(objData.page + 1);
    });

    //create last button
    let lastButton = document.createElement("button")
    lastButton.innerHTML="Last";
    lastButton.setAttribute("class","btn btn-primary");
    buttondiv.append(lastButton);

    //addeventlistener to the button and pass the event and a function to be executed
    lastButton.addEventListener("click",()=>reload(objData.pageData.length/objData.rows)); 

    main.append(buttondiv);  
}

//function to decide the page to be loaded on clicking particular count
function reload(count){
    objData.page = count;
    let tableBody = document.getElementById("tablebody");
    tableBody.remove();
    loadPagination(objData.pageData,objData.page,objData.rows,false);
}

