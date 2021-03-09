<template>
  <section class="produtosContainer">
    <div v-if="produtos" class="produtos">
      <div class="produto" v-for="produto in produtos" :key="produto.id">
        <router-link to="/">
        <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
        <p class="preco">{{produto.preco}}</p>
        <h2 class="titulo">{{produto.nome}}</h2>
        <p>{{produto.descricao}}</p>
        </router-link>
      </div>
    </div>
    <div v-else-if="!produtos" class="semResultados">
      Busca sem resultados. Tente buscar outro termo.
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
<style scoped>
  .produtosContainer{
    max-width: 1000px;
    margin: 0 auto;
  }

  .produtos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin: 30px;
  }

.produto {
  box-shadow: 0px 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background-color: #FFF;
  border-radius: 4px;
  transition: all .2s;
}

.produto:hover {
  box-shadow: 0px 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;

}

.titulo {
  margin-bottom: 10px;
} 

.preco {
  color: #e80;
  font-weight: bold;
}

.semResultados {
  text-align: center;
}

</style>