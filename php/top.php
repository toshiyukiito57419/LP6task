<?php 
    // テンプレートファイルを読み込み、変数を置換
    $templatePath = __DIR__ . '/../html/top.html';
    $template = file_get_contents($templatePath);

    // 出力
    echo $template;
?>