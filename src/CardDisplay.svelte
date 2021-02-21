<script lang="ts">
  import Card from "./Card.svelte";

  export let cards: Card[];
  export let label: string;
</script>

<h2>{label}</h2>
<section class="cards">
  {#each cards as card}
    <Card {...card} />
  {/each}
</section>

<style type="text/sass">
  h2 
    margin-top: 0

  .cards 
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(min(20rem, 100%), 1fr))
    gap: 1rem
    align-items: start
</style>
