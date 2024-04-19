let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function displayFormData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var state = document.getElementById("state").value;
  var zipCode = document.getElementById("zipCode").value;
  var phone = document.getElementById("phone").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var comment = document.getElementById("userComment").value;

  var result = `Name: ${name}<br>
                Email: ${email}<br>
                Address: ${address}<br>
                State: ${state}<br>
                Zip Code: ${zipCode}<br>
                Phone Number: ${phone}<br>
                Gender: ${gender}<br>
                Comment: ${comment}`;

  document.getElementById("formResult").innerHTML = result;
}

function calculateDueDate() {
  const lastMatingDateInput = document.getElementById("lastMatingDate");
  const lastMatingDate = new Date(lastMatingDateInput.value);
  
  const gestationPeriod = 63;
  const dueDate = new Date(lastMatingDate);
  dueDate.setDate(dueDate.getDate() + gestationPeriod);

  const resultElement = document.getElementById("result");
  resultElement.textContent = `The dog's due date is: ${dueDate.toDateString()}`;
}

function getAge() {
  const dobInput = document.getElementById("inputDob").value;
  const dob = new Date(dobInput);
  const currentDate = new Date();

  const yearDiff = currentDate.getFullYear() - dob.getFullYear();
  const monthDiff = currentDate.getMonth() - dob.getMonth();
  const dateDiff = currentDate.getDate() - dob.getDate();

  if (yearDiff < 0) {
      document.getElementById("currentAge").innerHTML = "Invalid Date";
  } else {
      document.getElementById("currentAge").innerHTML =
          `Puppies current age: ${yearDiff} years, ${monthDiff} months, and ${dateDiff} days.`;
  }
}

getAge();

function formatted(date = new Date()) {
  return [
      date.getFullYear(),
      short(date.getMonth() + 1),
      short(date.getDate())
  ].join("-");
}

function short(num) {
  return num.toString().padStart(2, "0");
}