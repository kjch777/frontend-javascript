function sendMessage() {
  const inputbox = document.getElementById("user-input");
  const message = inputbox.value.trim(); // .trim() 은 공백 제거

  // 만약, 메시지가 공백일 경우 전송할 수 없게 만들고 싶다면
  if (message == "") return; // return; 을 추가하여, 아래 코드로 더 갈 수 없게 끝내버린 것
  // 자바스크립트에서는 코드가 한 줄일 경우, 중괄호 { } 를 작성해 주지 않아도 된다.

  메시지보여주기(message, "user");
  inputbox.value = ""; // input 값에 새로운 값으로 " " 을 넣어, 메시지 내용을 초기화한 것

  // 채팅봇 띄우기
  setTimeout(() => {
    메시지보여주기("저는 채팅봇입니다.", "bot");
  }, 1000); // 1초 뒤에 메시지 보여주기
}

function 메시지보여주기(message, sender) {
  const chatbox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");

  //                         div 클래스 이름
  //                            message
  //                                  user 또는 bot
  //                                                -message
  messageElement.classList.add("message", sender + "-message");
  messageElement.textContent = message; // 메시지 보여주기
  chatbox.appendChild(messageElement); // 보낸 내용 추가하기
}
