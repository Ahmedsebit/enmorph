function send() {
        
    var email = document.getElementById('InputEmail').value;
    var name = document.getElementById('InputName').value;
    var phone = document.getElementById('InputPhoneNumber').value;
    var message = document.getElementById('InputMessage').value;

    var senders_name = "Name :".concat(name, '   ')
    var senders_phone = "Phone :".concat(phone, '   ')
    var sender = senders_name.concat(senders_phone)

    var senders_message = sender.concat('   ', message)
      Email.send({
    SecureToken : "083c6c17-457a-4f9c-a57e-c81b22e517c6",
    To : 'admin@enmorph.com',
    From : email,
    Subject : "Query from website",
    Body : senders_message,
    }).then(
      message => alert("Email sent successfully")
    );
  }