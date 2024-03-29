<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Gado de Ouro</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../css/style_system.css">
    <script src="https://unpkg.com/sweetalert2@9/dist/sweetalert2.all.js"></script>
</head>

<body>
    <div class="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div class="container">
            <div class="card login-card">
                <div class="row no-gutters">
                    <div class="col-md-5">
                        <img src="../../images/login.jpg" alt="login" class="login-card-img">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <div class="brand-wrapper">
                                <h1>Gado de <span style="color: goldenrod;">Ouro</span></h1>
                            </div>
                            <p class="login-card-description">Cadastre sua conta</p>
                            <form action="cadastro_usuarios.php" method="post">
                                <div class="form-group">
                                    <label for="email" class="sr-only">E-mail</label>
                                    <input required type="email" name="email" id="email" class="form-control" placeholder="E-mail">
                                </div>
                                <div class="form-group mb-4">
                                    <label for="password" class="sr-only">Senha</label>
                                    <input required type="password" name="password" id="password" class="form-control" placeholder="***********">
                                </div>
                                <button class="btn btn-info btn-block btn-lg" type="submit">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</body>

</html>