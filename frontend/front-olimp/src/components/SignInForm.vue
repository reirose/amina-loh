<template>
  <div >
    <!--Навигация-->
    <nav class="navigation">
      <!--Переход на главную-->
      <div class="home_href" @click="$router.push({name: 'home'})">
        <img src="../assets/images/favicon1.png" />
      </div>
      <!--Переход на регистрацию-->
      <div><div class="register_href" @click="$router.push({name: 'register'})">Зарегистрироваться</div></div>
    </nav>
    <!--Подпись-->
    <div class="title">Войти</div>
    <form class="sign-up" @submit.prevent="checkForm">
      <!--Логин-->
      <div class="form-group">
        <label for="login">Логин:</label>
        <input
          id="login"
          class="form-control"
          :class="$v.form.login.$error ? 'is-invalid' : ''"
          v-model.trim="form.login"
        >
        <!--Предупреждение о неправильном вводе-->
        <p v-if=" !$v.form.login.required" class="invalid-feedback">
          Обязательное поле
        </p>
      </div>
      <!--Пароль-->
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input
          id="password"
          type="password"
          class="form-control"
          :class="$v.form.password.$error ? 'is-invalid' : ''"
          v-model.trim="form.password"
        >
        <!--Предупреждение о неправильном вводе-->
        <p v-if= "!$v.form.password.required" class="invalid-feedback">
          Обязательное поле
        </p>
        <p v-if="  !$v.form.password.minLength" class="invalid-feedback">
          Здесь должно быть больше 7-и символов
        </p>
      </div>
      <button type="submit" class="sign-up-btn">Войти</button>
    </form>
  </div>
</template>
  
  <script>
  
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'
  import {mapGetters} from 'vuex'
  
  export default {
    name: "sign_InForm",
    mixins: [validationMixin],
    data() {
      return {
        form: {
          login: '',
          password: '',
          repeatPassword: '',
          serverUrl: ''
        }
      }
    },
    computed:{
      ...mapGetters(['getLogin', 'getPasswords']), // получение из хранилища
    },
    // проверка формы
    validations: {
      form: {
        login: { required },
        password: { required, minLength: minLength(7) },
      }
    },
    methods: {
      async checkForm() {
        this.$v.form.$touch()
        if (!this.$v.form.$error) {
            // post to server
          console.log('Валидация формы прошла успешно')
          try{
            await fetch(this.serverUrl, {
              method: 'post',
              body: JSON.stringify({
                "username": this.form.login,
                "password": this.form.password
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            });

          }catch(e){
            console.log(e)
          }
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .form-control {
    width: 400px;
  }
  .form-check {
    margin-right: 10px;
  }
  button {
    margin-top: 15px;
  }
  </style>
  <style lang="scss" scoped>
  .form-control {
    width: 600px;
    height: 70px;
    font-size: 24px;
  }
  .navigation{
    height: 100%;
    display:flex;
  }
  .home_href{
    width:79px;
    height: 79px;
    margin-top:8px;
    margin-bottom:8px;
  }
  .register_href{
    width: 100px;
    display:table-cell;
    vertical-align: middle;
    font-size: 24px;
    line-height: 100px;
    color: #ffffff;
    font-family:'Roboto';
    text-align: center;
    border: 1px solid #ffffff;
  }
  .title{
    font-family:'Roboto';
    color: #ffffff;
    font-size: 48px;
    margin-left: 79px
  }
  .sign-up{
    margin-left:79px;
    font-size: 24px;
    color: #ffffff;
    font-family:'Roboto';
  }
  .sign-up-btn{
    width:260px;
    height: 70px;
    border-radius: 8px;
    background-color: #ffffff;
  }
  </style>