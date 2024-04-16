let slideIndex = 1;
showSlides(slideIndex);
setInterval(autoChangeSlide, 8000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

function autoChangeSlide() {
    plusSlides(1);
  }

function showDetails(event) {
  var pictureBox = event.target.closest('.picture-box');
  var paragraphs = pictureBox.querySelectorAll('p');
  var img = pictureBox.querySelector('img');
  var button = pictureBox.querySelector('button');
  paragraphs.forEach(function(p) {
    p.style.display = 'block';
  });
  img.style.display = 'none';
  button.style.display = 'none';
  pictureBox.style.overflow = 'scroll';
}

function showPhoto(event){
  var pictureBox = event.target.closest('.picture-box');
  var paragraphs = pictureBox.querySelectorAll('p');
  var img = pictureBox.querySelector('img');
  var button = pictureBox.querySelector('button');
  paragraphs.forEach(function(p) {
    p.style.display = 'none';
  });
  img.style.display = 'block';
  button.style.display = 'block';
  pictureBox.style.overflow = 'hidden';
}


function passValue(articleId) {
  var pictureBox = document.getElementById(articleId);
  var h3Text = pictureBox.querySelector('h3').innerText;
  var pText = pictureBox.querySelector('p').innerText;
  var imgSrc = pictureBox.querySelector('img').src;

  var url = 'article.html?h3=' + encodeURIComponent(h3Text) +
            '&p=' + encodeURIComponent(pText) +
            '&img=' + encodeURIComponent(imgSrc);

  window.open(url, '_blank');
}

function showMore(id){
  var item = document.getElementById(id);
  var paragraphs = item.querySelectorAll('p');
  var button = item.querySelectorAll('button');
  var date = item.getElementsByClassName('calendar-date');
  var content = item.getElementsByClassName('calendar-content');
  if (button[0].innerText === 'Show Details') {
    paragraphs.forEach(function(p) {
      p.style.display = 'block';
      p.style.color = 'black';
    });
    button[0].innerText = 'Close';
    date[0].style.transition = 'transform 0.5s ease-out';
    date[0].style.transform = 'translateX(-100%)';
    content[0].style.transition = 'transform 0.5s ease-out';
    content[0].style.transform = 'translateX(-30%)';
  }
  else if (button[0].innerText === 'Close') {
    paragraphs.forEach(function(p) {
      p.style.display = 'none';
    });
    button[0].innerText = 'Show Details';
    date[0].style.transition = 'transform 0.5s ease-in-out';
    date[0].style.transform = 'translateX(0%)';
    content[0].style.transition = 'transform 0.5s ease-in-out';
    content[0].style.transform = 'translateX(0%)';
    return;
  }
}

function submitForm() {
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var dob = document.getElementById('dob').value;
  var type = document.querySelector('input[name="type"]:checked');
  var file = document.querySelector('input[type="file"]').files[0];

  if (firstName && lastName && dob && type && file) {
    alert('The details have been sent');
    firstName.value = '';
    lastName.value = '';
    dob.value = '';
    if (type) type.checked = false;
    file.value = '';
  } else {
    alert('Please fill in all the details');
  }
}