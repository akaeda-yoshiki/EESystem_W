var n = 0;
const AAA = "aa";
// window.alert('こんにちは、世界！');

document.write("処理選択" + n);

function select(mode) {
    switch (mode) {
        case 0:
            n = 10;
            location.href = "input.html";
            break;
        case 1:
            n = 20;
            break;
        case 2:
            n = 30;
            break;
    }

    document.write("JavaScriptはONです。" + n);

}

