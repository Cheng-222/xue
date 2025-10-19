let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "？你认真的吗…", 
    "要不再想想？", 
    "不许选这个！ ", 
    "我会很伤心…", 
    "不行:("
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，限制最大缩放，避免溢出
    let yesSize = Math.min(1 + (clickCount * 1.2), 3.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，限制最大位移，避免在小屏溢出
    let maxShift = Math.max(80, Math.floor(window.innerWidth * 0.25));
    let noOffset = Math.min(clickCount * 50, maxShift);
    noButton.style.transform = `translateX(${noOffset}px)`;

    // 图片和文字上移，限制最大上移距离，避免溢出屏幕
    let maxUp = Math.max(120, Math.floor(window.innerHeight * 0.22));
    let moveUp = Math.min(clickCount * 25, maxUp);
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "images/shocked.png"; // 震惊
    if (clickCount === 2) mainImage.src = "images/think.png";   // 思考
    if (clickCount === 3) mainImage.src = "images/angry.png";   // 生气
    if (clickCount === 4) mainImage.src = "images/crying.png";  // 哭
    if (clickCount >= 5) mainImage.src = "images/crying.png";  // 之后一直是哭
});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!就知道你超级有品味!! ( >᎑<)♡︎ᐝ</h1>
            <img src="images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});