<script lang="ts">
  import { parse } from "twemoji-parser";
  import snarkdown from "snarkdown";

  export let title: string;
  export let emoji: string;
  $: emojiUrl = emoji !== undefined && parse(emoji)[0].url;
  export let content: string;
  export let links: { href: string; name: string }[];

  let expanded = false;

  const expand = () => (expanded = !expanded);
</script>

<article>
  <div on:click={expand} tabindex="0">
    {#if emojiUrl}
      <img class="emoji" src={emojiUrl} alt={emoji} />
    {/if}

    <h3>{title}</h3>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      class={expanded ? "rotate" : ""}
      ><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg
    >
  </div>
  <div class={expanded ? "shown" : "hidden"}>
    <section class="description">{@html snarkdown(content)}</section>
    {#if links}
      <section class="links" aria-label="links">
        {#each links as { href, name }}
          <a {href} rel="noopener noreferrer">{name}</a>
        {/each}
      </section>
    {/if}
  </div>
</article>

<style type="text/sass">
  article 
    background: #fff
    padding: 1rem
    border-radius: 0.5rem
    color: #333
    position: relative
  
  svg
    position: absolute
    right: 1rem
    top: 1rem
    transform: rotate(180deg)

    &.rotate
      transform: rotate(90deg)
  
  .emoji 
    width: 24px
  
  h3 
    margin: 0.25rem 0 0

  a:not(:last-child) 
    margin-right: 1rem
  
  section 
    white-space: pre-wrap
    margin-top: 1rem

  .shown
    margin-top: 1rem

  .hidden 
    display: none
</style>
