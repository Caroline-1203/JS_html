<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>JS</title>
</head>

<body>
    <p>Документ</p>
    <script language="JavaScript">
        let p = prompt("Как вас зовут?");

        function showmessage() 
        {
            let message = 'Привет, ' + p;
            alert(message);
        }

        showmessage();
    </script>
    <p>Выходим обратно в HTMl</p>
</body>

</html>
