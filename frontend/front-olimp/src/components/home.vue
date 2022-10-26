<template>
    <div>
        <div class="logo-container"></div>
        <div class="company">Военная Космическая Академия имени А.Ф. Можайского</div>
        <div class="title">Олимпиада 2022</div>
        <div class='register-btn' @click="$router.push({name: 'register'})">Зарегистрироваться</div>
        <div class='login-btn' @click="$router.push({name: 'login'})">Войти</div>  
    </div>
</template>
<script>
export default{
    name: "home"
}
</script>
<style scoped>

.logo-container{
    width: 262px;
    height: 296px;
    display: block;
    position:fixed;
    top: 5vh;
    margin-left: 50vw;
    background-size: 100% 100%;
    background-image: url(../assets/images/logo.png);
}
.company{
    width: 782px;
    height: 33px;
    position: fixed;
    top: 350px;
    left: 660px;
    text-align: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #FDF8F8;
}
.title{
    width: 793px;
    height: 63px;
    position: fixed;
    top: 450px;
    left: 670px;
    text-align: center;
    font-family: 'Roboto';
    font-size: 36px;
    color: #FDF8F8;
}
.register-btn{
    width:184px;
    height: 42px;
    padding-top:8px;
    position: fixed;
    top: 550px;
    left: 52vw;
    right: 48vw;
    border: solid 1px;
    text-align: center;
    border-radius: 8px;
    color: #D9D9D9;
    font-family: 'Roboto';
}
.login-btn{
    width:184px;
    height: 42px;
    padding-top:8px;
    position: fixed;
    top: 600px;
    left: 52vw;
    border: solid 1px;
    text-align: center;
    border-radius: 8px;
    color: #D9D9D9;
    font-family: 'Roboto';
}
</style>
