var partners = [
    { logo: 'images/partner_1.svg' },
    { logo: 'images/partner_2.png' },
    { logo: 'images/partner_3.png' },
    { logo: 'images/partner_4.png' },
    { logo: 'images/partner_5.png' },
    { logo: 'images/partner_5.svg' },
    { logo: 'images/partner_6.png' },
    { logo: 'images/partner_7.png' },

];

var partnersDiv = document.getElementById('partners');
partners.forEach(function(partner) {
    var div = document.createElement('div');
    div.className = 'partner-card';
    var img = document.createElement('img');
    img.src = partner.logo;
    img.alt = partner.name;
    var h3 = document.createElement('h3');
    h3.textContent = partner.name;
    div.appendChild(img);
    div.appendChild(h3);
    partnersDiv.appendChild(div);
});

  function validateForm() {
            var name = document.querySelector('.name-input').value;
            var email = document.querySelector('.email-input').value;
            var message = document.querySelector('.msg-input').value;
          

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return false;
            }

            return true;
        }



