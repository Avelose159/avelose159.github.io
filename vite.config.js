import { defineConfig } from 'vite';

export default defineConfig({
    // 리포지토리 이름이 'username.github.io'라면 '/'
    // 리포지토리 이름이 'portfolio'라면 '/portfolio/'로 설정
    base: '/',
});