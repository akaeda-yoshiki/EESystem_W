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
            html += '<a href="comfirm.html" class="tab_g">確認/編集/削除</a>';
            html += '<a href="search.html" class="tab_g">検索</a>';
            break;
        case 1://確認
            html += '<a href="input.html" class="tab_g">登録</a>';
            html += '<a href="comfirm.html" class="tab_b">確認/編集/削除</a>';
            html += '<a href="search.html" class="tab_g">検索</a>';
            break;
        case 2://検索
            html += '<a href="input.html" class="tab_g">登録</a>';
            html += '<a href="comfirm.html" class="tab_g">確認/編集/削除</a>';
            html += '<a href="search.html" class="tab_b">検索</a>';
            break;
        default:
            html += '<a href="input.html" class="tab_g">登録</a>';
            html += '<a href="comfirm.html" class="tab_g">確認/編集/削除</a>';
            html += '<a href="search.html" class="tab_g">検索</a>';
            break;
    }

    html += '<br>';

    document.write(html);

}