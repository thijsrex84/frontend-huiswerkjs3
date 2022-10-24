// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email){
    let mail1 = email.substring(email.indexOf("@"))
    return mail1.replace("@","")
}

console.log(getEmailDomain("n.eeken@novi-education.nl"))
console.log(getEmailDomain("thijsrexwinkel@pizza.nl"))

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail(email2){
    let mail= email2.substring(email2.indexOf("@"))
    let mail2=mail.replace("@","")

    if (mail2 ==="novi.nl"){
        console.log("Medewerker")
    }
    else if (mail2==="novi-education.nl"){
        console.log("Student")
    }
    else {
        console.log("Extern")
    }
    return email2
}

console.log(typeOfEmail("n.eeken@novi-education.nl"))
console.log(typeOfEmail("t.mellink@novi.nl"))
console.log(typeOfEmail("novi.nlaapjes@outlook.com"))
console.log(typeOfEmail("a.wiersma@outlook.com"))


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
function checkEmailValidity(email3){
    if (email3.includes("@")===true && email3.includes(",")===false && email3.endsWith(".")===false){
        console.log("email is valid")
    }
    else {
        console.log("email is not valid")
    }
    return email3
}

console.log(checkEmailValidity("n.eeken@novi.nl"))
console.log(checkEmailValidity("n.eeken@novi.nl."))
