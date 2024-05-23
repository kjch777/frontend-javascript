const phoneCheck = {
  phoneID: false, // 뒤에 또 다른 코드가 없는데 , 를 작성해도 오류가 발생하지 않는다.
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

  // 정규식을 /^d{11}$/; 형식으로 작성하면, 숫자만 11자리를 입력하라는 의미이다.
  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/; // 하이픈 - 을 빼고 입력하게 하려면, /^d{11}$/; 형식으로 작성하면 된다.
  // /^ 정규식 시작
  // \d 는 숫자 0 ~ 9 를 의미한다.
  // {3} 은 세자리 숫자를 의미한다. {3, 4} 는 세자리 또는 네자리의 숫자를 의미한다.
  // - 은 하이픈을 넣어달라는 의미이다.
  // $/; 정규식 종료

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
  birthID: false, // 이 코드를 위에 phoneCheck 에 합쳐도 상관없이 정상적으로 실행된다.
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
  //  /^ 정규식 시작
  // (19|20) 은 19 또는 20 만 입력받겠다는 의미의 코드이다. ◀ 19nn년 또는 20nn년
  // \d 는 숫자 0 ~ 9 를 의미한다.
  // {2} 는 숫자 두자리만 입력받겠다는 의미의 코드이다.
  // - 하이픈
  // (0[1-9]) 는 01 ~ 09월까지
  // | 또는(or)
  // (1[0-2]) 는 10 ~ 12월까지
  // - 하이픈
  // (0[1-9]) 01 ~ 09 일
  // | 또는
  // ([1-2][0-9]) 10 ~ 29 일
  // | 또는
  // (3[0-1]) 30 ~ 31 일
  // $/; 정규식 종료

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
