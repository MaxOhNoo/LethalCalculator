<script>
    import {overtime} from './overtime.js'
    let credits = undefined;
    let quota = undefined;
    let scrap = undefined;
    function handleSubmit(event) {
        if (!credits) {
            return;
        }
        scrap = overtime(credits, quota);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="creditsNeeded">Credits Needed:</label>
    <input type="number" id="credits" bind:value={credits}>
    <label for="quota">Quota:</label>
    <input type="number" id="quota" bind:value={quota} placeholder="130">
    <button type="submit">Submit</button>
    {#if !credits}
        <p>Please enter a number of Credits Needed </p>
    {/if}
</form>
{#if scrap !== undefined}
    <h1>Sell {scrap} credits of scrap</h1>
{/if}