const socket = io();

const app = document.querySelector(".app");
const wats_App = document.querySelector(".wats-App");


function save_Login_Button_Function() {

    const user_Name = document.getElementById("user-name-login").value;
    const mobile_Number = document.getElementById("mobile-number-login").value;
    //const mobile_Number_Boolean = Number.isInteger(mobile_Number);
    //const mobile_Number_Integer = parseInt(mobile_Number);
    //console.log(mobile_Number_Boolean);
    console.log(typeof mobile_Number);
    //console.log(typeof mobile_Number_Integer);
    console.log("User_Name : "+user_Name);
    console.log("mobile_Number : "+mobile_Number);

    if(user_Name.length===0&&mobile_Number.length===0){
        return;
    }

    if(mobile_Number!==10){
            wats_App.querySelector(".ptag").classList.add("show");
    }

    if(user_Name.length>0&&mobile_Number.length===10){
        wats_App.querySelector(".form").classList.remove("show");
        wats_App.querySelector(".chatting-page").classList.add("show");
    }

    document.getElementById("user-name-login").value = "";
    document.getElementById("mobile-number-login").value = "";

}

function save_Button_Function(){
    const user_Name = document.getElementById("user-name").value;
    const mobile_Number = document.getElementById("mobile-number").value;
    
    console.log("User_Name : "+user_Name);
    console.log("mobile_Number : "+mobile_Number);

    if(user_Name.length===0&&mobile_Number.length===0){
        return;
    }
    else if(user_Name.length>0&&mobile_Number.length===10){
        // app.querySelector(".form").classList.remove("show");
        // app.querySelector(".chatting-page").classList.add("show");
    }

    document.getElementById("user-name").value = "";
    document.getElementById("mobile-number").value = "";

    //Map Function

    const map = new Map();

    //Setting maps keys and values

    map.set(mobile_Number,user_Name);
    let names = map.get(mobile_Number);
    console.log(names);
    console.log(map);
    setting_A_Contacts_Names_In_Contacts_Div(names);
}


function send_Button_Function() {   
    const message = document.getElementById("message-input").value;
    console.log("Message : "+message);
    socket.emit("message",message);
    socket.emit()
    document.getElementById("message-input").value = "";
}


//Setting A Contacts-Names In Contacts-Div

function setting_A_Contacts_Names_In_Contacts_Div(name) {
    let p_Tag = document.createElement("p");
    let p_Tag_Names = document.createTextNode(name);
    p_Tag.appendChild(p_Tag_Names);
    const names_Div = document.getElementById("names-div");
    names_Div.appendChild(p_Tag);
}

// Show Saving Contacts Function

let boolean_Showing = false;
let count = 0;
let boolean_Not_Showing = false;
let re_Count = 0;

function show_saving_contacts () {

    count++;
    re_Count++;
    console.log("Count :"+count);
    console.log("Button_Clicked");

    if(count%2 !== 0){
        document.querySelector(".Border").classList.add("show-save-contacts");
        document.querySelector(".Select-Add-Contacts").classList.remove("show-ID-Add-Contacts-Icons");
        document.querySelector(".Select-IN-To").classList.add("show-IN-To-Button");
        boolean_Showing = true;
        console.log("It's Showing");
    }

    console.log(boolean_Showing);

    if(boolean_Showing===true && count%2===0){
        document.querySelector(".Select-IN-To").classList.remove("show-IN-To-Button");
        document.querySelector(".Select-Add-Contacts").classList.add("show-ID-Add-Contacts-Icons");
        document.querySelector(".Border").classList.remove("show-save-contacts");
        boolean_Not_Showing = true;
        console.log("It's Not Showing");
        console.log("Boolean_Not_Showing : "+boolean_Not_Showing);
    }

}