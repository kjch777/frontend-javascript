const phoneCheck = {
  phoneID: false,
};

const phoneID = document.querySelector("#phoneID");

phoneID.addEventListener("input", (e) => {
  const value = e.target.value;
  const span = e.target.nextElementSibling.nextElementSibling;

  if (value.trim().length == 0) {
    span.textContent = "전화번호를 입력하세요.";
    span.classList.remove("check", "error");

    e.target.value = "";

    phoneCheck["phoneID"] = false;
    return;
  }

  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;

  if (phoneRegex.test(value)) {
    span.textContent = "유효한 형식의 전화번호입니다.";
    span.classList.add("check");
    span.classList.remove("error");
    phoneCheck["phoneID"] = true;
  } else {
    span.textContent = "유효하지 않은 형식의 전화번호입니다.";
    span.classList.add("error");
    span.classList.remove("check");
    phoneCheck["phoneID"] = false;
  }
});

const birthCheck = {
  birthID: false,
};

const birthID = document.querySelector("#birthID");

birthID.addEventListener("input", (e) => {
  const value = e.target.value;
  const span = e.target.nextElementSibling.nextElementSibling;

  if (value.trim().length == 0) {
    span.textContent = "생년월일을 입력하세요.";
    span.classList.remove("check", "error");

    e.target.value = "";

    birthCheck["birthID"] = false;
    return;
  }

  const birthRegex =
    /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

  if (birthRegex.test(value)) {
    span.textContent = "유효한 형식의 생년월일입니다.";
    span.classList.add("check");
    span.classList.remove("error");
    birthCheck["birthID"] = true;
  } else {
    span.textContent = "유효하지 않은 형식의 생년월일입니다.";
    span.classList.add("error");
    span.classList.remove("check");
    birthCheck["birthID"] = false;
  }
});
