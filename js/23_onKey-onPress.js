function 기능() {
  const 기능 = document.getElementById("영문이름");
  기능.value = 기능.value.toUpperCase();
  //                    .toUpperCase(): 입력된 영문자를 자동으로 대문자로 변경
  //                    .toLowerCase(): 입력된 영문자를 자동으로 소문자로 변경
}

function 엔터기능(event) {
  // 만약, Enter 키를 눌렀을 때
  if (event.key == "Enter") { // == 로 조건식을 넣었을 때 제대로 작동하지 않으면, === 을 사용해 보아야 한다.
    alert("입력한 내용이 성공적으로 전달되었습니다.");
  }
}
