<script>
    import { onMount } from 'svelte';

    let dev_links = [
        ["http://localhost:8000", "8000"],
        ["http://localhost:8080", "8080"],
        ["http://localhost:5173", "5173"],
    ]

    let social_links = [
        ["https://reddit.com/r/unixporn", "r/unixporn"],
        ["https://www.reddit.com/r/queensofleague/", "r/qol"],
    ]

    let misc_links = [
        ["https://zeffo.me", "me"]
    ]

    let college_links = [
        ["https://timetable.sicsr.ac.in", "timetable"],
        ["https://teams.microsoft.com", "teams"]
    ]

    let colors = [
        "pink",
        "red",
        "maroon",
        "peach",
        "yellow",
        "green",
        "teal",
        "sky",
        "sapphire",
        "blue",
        "lavender",
        "mauve"
    ]

    onMount(async () => {
        function showTime() {
            const date = new Date();

            let today = date.toLocaleString("en", { weekday: "long" });
            let hour = date.toLocaleString("pl", { hour: "2-digit" }); // use 24h time format
            let minute = date.toLocaleString("en", { minute: "2-digit" });
            let second = date.toLocaleString("en", { second: "2-digit" });
            let day = date.toLocaleString("en", { day: "2-digit" });
            let month = date.toLocaleString("en", { month: "2-digit" });
            let year = date.toLocaleString("en", { year: "numeric" });

            minute = addZero(minute);
            second = addZero(second);

            document.getElementById(
                "date"
            ).innerHTML = `${today}, ${hour}:${minute}:${second} | ${day}/${month}/${year}`;
            setTimeout(showTime, 0);
        }

        function addZero(i) {
            if (i.length < 2) i = "0" + i;
            return i;
        }

        showTime();
    });
</script>
<style>
    .contents {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-evenly;
        margin-top: 40px;
        width: 100%;
        height: 100%;
        /* gap: 100px; */
    }

    .contents:nth-child(1) {
        align-self: flex-start;
    }


    .col {
        display: flex;
        flex-direction: column;
    }

    .row {
        display: flex;
        flex-direction: row;
        max-width: 100%;
        flex-wrap: wrap;
    }

    #Dashboard {
        border-radius: 10px;
        padding: 30px 100px;
        display: flex;
        flex-wrap: wrap;
        max-width: 100%;
        margin: 0 10px;
    }

    #Header {
        width: 100%;
        margin-bottom: 50px;
        gap: 20px;
    }

    #Title {
        font-size: 50px;
        font-family: "Recursive Mono";
        color: var(--pink);
        margin: 0;
    }

    #date {
        color: var(--lavender);
        font-size: 23px;
    }

    #Icon {
        border-radius: 50%;
        height: 100px;
        width: 100px;
        border: 1px solid var(--lavender);
    }
    #Topics {
        /* justify-content: space-between; */
        gap: 100px;
    }

    .topic {
        padding: 0 20px 20px 0;
    }

    .topic-title {
        font-size: 40px;
        font-weight: bold;
    }

    .topic-links {
        margin: 0;
        padding: 0;
        margin-top: 5px;
        list-style-type: none; 
    }

    .topic-links > li > a {
        text-decoration: none;
        color: var(--blue);
        font-size: 20px;
    }

    .topic-links > li > a:hover {
        font-style: italic;
        color: var(--sky);
        text-decoration: underline;
    }



</style>

<svelte:head>
    <meta property="og:description" content="startpage" />
	<meta name="theme-color" content="##FAB387">
	<title> aman/start </title>
</svelte:head>

<div class="contents">
    <div id="Dashboard" class="col">
        <div id="Header" class="row">
            <img id="Icon" src="animals/rocket.webp" alt="rocket" />
            <div class="col">
                <h1 id="Title"> Welcome ~ </h1>
                <span id="date"> _ </span>
            </div>
        </div>
        <div id="Topics" class="row">
                <div class="topic">
                    <span class="topic-title" style="color: var(--green)"> dev </span>
                    <ul class="topic-links">
                        {#each dev_links as link}
                            <li><a href="{link[0]}">{link[1]}</a></li>
                        {/each}
                    </ul>
                </div>
                <div class="topic">
                    <span class="topic-title" style="color: var(--peach)"> social </span>
                    <ul class="topic-links">
                        {#each social_links as link}
                            <li><a href="{link[0]}">{link[1]}</a></li>
                        {/each}
                    </ul>
                </div>
                <div class="topic">
                    <span class="topic-title" style="color: var(--yellow)"> college </span>
                    <ul class="topic-links">
                        {#each college_links as link}
                            <li><a href="{link[0]}">{link[1]}</a></li>
                        {/each}
                    </ul>
                </div>
                <div class="topic">
                    <span class="topic-title" style="color: var(--sapphire)"> misc </span> 
                    <ul class="topic-links">
                        {#each misc_links as link}
                            <li><a href="{link[0]}">{link[1]}</a></li>
                        {/each}
                    </ul>
                </div>
        </div>
        <div class="row colors"></div>
    </div>
    <!-- empty divs -->
</div>
