<template>
  <section>
    <h1>Compre ou Venda</h1>
    <ProdutoBuscar />
    <ProdutoLista />
  </section>

</template>

<script>
import ProdutoLista from '@/components/ProdutosLista.vue';
import ProdutoBuscar from '@/components/ProdutosBuscar.vue';


export default {
  name: "home",
  components: {
    ProdutoLista,
    ProdutoBuscar
  }
};
</script>
<style scoped>
h1 {
  margin-top: 40px;
  color: #87f;
  font-size: 2rem;
  text-align: center;
}
</style>