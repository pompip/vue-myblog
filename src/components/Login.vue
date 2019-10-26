<template>
    <div class="login-box">
        <div class="login-center">

            <span class="login-title">登录</span>

            <form class="login-content"  v-on:submit.prevent="myLogin()">
                <label class="input-wrapper">
                    <input name="username" class="input" type="text" placeholder="用户名" v-model="username"/>
                </label>
                <label class="input-wrapper">
                    <input name="password" class="input" type="password" placeholder="密码" v-model="password"/>
                </label>
                <button class="Button" type="submit">登录</button>
            </form>
        </div>
    </div>
</template>
<script>
    import {mapActions} from "vuex";


    export default {

        methods: {
            ...mapActions(["login"]),
            loginSuccess() {
                this.$router.push({path: '/'})
            },
            myLogin() {
                this.login({
                    name:this.username,
                    password:this.password,
                    loginSuccess: this.loginSuccess
                });
            },
            change(isLoginPage) {
                this.isLoginPage = isLoginPage;
            }
        },
        data: () => {
            return {
                username: "",
                password: "",
            };
        }
    };
</script>

<style scoped>
    .login-box {
        height: 60vh;
        width: 40vm;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .login-center {
        padding: 10px;
        background-color: green;
        display: flex;
        flex-flow: column;
        align-items: center;
    }


    .login-title {
        flex-grow: 1;
        text-align: center;
        color: white;
    }

    .login-content {
        display: flex;
        flex-flow: column;
        align-items: center;
    }


    .input {
        flex: 1 1;
        padding: 0;
        overflow: hidden;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        background: transparent;
        border: none;
        resize: none
    }

    .input-wrapper {
        margin: 10px;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        width: 280px;
        height: 48px;
        padding: 4px 10px;
        font-size: 16px;
        background: #fff;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: background .2s, border .2s;
        transition: background .2s, border .2s;


    }

    .Button {
        width: 100%;
        color: white;
        display: inline-block;
        padding: 0 16px;
        font-size: 14px;
        line-height: 32px;
        text-align: center;
        cursor: pointer;
        background: none;
        border: 1px solid;
        border-radius: 3px;
    }

</style>
