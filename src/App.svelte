<script lang="ts">
  import type Card from "./Card.svelte";
  import CardDisplay from "./CardDisplay.svelte";
  import Header from "./Header.svelte";

  export let projects: Card[];
  export let skills: {[x: string]: string[]};
  export let experiences: Card[];
  export let links: {[x: string]: string};
</script>

<Header />
<main>
  <section>
    <h2>I'm a web developer based out of Westminster, Colorado.</h2>
    <p>
      I've been programming for over four years; and I've been interested in
      technology for a lot longer.
    </p>
    <ul class="links">
      {#each Object.entries(links) as [name, href]}
        <li><a {href}>{name}</a></li>
      {/each}
    </ul>
  </section>
  <section>
    <section class="skills">
      {#each Object.entries(skills) as [type, skills]}
        <div>
          <h3>{type}</h3>
          <ul>
            {#each skills as skill}
              <li>{skill}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </section>
  </section>

  <section>
    <CardDisplay cards={experiences} label="experience" />
  </section>

  <section>
    <CardDisplay cards={projects} label="projects" />
  </section>
</main>

<style type="text/sass">
  main 
    max-width: 50rem
    margin: 0 auto

    * 
      text-transform: lowercase

    & > section
      padding: 1rem
      margin: 1rem
      background: rgba(0,0,0,0.4)
      border-radius: 0.5rem

      & > h2:first-child
        margin-top: 0
        text-align: center

      h2, h3, p
        &:last-child
          margin-bottom: 0

  .links 
    list-style: none
    display: flex
    justify-content: center
    margin: 0
    padding: 0

    li
      display: inline

      &:not(:last-child)
        margin-right: 1rem

      a
        color: #86c1ef
        &:visited
          color: #bad8ef
        &:hover
          color: #fff

  .skills
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    gap: 0rem 2rem
    
    & > * 
      flex: 1 0 0 
      display: flex
      flex-direction: column
      align-items: center
      
      h3 
        margin: 0

  h2
    color: white
    font-size: 1.25em
</style>
