<script>
    import { overtime } from './overtime.js';
    let credits = $state(undefined),
        quota = $state(undefined),
        days = $state(undefined),
        scrap = $state(undefined);

    function handleSubmit(event) {
        scrap = overtime(credits, quota, days);
    }

    function formCheck(event) {
        if (credits <= 0) {
            credits = undefined;
        }
        if (quota < 130) {
            quota = undefined;
        }
        // Days on the 3-0/NOW scale
        if (days > 3 || days < 0) {
            days = undefined;
        }
    }
</script>

<form onsubmit={handleSubmit}>
    <label for="credits">Credits Needed:</label>
    <input
        type="number"
        id="credits"
        style="width: 350px"
        placeholder="Enter a number"
        bind:value={credits}
        onchange={((scrap = undefined), formCheck)}
    />
    <label for="quota">Quota:</label>
    <input
        type="number"
        id="quota"
        style="width: 150px"
        placeholder="130"
        bind:value={quota}
        onchange={((scrap = undefined), formCheck)}
    />
    <label for="days">Deadline:</label>
    <input
        type="number"
        id="days"
        style="width: 150px"
        placeholder="0 days"
        bind:value={days}
        onchange={((scrap = undefined), formCheck)}
    />
    <button
        type="submit"
        style="width: 350px"
        onfocus={formCheck}
        onmouseover={formCheck}
        class={!credits == true ? 'disabled' : ''}>Submit</button
    >
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
    .disabled {
        opacity: 0.5;
        color: gray;
        border-color: gray;
        pointer-events: none;
        cursor: not-allowed;
    }
    /* Removed the +1/-1 arrows */
    input[type='number'] {
        appearance: textfield;
    }
</style>
