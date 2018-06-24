document.forms.form_user.onsubmit = function() {
    var newuser = { name: this.field_name.value,
                    surname: this.field_surname,
                    company: this.field_company,
                    email: this.field_email,
                    telephone: this.field_phone,
                    message: this.field_txt };
  
    fetch("http://kitan.pl/pb/data/api.php", {
      method: 'post',
    //   headers: {'Content-Type': 'application/json'},
      body:newuser
    })
    .then(response => response.json())
    .then(user => {
      console.log(user);
      document.getElementById("form_out").textContent = JSON.stringify(user);
  
    });
    return false;
  }