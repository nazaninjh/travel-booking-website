import"../css/style.css";const formSubmitBtn=document.querySelector(".header-form-submit-btn"),addClassToForm=e=>{const t=document.querySelector(".header-package-form"),n=Array.from(t.querySelectorAll(".country-field"));for(let e=0;e<n.length;e++)n[e].value.length<=0||n[e].value.includes("exp")?(n[e].classList.remove("is-required"),n[e].classList.add("is-invalid")):(n[e].classList.remove("is-required"),n[e].classList.add("is-valid"))};formSubmitBtn.addEventListener("click",addClassToForm);const addDestinationBtn=document.querySelector(".header-add-destination-btn");function addDestination(e){e.preventDefault(),document.getElementById("second-destination"),addDestinationBtn.insertAdjacentHTML("beforebegin",' <div class="form-floating mb-3">\n    <input class="form-control is-required country-field" list="datalistOptions"  required\n     id="added-destination"\n     placeholder="exp: Lauterbrunen"\n     value="exp: Lauterbrunen">\n    <label for="added-destination" class="form-label">\n      Enter destination (country, region or city)\n    </label>\n    </div>\n    <datalist id="datalistOptions">\n    <option value="San Francisco">\n    <option value="New York">\n    <option value="Seattle">\n    <option value="Los Angeles">\n    <option value="Chicago">\n    </datalist>')}addDestinationBtn.addEventListener("click",addDestination);const dateContainer=document.querySelector(".date-form-cont"),date=dateContainer.querySelector(".date"),dateRangeTxt=date.querySelector(".date-range-txt"),startDateBtn=dateContainer.querySelector(".header-start-date"),endDateBtn=dateContainer.querySelector(".header-end-date");startDateBtn.addEventListener("click",(()=>{startDateBtn.remove(),dateRangeTxt.insertAdjacentHTML("afterend",'<input type="date" name="startDate" id="start-date">\n    <img src="./pics/form-arrow-vector.png">')})),endDateBtn.addEventListener("click",(()=>{endDateBtn.remove(),date.insertAdjacentHTML("beforeend",'<input type="date" name="endDate" id="end-date">')}));