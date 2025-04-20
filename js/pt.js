// //側邊按鈕
window.addEventListener("scroll", function () {
    const btn = document.getElementById("asideButton");
    const footer = document.getElementById("footer");

    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 按鈕與footer之間的距離（30px）
    const safeDistance = 30;

    if (footerTop < windowHeight - 60) {
        // 快碰到footer了，調整距離
        const offset = windowHeight - footerTop + safeDistance;
        btn.style.bottom = `${offset}px`;
    } else {
        // 正常固定在 60px
        btn.style.bottom = "60px";
    }
});


// 店內菜單
const listOptions = document.querySelectorAll('.list_option input');
const mealsLists = document.querySelectorAll('.mealsList');

document.querySelector('.drinkList').classList.add('listActive');

listOptions.forEach((radio) => {
    radio.addEventListener('change', (e) => {
        const selectedList = e.target.parentElement.dataset.list;

        mealsLists.forEach((list) => {
            list.classList.remove('listActive');
        });

        document.querySelector(`.${selectedList}`).classList.add('listActive');
    });
});


$(".mealsList > .price > li").on('click', function () {
    let imgUrl = $(this).data('img')
    $(this).closest('.mealsList').find('img').attr('src', imgUrl);
    $(this).closest('.mealsList').find('li').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active')
})