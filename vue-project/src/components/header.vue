<template>
    <header>
        <div class="header-inner">
            <a href="#home" class="logo-link">
            <img :src="Logotipo" alt="Logo" />
            </a>
   
            <button class="hamburger" :class="{ active: menuAberto }" @click="menuAberto = !menuAberto" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
         
            <nav :class="{ 'menu-ativo': menuAberto }">
                <ul @click="menuAberto = false">
                    <li>
                        <router-link to="/laboratorios" class="botao-nav">Laboratórios</router-link>
                    </li>
                    <li>
                        <router-link to="/biblioteca" class="botao-nav">Biblioteca</router-link>
                    </li>
                    <li>
                        <router-link to="/quadras" class="botao-nav">Quadras</router-link>
                    </li>
                    <li>
                        <router-link to="/salas" class="botao-nav">Salas de Aula</router-link>
                    </li>
                </ul>
            </nav>
        </div>

        <carroselheader/>
    </header>
</template>

<script setup>
import { ref} from 'vue';
import Logotipo from '@/assets/logotipo.png'
import carroselheader from '@/components/carroselheader.vue';
const hashPage = ref('home');
const menuAberto = ref(false);





</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    header {
        width: 100%;
        position: relative;
    }

    .header-inner {
        width: 100%;
        background-color: transparent;
        min-height: 4.2rem;
        color: white;
        z-index: 100;
        max-width: 1400px;
        padding: 0 clamp(0.5rem, 3vw, 2.5rem);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 20;
    }

    .logo-link {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        z-index: 101;
        background: transparent !important;
    }

    header img {
        height: 3rem;
        display: block;
        width: auto;
    }

   
    .hamburger {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        z-index: 101;
        gap: 0.4rem;
    }

    .hamburger span {
        width: 25px;
        height: 2.5px;
        background-color: white;
        border-radius: 2px;
        transition: all 0.3s ease;
        display: block;
    }

    .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
    .hamburger.active span:nth-child(2) { opacity: 0; }
    .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -6px); }

    header nav {
        flex: 1;
    }

    header nav > ul {
        height: 4.2rem;
        display: flex;
        list-style-type: none;
        justify-content: flex-end;
        gap: 2rem;
        margin: 0;
        padding: 0;
    }

   
    .botao-nav {
        text-decoration: none; 
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        
      
        height: 3rem;
        padding: 0 1.5rem;
        background-color: #3A7259;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        
        font-size: clamp(0.9rem, 1.6vw, 1rem);
        white-space: nowrap;
        transition: all 0.2s ease;
    }

   
    .botao-nav:hover,
    .botao-nav.router-link-active { 
        background-color: #014D83;
    }



    @media (max-width: 900px) {
        header { padding: 0 clamp(0.5rem, 4vw, 1.5rem); }
        header nav > ul { gap: 0.5rem; }
    }

    @media (max-width: 768px) {
        .hamburger { display: flex; }
        .header-inner { padding: 0 clamp(0.75rem, 3vw, 1.5rem); }


        header nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #3A7259;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            z-index: 99;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        header nav.menu-ativo {
            max-height: 600px;
        }

        header nav > ul {
            height: auto;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 0;
            padding: 0;
        }

       
        .botao-nav {
            height: auto;
            padding: clamp(0.8rem, 2vw, 1.2rem) clamp(1rem, 3vw, 1.5rem);
            justify-content: flex-start;
            white-space: normal;
            background-color: transparent; 
            border-radius: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .botao-nav:hover,
        .botao-nav.router-link-active {
            background-color: #014D83;
            padding-left: clamp(1.2rem, 4vw, 2rem);
        }
    }

    @media (max-width: 600px) {
        header { min-height: 3.5rem; }
        header img { height: 2.5rem; }
        .header-inner { padding: 0 clamp(0.5rem, 2vw, 1rem); gap: 1rem; }
        
        .botao-nav { padding: 0.75rem clamp(0.8rem, 2vw, 1.2rem); }
        
        .botao-nav:hover,
        .botao-nav.router-link-active {
            padding-left: clamp(1rem, 3vw, 1.5rem);
        }
    }

    @media (max-width: 480px) {
        header { min-height: 3.25rem; }
        header img { height: 2.2rem; }
        .hamburger { padding: 0.4rem; }
        .hamburger span { width: 22px; height: 2px; }
        
        .botao-nav {
            padding: 0.7rem 1rem;
            font-size: 0.9rem;
        }
    }
</style>