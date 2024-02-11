<script>
    import { page } from '$app/stores';
</script>

<style>
    .contents {
        align-items: center;
    }

    .status {
        font-size: 100px;
        font-weight: bold;
        color: var(--red);
        padding: 0;
        margin: 0;
        text-shadow: 0 0 5px;
    }

    .message {
        font-size: larger;
        font-style: italic;
    }

    .empty {
        height: 300px;
    }

</style>

<div class="contents">
    <h1 class="status"> {$page.status} </h1>
    <p class="message"> ~ {$page.error.message} ~ </p>
    <div class="empty"></div>
</div>
