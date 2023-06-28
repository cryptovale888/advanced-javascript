
function validate(){
    var phoneNumber = document.getElementById('phone-number');
    var postalCode = document.getElementById('postal-code');

    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var postalRGEX = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    var phoneResult = phoneRGEX(phoneNumber);
    var postalResult = postalRGEX(postalCode);

    alert("phone:"+phoneResult + ", postal code: "+postalResult);

    return false;
}