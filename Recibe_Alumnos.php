<?php
    $nombres = $_POST['nombres'];
    $apellidos = $_POST['apellidos'];
    $codigo = $_POST['codigo'];
    
?>
<div class="container">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Codigo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                
                <td><?php echo $nombres ?></td>
                <td><?php echo $apellidos ?></td>
                <td><?php echo $codigo ?></td>
            </tr>
        </tbody>
    </table>
</div>