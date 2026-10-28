console.log("complete");
console.log($(window).width());
console.log($(window).height());

let state = 0;
$(".Bomb").on("click", function () {
  if (state === 0) {
    console.log("상태 1: 창 1 등장");

    $(".Spear1").addClass("active"); // 창1 보이기
    state = 1; // 상태를 1로 변경
  } else if (state === 1) {
    // --- [현재 1 ➔ 2로 전환] ---
    console.log("상태 2: 창 2 등장 (창 1은 유지하거나 교체)");

    $(".Spear2").addClass("active"); // 창2도 함께 보이기 (혹은 창1을 끄고 싶다면 여기서 .removeClass("active") 가능)
    state = 2; // 상태를 2로 변경
  } else if (state === 2) {
    // --- [만약 2 상태에서 한 번 더 누르면 리셋하고 싶을 때] ---
    console.log("초기화: 모든 창 숨김");

    $(".Spear1, .Spear2").removeClass("active"); // 둘 다 숨기기
    state = 0; // 다시 0으로 초기화
  }
});

// 여기는 AI의 도움을 받았습니다.
// 처음에 감이 좀 안잡혀서 ai이 도움을 받아 만들었는데 수업 내용보면서 보니까 또 이해가 되더라고요? .bomb을 실행하고 조건문에 따라 상태가 바꿀때마다 각 클래스에 추가 클래스가 생겼다가 마지막에
// 원래 상태로 돌아가면서 클래스를 지웠다는 걸 이해하니까 재밌었습니다. 역시 이해해야 재밌네요! 
// 저의 푸념글을 읽어주실지는 모르겠지만 읽어주셔서 감사합니다. ( •̀ ω •́ )✧
