//Fullscreen
document.addEventListener("DOMContentLoaded", function () {
  const fullscreenButton = document.getElementById("fullscreen-button");

  // Hàm để kích hoạt chế độ fullscreen
  function enterFullscreen() {
    // const element = document.documentElement;
    const element = document.getElementById("modelContainer");
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  // Hàm để thoát khỏi chế độ fullscreen
  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  // Xử lý sự kiện khi click vào nút fullscreen
  fullscreenButton.addEventListener("click", () => {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      // Nếu chưa ở chế độ fullscreen, thì vào fullscreen
      enterFullscreen();
    } else {
      // Nếu đang ở chế độ fullscreen, thì thoát fullscreen
      exitFullscreen();
    }
  });
});
