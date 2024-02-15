const nameVal = () => {
  let name = prompt("Iltimos ismingizni kiriting");

  if (Number(name)) {
    alert("Ism xato kiritildi");
  }
  if (name.length >= 15) {
    alert("Bu juda uzun ism!");
  }
  if (name == "") {
    alert("Ism uchun joy bo'sh");
  } else {
    let nameText = (document.querySelector(".col1").innerHTML = name);
  }
};

const surnameVal = () => {
  let surName = prompt("Iltimos familiyangizni kiriting");
  if (Number(surName)) {
    alert("Familiya xato kiritildi");
  }
  if (surName.length >= 20) {
    alert("Bu juda uzun familiya!");
  }
  if (surName == "") {
    alert("Familiya uchun joy bo'sh");
  } else {
    let surNameText = (document.querySelector(".col2").innerHTML = surName);
  }
};

const ageVal = () => {
  let ageName = +prompt("Iltimos yoshingizni kiriting");

  if (ageName <= 0 || ageName > 200) {
    alert("Yosh notogri kiritildi");
    return false;
  } else {
    let ageText = (document.querySelector(".col3").innerHTML = ageName);
  }
};

const emailVal = () => {
  let emailAddressName = prompt("Iltimos elektron manzilingizni kiriting");
  let emailText = (document.querySelector(".col4").innerHTML =
    emailAddressName);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
};

let nameLocal = nameVal();
let surnameLocal = surnameVal();
let ageLocal = ageVal();
let emaillocal = emailVal();

const localSaver = () => {
  let obj = {
    name: nameLocal,
    Surname: surnameLocal,
    age: ageLocal,
    email: emaillocal,
  };
  localStorage.setItem("UserInfo", JSON.stringify(obj));
};

localSaver();
