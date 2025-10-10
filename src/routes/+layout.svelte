<script>
    import Footer from "../components/Footer.svelte";
    import Nav from "../components/Nav.svelte";
    import { fly } from "svelte/transition";
    export let data;

    let pages = {
        "/": "home",
        "/tech": "tech",
        "/cats": "cats",
        "/blog": "blog"
    }

    let keys = Object.keys(pages);
    let previous = ['', ''];
    $: previous = [previous[1], data.pathname];

    function extract(path) {
        let split = path.split('/');
        let base = '/'+split[1];
        let depth = split.length - 1;
        return [base, keys.indexOf(base), depth];
    }

    function getDirection(is_in=true) {
        let [cb, ci, cd] = extract(data.pathname);
        let [pb, pi, pd] = extract(previous[0]);
        let in_mul = (is_in ? -1 : 1);
        if (cb == pb) {
            let value = 20;
            return {y: `${value}%`};
        } 
        let value = 7;
        let mul = (ci < pi) ? 1 : -1;
        value *= in_mul; 
        return {x: `${value*mul}%`};
        
    }
    let transition_duration = 150;
    let transition_delay = 200;
    let enable_transitions = false;
</script>

<div id="ContentWrapper">
    <Nav pages={pages}/>
    {#if enable_transitions}
        {#key data.pathname}
            <div class="transition" in:fly={{ duration: transition_duration, delay: transition_delay, ...getDirection() }} out:fly={{ duration: transition_duration, ...getDirection(false)}}>
                <slot />
            </div>
        {/key}
    {:else}
        <slot />
    {/if}
</div>
<Footer />


<style>
#ContentWrapper {
    padding-bottom: 100px;
}
.transition {
	display: grid;
	grid-column-start: 1;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 2;
}
</style>
