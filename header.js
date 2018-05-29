var word = Array("新規登録", "登録者", "リアルタイム", "入退室データ");

// 各画面で共通部分
function write_header(faze) {
    var html = "";
    html += '<br>';
    html += '<system_name>';
    html += '入退室管理システム';
    html += '</system_name><br>';
    html += '<a style="margin-left : 540px">';
    html += '<a href="login.html" class="logout_btn">ログアウト</a>';
    html += '</a>';
    html += '<br>';
    html += '<br>';
    html += '<br>';
    switch (faze) {//引数によって選んでいる項目の淵を太枠で囲い、文字を青くする
        case 0://登録
            html += '<a href="input.html" class="tab_b">' + word[0] + '</a>';
            html += '<a href="user.html" class="tab_g">' + word[1] + '</a>';
            html += '<a href="real_time.html" class="tab_g">' + word[2] + '</a>';
            html += '<a href="data.html" class="tab_g">' + word[3] + '</a>';
            break;
        case 1://確認
            html += '<a href="input.html" class="tab_g">' + word[0] + '</a>';
            html += '<a href="user.html" class="tab_b">' + word[1] + '</a>';
            html += '<a href="real_time.html" class="tab_g">' + word[2] + '</a>';
            html += '<a href="data.html" class="tab_g">' + word[3] + '</a>';
            break;
        case 2://リアルタイム
            html += '<a href="input.html" class="tab_g">' + word[0] + '</a>';
            html += '<a href="user.html" class="tab_g">' + word[1] + '</a>';
            html += '<a href="real_time.html" class="tab_b">' + word[2] + '</a>';
            html += '<a href="data.html" class="tab_g">' + word[3] + '</a>';
            break;
        case 3://検索
            html += '<a href="input.html" class="tab_g">' + word[0] + '</a>';
            html += '<a href="user.html" class="tab_g">' + word[1] + '</a>';
            html += '<a href="real_time.html" class="tab_g">' + word[2] + '</a>';
            html += '<a href="data.html" class="tab_b">' + word[3] + '</a>';
            break;
        default:
            html += '<a href="input.html" class="tab_b">' + word[0] + '</a>';
            html += '<a href="user.html" class="tab_g">' + word[1] + '</a>';
            html += '<a href="real_time.html" class="tab_g">' + word[2] + '</a>';
            html += '<a href="data.html" class="tab_g">' + word[3] + '</a>';
            break;
    }

    document.write(html);//htmlに書き込み

}