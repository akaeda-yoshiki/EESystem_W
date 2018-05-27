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
    switch (faze) {
        case 0://登録
            html += '<a href="input.html" class="tab_b">登録</a>';
            html += '<a href="comfirm.html" class="tab_g">登録者</a>';
            html += '<a href="real_time.html" class="tab_g">リアルタイム</a>';
            html += '<a href="search.html" class="tab_g">入退室データ</a>';
            break;
        case 1://確認
            html += '<a href="input.html" class="tab_g">登録</a>';
            html += '<a href="comfirm.html" class="tab_b">登録者</a>';
            html += '<a href="real_time.html" class="tab_g">リアルタイム</a>';
            html += '<a href="search.html" class="tab_g">入退室データ</a>';
            break;
        case 2://リアルタイム
            html += '<a href="input.html" class="tab_g">登録</a>';
            html += '<a href="comfirm.html" class="tab_g">登録者</a>';
            html += '<a href="real_time.html" class="tab_b">リアルタイム</a>';
            html += '<a href="search.html" class="tab_g">入退室データ</a>';
            break;
        case 3://検索
            html += '<a href="input.html" class="tab_g">登録</a>';
            html += '<a href="comfirm.html" class="tab_g">登録者</a>';
            html += '<a href="real_time.html" class="tab_g">リアルタイム</a>';
            html += '<a href="search.html" class="tab_b">入退室データ</a>';
            break;
        default:
            html += '<a href="input.html" class="tab_g">登録</a>';
            html += '<a href="comfirm.html" class="tab_g">登録者</a>';
            html += '<a href="real_time.html" class="tab_g">リアルタイム</a>';
            html += '<a href="search.html" class="tab_g">入退室データ</a>';
            break;
    }

    html += '<br>';

    document.write(html);

}