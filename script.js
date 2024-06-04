function showContent(section){
    const contents = document.querySelectorAll(`.content_container`);
    contents.forEach(content => content.style.display="none");

    document.getElementById(`${section}-content`).style.display= "block";

    const navi = document.querySelectorAll(`.nav`);
    navi.forEach(navigation => navigation.style.color="black");

    // navi.addEventListener("mouseenter",function(){navi.style.color="red"});
    navi.forEach(navigation => navigation.style.textDecoration="none");

    // const highlight = document.querySelectorAll(`.nav_container a[href="#${section}"]`);
    // highlight.addEventListener("mouseenter",function(){
    //     highlight.style.color="red"
    // });

    document.getElementById(section).style.color= "blue";
    document.getElementById(section).style.textDecoration= "underline";
    document.getElementById(section).style.textDecorationColor= "blue";
    document.getElementById(section).style.textDecorationThickness= "4px";
}

document.addEventListener(`DOMContentLoaded`,() => {
    showContent(`portfolio`);
});

function copyPhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber").textContent;
    navigator.clipboard.writeText(phoneNumber).then(function () {
        alert('Phone number copied to clipboard!');
    }, function (err) {
        console.error('Could not copy text: ', err);
    });
}