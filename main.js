fetch("data.json")
.then((response)=>{
   return response.json();
}).then((data)=>{
    //  console.log(data);
    display_info(data.basics);

})
var bodyElement=document.querySelector("#root");
function display_info(info){
    let card=document.createElement("div");
    card.classList.add("card");
    let heading=document.createElement("h2");
    heading.textContent=info.name;
    bodyElement.append(card);
    card.append(heading);
    let role=document.createElement("hr");
    card.append(role);
    let line1=document.createElement("h2");
    line1.textContent=info.role;
    card.append(line1);
    let email=document.createElement("a");
    email.textContent=info.email;
    email.href="mailto:"+info.email;
    card.append(email);
    let br=document.createElement("br");
    card.append(br);
    let mobile_no=document.createElement("a");
    mobile_no.href="tel:"+info.mobile_no;
    mobile_no.textContent=info.mobile_no;
    card.append(mobile_no);
    let b=document.createElement("br");
    card.append(b);
    var button=document.createElement("a");
    button.textContent="view profile";
    button.classList.add("btn");
    card.append(button);
    
}