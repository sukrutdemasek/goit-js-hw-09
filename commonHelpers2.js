import"./assets/modulepreload-polyfill-3cfb730f.js";let e={email:"",message:""},a=document.querySelector("#email"),t=document.querySelector("#message"),r=document.querySelector(".feedback-form");function s(){e.email=a.value,e.message=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}const l=JSON.parse(localStorage.getItem("feedback-form-state"));l&&(a.value=l.email||"",t.value=l.message||"");a.addEventListener("input",s);t.addEventListener("input",s);r.addEventListener("submit",m=>{m.preventDefault(),a.value.trim()===""||t.value.trim()===""?alert("Fill all fields, please"):(console.log(e),localStorage.clear(),a.value="",t.value="",e.email=a.value,e.message=t.value)});
//# sourceMappingURL=commonHelpers2.js.map
