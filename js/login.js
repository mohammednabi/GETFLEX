let SignInForm = document.getElementById("sign-in");
let SignUpForm = document.getElementById("sign-up");

const SignInBtn = document.querySelector(".sign-in-btn");
let SignUpBtn = document.querySelector(".sign-up-btn");
let SignUpBtn1 = document.querySelector("#sign-up-btn1");


SignInBtn.addEventListener("click", function ()
{
    SignInBtn.classList.add("active");
    SignUpBtn.classList.remove("active");
    
    if (SignInBtn.classList.contains("active"))
    {
        SignInForm.style.display = "block";
        SignUpForm.style.display = "none";
    }
})


    SignUpBtn.addEventListener("click", function ()
    {
        SignUpBtn.classList.add("active");
        SignInBtn.classList.remove("active");

        if (SignUpBtn.classList.contains("active"))
        {
            SignInForm.style.display = "none";
            SignUpForm.style.display = "block";
        }
    });




if (SignUpBtn1.classList.contains("clicky"))
{
      SignUpBtn.classList.add("active");
      SignInBtn.classList.remove("active");

      if (SignUpBtn.classList.contains("active")) {
        SignInForm.style.display = "none";
        SignUpForm.style.display = "block";
      }
}




