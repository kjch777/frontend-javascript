// 화면에 존재하는 모든 키 가져오기
//                   .클래스로 적힌 모든 내용을 가져오겠다.(".key") == class="key"
const keys = document.querySelectorAll(".key");

//                         keydown: 키보드의 키를 눌렀을 때를 뜻한다.
// 문서(화면전체).감지했다.키가눌러지는것을
document.addEventListener("keydown", function (e) {
  //                                        e: 이벤트 객체(이벤트 관련 정보가 모두 담겨있다.)
  //                                        e.key: 입력된 키를 확인한다.

  let 숫자값저장; // 인덱스 값을 저장할 변수

  switch (e.key) {
    case "q":
      숫자값저장 = 0;
      break;
    case "w":
      숫자값저장 = 1;
      break;
    case "e":
      숫자값저장 = 2;
      break;
    case "r":
      숫자값저장 = 3;
      break;
    default:
      return; // 함수 종료
  }

  // 숫자 번호와 일치하는 key 배열의 태그 색상 변경하기
  keys[숫자값저장].style.background = "black";
  keys[숫자값저장].style.color = "white";
});

document.addEventListener("keyup", function (e) {
  //                                        e: 이벤트 객체(이벤트 관련 정보가 모두 담겨있다.)
  //                                        e.key: 입력된 키를 확인한다.

  let 숫자값저장; // 인덱스 값을 저장할 변수

  switch (e.key) {
    case "q":
      숫자값저장 = 0;
      break;
    case "w":
      숫자값저장 = 1;
      break;
    case "e":
      숫자값저장 = 2;
      break;
    case "r":
      숫자값저장 = 3;
      break;
    default:
      return; // 함수 종료
  }

  // 숫자 번호와 일치하는 key 배열의 태그 색상 변경하기
  keys[숫자값저장].style.background = "white";
  keys[숫자값저장].style.color = "black";
});
