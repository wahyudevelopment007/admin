<?php /**
            * Team ID
            *
            *
            * LICENSE       :team-id.elyng.com
            * @package      :Team ID
            * @author       :Support +6285896630965
            * @copyright    :2016 - 2022 Team ID
            * @license      :https://team-id.elyng.com/
            * @version      :v1.1.0
            * @link         :https://team-id.elyng.com/ */
            
            $result = json_decode(file_get_contents('https://license.elyng.com//api/validate/host/'.$_SERVER['SERVER_NAME'].'/1'), true);

            if($result['status'] != 200) {
            $html = "<title>Website Dikunci</title>
<meta name='viewport' content='width=device-width, initial-scale=1' />
<link rel='shortcut icon' href='https://license.elyng.com/assets/img/teamid.png'>
<link rel='stylesheet' href='https://license.elyng.com/assets/css/license.css'>
</head>
<body>
	<div class='container'>
		<div class='media'>
			<h3>Alamat Website</h3>
			<h1>Konfirmasi Alamat Website melalui <a href='https://wa.me/6285896630965' style='text-decoration:none;color:#ffffff'>WhatsApp</a></h1>
			<p>belum memiliki izin untuk menggunakan Layanan ini</p>
			<p>Auto PHP Licenser Premium</p>
		</div>
		<div class='overlay'>
			<div id='particle-background' class='particle-background'><canvas class='particles-js-canvas-el' style='width: 100%; height: 100%;' width='1366' height='683'></canvas></div>
		</div>
	</div>
	<script src='https://license.elyng.com/assets/js/license.js'></script>
</body>
</html>
";
            $search = '<%returnmessage%>';
            $replace = $result['message'];
            $html = str_replace($search, $replace, $html);


            die( $html );

            }
            ?>
