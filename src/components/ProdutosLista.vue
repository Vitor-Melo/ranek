<template>
  <section class="produtosContainer">
    <div v-for="produto in produtos" :key="produto.id">
      <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
      <p>{{produto.preco}}</p>
      <h2>{{produto.nome}}</h2>
      <p>{{produto.descricao}}</p>
    </div>
  </section>
</template>

<script>
import {api} from '@/service.js';
import {serialize} from '@/serialize.js';

export default {
  name:'ProdutoLista',
  data(){
    return {
      produtos: null,
      produtosPorPagina: 9,
    }
  },
  methods: {
    getProdutos(){
      api.get('/produtos.json')
      .then(json => this.produtos = json.data.produto);
    }
  },
  computed: {
    url(){
      const query = serialize(this.$route.query);

      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    }
  },
  created(){
    this.getProdutos();
  },
  watch: {
    url(){
      this.getProdutos();
    }
  }
}
</script>

<style>

</style>