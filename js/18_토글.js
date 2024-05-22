function 보여주기숨기기() {
  const 박스 = document.getElementById("토글박스");

  // 클래스 목록에 추가클래스 라는 클래스가 포함되어 있는지 확인
  if (박스.classList.contains("추가클래스")) {
    // 만약, 존재한다면
    박스.classList.remove("추가클래스"); // 추가클래스 지우기
  } else {
    // 만약, 존재하지 않는다면
    박스.classList.add("추가클래스"); // 추가클래스 추가하기
  }
}
