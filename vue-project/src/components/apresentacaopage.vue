<template>

<section>
    <figure>
        <img :src="url" :alt="descricao">
    </figure>
    <p>{{ descricao }}</p>
   
</section>

</template>
<script setup>
defineProps({
  descricao: String, 
  url : String
})
</script>
<style scoped>
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');


*{
  font-family: 'Poppins',sans-serif;
}
    section{
        position: relative;
        gap: 1rem;
        display: flex;
        margin: 0 auto;
        max-width: 1400px;
        width: 100%;
        min-height: 30rem; /* altura mínima */
  height: auto;      /* deixa crescer */
        padding: 4rem 2rem;
        background-image: url('@/assets/fundo_apresentacao.png');
        background-size:100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        box-sizing: border-box;
        justify-content:center;
        align-items: flex-start;

    }

    figure{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 100%;
            height: auto;
            max-width: 500px;
        }
    }


    p {
        font-size: clamp(0.95rem, 2vw, 1.1rem);
        color: #333;
        line-height: 1.6;
        margin: 0;
        width:50%;
          white-space: pre-line;
        text-align: left;
    }

   


    /* Tablet (max-width 768px) */
    @media (max-width: 768px) {
        section {
            flex-direction: column;
            gap: 2rem;
            padding: 0 clamp(0.5rem, 3vw, 2.5rem);
        }


        section & p {
            width: 100%;
        }





        p {
                        font-size: clamp(0.85rem, 1.6vw, 0.95rem);
            text-align: center;
            width: 90vw;
        }
    }
    @media (max-width:1400px) {
        
    }
    @media (max-width: 1200px) {
        section{
            flex-direction: column-reverse;
            width: 100%;
            justify-content: center;
            & p{
                
                text-align: center;
                padding: 0%;
                width: 95vw;
                position: relative;
                right: 1%;

            }


        }
    }

    
    @media (max-width: 600px) {
        section {
            flex-direction: column-reverse;
            justify-content: center;

            padding: 0 clamp(0.5rem, 3vw, 2.5rem);
            margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
            gap: 1.5rem;
        }

        section & p {
            width: 100%;
        }





        p {
            font-size: 0.75rem;
            line-height: 1.3;
            text-align: center;

            width: 100vw;
            right: 6%;
            position: relative;
        }


    }

    /* Small mobile (max-width 480px) */
    @media (max-width: 480px) {
        section {
            padding: 1rem;
            margin-bottom: 1.5rem;
            gap: 1.2rem;
        }


        p {
            font-size: 0.85rem;
            line-height: 1.5;
            text-align: center;
            width: 100vw;
            right: 1rem;
            position: relative;

        }


    }

</style>