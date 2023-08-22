// const scrollElement = document.querySelector("#scroll");

// const handleScroll = () => {
//   if (window.innerWidth <= 420) return;

//   scrollElement.addEventListener("wheel", (e) => {
//     if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
//     e.preventDefault();
//     scrollElement.scrollLeft += e.deltaY;
//   });
// };

// handleScroll();

// window.addEventListener("resize", handleScroll);

const scrollElement = document.querySelector("#scroll");

const handleScroll = (e) => {
  if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
  e.preventDefault();
  scrollElement.scrollLeft += e.deltaY;
};

const handleResize = () => {
  if (window.innerWidth <= 760) {
    scrollElement.style.flexDirection = "column";
    scrollElement.removeEventListener("wheel", handleScroll);
  } else {
    scrollElement.style.flexDirection = "row";
    scrollElement.addEventListener("wheel", handleScroll);
  }
};

// 初期のリサイズハンドラの呼び出し
handleResize();

// ウィンドウリサイズイベントにリスナを追加
window.addEventListener("resize", handleResize);



const selectBox = document.querySelector('.selectbox select');
const rangeSlider = document.querySelector('#rs-range-line');
const shortParagraph = document.querySelector('.short');
const monthlyHours = document.querySelector('#monthly-hours');

shortParagraph.style.opacity = '0';

selectBox.addEventListener('change', function() {
  const selectedOption = selectBox.options[selectBox.selectedIndex].value;
  
  if (selectedOption !== '選択' && rangeSlider.value !== '0') {
    shortParagraph.style.opacity = '1';
  } else {
    shortParagraph.style.opacity = '0';
  }
});

rangeSlider.addEventListener('input', function() {
  const value = rangeSlider.value;
  const selectedOption = selectBox.options[selectBox.selectedIndex].value;
  
  if (selectedOption !== '選択' && value !== '0') {
    shortParagraph.style.opacity = '1';
  } else {
    shortParagraph.style.opacity = '0';
  }
});

rangeSlider.addEventListener('input', function() {
  const value = rangeSlider.value;
  monthlyHours.textContent = value;
});

// GSAPのCDNを追加している場合、以下のコードを使用できます
gsap.from(".fv-area", {
  x: -100, // 左からスライドイン
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.from(".robopat-logo", {
  X: -100, // 上からスライドイン
  opacity: 0,
  duration: 1,
  delay: 1,
});

gsap.from(".headline", {
  x: 100, // 右からスライドイン
  opacity: 0,
  duration: 1,
  delay: 1.5,
});

gsap.from(".description", {
  y: 100, // 下からスライドイン
  opacity: 0,
  duration: 1,
  delay: 2,
});



// ハンバーガーメニュー
const mobileMenuButton = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const overlay = document.getElementById('overlay');

const toggleMenu = () => {
  nav.classList.toggle('active');
  mobileMenuButton.classList.toggle('active');
  overlay.classList.toggle('active'); // オーバーレイのトグル
};

mobileMenuButton.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// $(function() {
//   $.scrollify({
//     section: ".fv-area, .reason-area, .case-area, .suport-area, .solve-area, .question-area, .inquery-area, .company-area",
//     scrollSpeed: 1100,
//     offset: 0,
//     setHeights: true,
//     setwidths: true,
//     before: function(sectionIndex) {
//       $('.pagination li').removeClass('active');
//       $('.pagination li').eq(sectionIndex).addClass('active');
//     }
//   });

//   $('.pagination li').eq(0).on('click', function() {
//     $.scrollify.move(0); // fv-areaに移動
//   });

//   $('.pagination li').eq(1).on('click', function() {
//     $.scrollify.move(1); // reason-areaに移動
//   });

//   $('.pagination li').eq(2).on('click', function() {
//     $.scrollify.move(2); // case-areaに移動
//   });

//   $('.pagination li').eq(3).on('click', function() {
//     $.scrollify.move(3); // suport-areaに移動
//   });
// });
