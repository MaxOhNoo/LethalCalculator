<script>
  import { overtime } from './overtime.js';
  let credits,
    quota,
    days,
    scrap = undefined;

  function handleSubmit(event) {
    scrap = overtime(credits, quota);
  }

  function formCheck(event) {
    if (credits > 0 !== true) {
      credits = undefined;
    }
    if (quota >= 130 !== true) {
      quota = undefined;
    }
    if (3 >= days >= 0 !== true) {
      days = undefined;
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="credits">Credits Needed:</label>
  <input
    type="number"
    id="credits"
    bind:value={credits}
    on:change={((scrap = undefined), formCheck)}
  />
  <label for="quota">Quota:</label>
  <input
    type="number"
    id="quota"
    bind:value={quota}
    placeholder="130"
    on:change={((scrap = undefined), formCheck)}
  />
  <label for="days">Deadline:</label>
  <input
    type="number"
    id="days"
    bind:value={days}
    placeholder="0 days"
    on:change={((scrap = undefined), formCheck)}
  />
  <button type="submit" on:focus={formCheck} on:mouseover={formCheck}>Submit</button>
  {#if !credits}
    <p>Please enter a number of Credits Needed</p>
  {/if}
</form>

{#if scrap !== undefined}
  <h1>Sell {scrap} credits of scrap</h1>
{/if}

<style>
  @font-face {
    font-family: '3270';
    src: url('/3270.ttf') format('truetype');
  }
  * {
    text-align: center;
    font-family: '3270';
    font-size: 40px;
    color: rgb(0, 255, 0);
    background-color: #000000;
    border-color: rgb(0, 255, 0);
    border-width: 5px;
  }
  :global(body) {
    background-color: #000000;
  }
  h1 {
    font-size: 80px;
  }
  input[type='number'] {
    appearance: textfield;
  }
</style>
