const name = document.querySelector("#name");
const age = document.querySelector("#age");
const profession = document.querySelector("#profession");
const gmail = document.querySelector("#gmail");
const profileBody = document.querySelector(".profileBody");
const submitBtn = document.querySelector(".submit");

// window.addEventListener("DOMContentLoaded", ()=>{

// })

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    getValueFromInput();
})

function getValueFromInput(){
    if(name.value === "" || age.value === "" || profession.value === "" || gmail.value === ""){
        alert("input is empty")
    }else{
        let profile ={
                name : name.value,
                age: age.value,
                profession: profession.value,
                gmail: gmail.value,
                date: getCreatedTime()
            }
        showingValueToUi(profile)
        saveDataTolocalStorage(profile)
    }
}

function showingValueToUi(profile){
        const createdElements = `
        <div class="profileItems">
            <P>name : ${profile.name} <span class="time">${profile.date}</span></P>
            <P>age : ${profile.age}</P>
            <P>profession : ${profile.profession}</P>
            <P>gmail: ${profile.gmail}</P>
        </div>
    `
    profileBody.innerHTML += createdElements;
}

function saveDataTolocalStorage(profile){
    let data;
    if(localStorage.getItem("items")){
        data = JSON.parse(localStorage.getItem("items"))
    }else{
        data = []
    }
    data.push(profile)
    localStorage.setItem("items", JSON.stringify(data))
    
}
// console.log(localStorage.getItem("items"))
function getDataFromStorage(){
    let data;
    if(localStorage.getItem("items")){
        data = JSON.parse(localStorage.getItem("items"))
    }else{
        data = []
    }
    let formatedData = '';
    for(let i = 0; i < data.length; i++){
        showingValueToUi(data[i])
    }
}
getDataFromStorage()

function getCreatedTime(){
    const getDateTime = new Date();
    let date = getDateTime.getDate();
    let month = getDateTime.getMonth();
    let hours = getDateTime.getHours();
    let minutes = getDateTime.getMinutes();
    let seconds = getDateTime.getSeconds();
    date = (date < 10) ? "0" + date : date;
    month = (month < 10) ? "0" + month : month;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let formatedData = getDateTime.getFullYear() + `-${month}-${hours}-${minutes}-${seconds}`
    return formatedData
}


