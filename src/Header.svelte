<script lang="ts">
  let h1Style = ""; // lord forgive me for using inline styles

  const onScroll = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 50 || scrollTop > 50) {
      const height = 2 - 0.5 * Math.min((scrollTop - 50) / 50, 1);
      h1Style = `font-size: ${height}rem; line-height: ${
        height * 2
      }rem; height: ${height * 2 + 0.5}rem`;
    } else {
      h1Style = "";
    }
  };
</script>

<svelte:window on:scroll={onScroll} />

<header>
  <h1 style={h1Style}>hi i'm ruby</h1>
</header>

<style type="text/sass">
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap")

  header 
    position: sticky
    top: 0%

  h1 
    background: white
    color: #333
    text-align: center
    line-height: 4rem
    height: 4.5rem
    margin-top: 0
    margin-bottom: 0.5rem
    border-bottom-right-radius: 2rem
    font-family: "Fira Code", monospace
    padding-top: 0.5rem
</style>
