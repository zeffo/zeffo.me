<script>
    let site_info = [
        ["cursor cat", "https://github.com/zeffo/manzar", "manzar", "--red"],
        ["font", "https://github.com/zeffo/iosevka-pride", "iosevka pride", "--peach"],
        ["colors", "https://github.com/catppuccin/catppuccin", "catppuccin", "--yellow"],
    ]
    let quotes = ['Great leaders inspire greatness in others.', 'Belief is not a matter of choice, but of conviction.', 'Easy is the path to wisdom for those not blinded by ego.', 'A plan is only as good as those who see it through.', 'The best confidence builder is experience.', 'Trust in your friends, and they’ll have reason to trust in you.', 'You hold onto friends by keeping your heart a little softer than your head.', 'Heroes are made by the times.', 'Ignore your instincts at your peril.', 'Most powerful is he who controls his own power.', 'The winding path to peace is always a worthy one, regardless of how many turns it takes.', 'Fail with honor rather than succeed by fraud.', 'Greed and fear of loss are the roots that lead to the tree of evil.', 'When surrounded by war, one must eventually choose a side.', 'Arrogance diminishes wisdom.', 'Truth enlightens the mind, but won’t always bring happiness to your heart.', 'Fear is a disease; hope is its only cure.', 'A single chance is a galaxy of hope.', 'It is a rough road that leads to the heights of greatness.', 'The costs of war can never be truly accounted for.', 'Compromise is a virtue to be cultivated, not a weakness to be despised.', 'A secret shared is a trust formed.', 'A lesson learned is a lesson earned.', 'Overconfidence is the most dangerous form of carelessness.', 'The first step to correcting a mistake is patience.', 'A true heart should never be doubted.', 'Believe in yourself or no one else will.', 'No gift is more precious than trust.', 'Sometimes, accepting help is harder than offering it.', 'Attachment is not compassion.', 'For everything you gain, you lose something else.', 'It is the quest for honor that makes one honorable.', 'Easy isn’t always simple.', 'If you ignore the past, you jeopardize the future.', 'Fear not for the future, weep not for the past.', 'In war, truth is the first casualty.', 'Searching for the truth is easy. Accepting the truth is hard.', 'A wise leader knows when to follow.', 'Courage makes heroes, but trust builds friendships.', 'Choose what is right, not what is easy.', 'The most dangerous beast is the beast within.', 'Who my father was matters less than my memory of him.', 'Adversity is a friendship’s truest test.', 'Revenge is a confession of pain.', 'Brothers in arms are brothers for life.', 'Fighting a war tests a soldier’s skills, defending his home tests a soldier’s heart.', 'Where there’s a will, there’s a way.', 'A child stolen is a hope lost.', 'The challenge of hope is to overcome corruption.', 'Those who enforce the law must obey the law.', 'The future has many paths – choose wisely.', 'A failure in planning is a plan for failure.', 'Love comes in all shapes and sizes.', 'Fear is a great motivator.', 'Truth can strike down the spectre of fear.', 'The swiftest path to destruction is through vengeance.', 'Evil is not born, it is taught.', 'The path to evil may bring great power, but not loyalty.', 'Balance is found in the one who faces his guilt.', 'He who surrenders hope, surrenders life.', 'He who seeks to control fate shall never find peace.', 'Adaptation is the key to survival.', 'Anything that can go wrong will.', 'Without honor, victory is hollow.', 'Without humility, courage is a dangerous game.', 'A great student is what the teacher hopes to be.', 'When destiny calls, the chosen have no choice.', 'Only through fire is a strong sword forged.', 'Crowns are inherited, kingdoms are earned.', 'Who a person truly is cannot be seen with the eye.', 'Understanding is honoring the truth beneath the surface.', 'Who’s the more foolish, the fool or the fool who follows him?', 'The first step towards loyalty is trust.', 'The path of ignorance is guided by fear.', 'The wise man leads, the strong man follows.', 'Our actions define our legacy.', 'Where we are going always reflects where we came from.', 'Those who enslave others, inevitably become slaves themselves.', 'Great hope can come from small sacrifices.', 'Friendship shows us who we really are.', 'All warfare is based on deception.', 'Keep your friends close, but keep your enemies closer.', 'The strong survive, the noble overcome.', 'Trust is the greatest of gifts, but it must be earned.', 'One must let go of the past to hold on to the future.', 'Who we are never changes, who we think we are does.', 'A fallen enemy may rise again, but the reconciled one is truly vanquished. ', 'The enemy of my enemy is my friend.', 'Strength of character can defeat strength in numbers.', 'Fear is a malleable weapon.', 'To seek something is to believe in its possibility.', 'Struggles often begin and end with the truth.', 'Disobedience is a demand for change.', 'He who faces himself, finds himself.', 'The young are often underestimated.', 'When we rescue others, we rescue ourselves.', 'Choose your enemies wisely, as  they may be your last hope.', 'Humility is the only defense against humiliation. ', 'When all seems hopeless, a true hero gives hope.', 'A soldier’s most powerful weapon is courage.', 'You must trust in others or success is impossible.', 'One vision can have many interpretations.', 'Alliances can stall true intentions.', 'Morality separates heroes from villains.', 'Sometimes even the smallest doubt can shake the greatest belief.', 'Courage begins by trusting oneself.', 'Never become desperate enough to trust the untrustworthy. ', 'Never give up hope, no matter how dark things seem.', 'The truth about yourself is always the hardest to accept.', 'The wise benefit from a second opinion.', 'When in doubt, go to the source.', 'The popular belief isn’t always the correct one.', 'To love, is to trust. To trust is to believe.', 'Jealousy is the path to chaos.', 'Deceit is the weapon of greed.', 'Without darkness there cannot be light.', 'Wisdom is born in fools as well as wise men.', 'What is lost is often found.', 'Madness can sometimes be the path to truth.', 'Death is just the beginning.', 'Facing all that you fear will free you from yourself.', 'Embrace others for their differences, for that makes you whole.', 'The search for truth begins with belief.', 'Survival is one step on the path to living.', 'Trust placed in another is trust earned.', 'If there is no path before you, create your own.', 'Mistakes are valuable lessons often learned too late.', 'Who you were does not have to define who you are.', 'You can change who you are, but you cannot run from yourself.']
    let quote = quotes[Math.floor(Math.random() * quotes.length)];

</script>

<style>

    .home-text {
        text-align: left;
    }

    a {
        color: var(--blue);
    }

    a:hover {
        text-shadow: 0 0 4px;
    }

    highlight {
        color: var(--green)
    }

    .site-info {
        color: var(--subtext1)
    }

    .contents {
        justify-content: flex-start;
    }

    @keyframes gradient-text {
        to {
            background-position: 200% center;
        }
    }

    aman {
        animation: gradient-text 3s linear infinite;     
        -webkit-text-fill-color: transparent;
        background: -webkit-linear-gradient(right, var(--pink), var(--mauve), var(--red), var(--maroon), var(--peach), var(--yellow), var(--green), var(--teal), var(--sky), var(--sapphire), var(--blue), var(--lavender));
        background-clip: text;
        -webkit-background-clip: text;
        background-size: 200% auto;
        font-weight: bold;
        text-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
    }

    aman::before {
        content: 'Aman';
    }

    .subtext {
        color: var(--overlay0);
        /* font-size: smaller; */
    }

    .site-info > a {
        color: var(--rosewater);
    }

</style>

<svelte:head>
    <meta property="og:description" content=":3" />
	<meta name="theme-color" content="#f5c2e7">
	<title>aman/home</title>
</svelte:head>

<div class="contents">
    <p class="home-text">
        Hello there! I'm <aman/>. 
        <br><br>
        I like <highlight>programming</highlight> (especially automation and concurrency). <br>
        You can see my work
        <a href="/tech">here</a>. <br><br>
        I also like <highlight>rescuing animals</highlight>. You can see some of them
        <a href="/cats">here</a>.<br><br>
        You can <highlight>contact me</highlight> on <a href="https://discord.com/users/325616103143505932">discord</a> or send me an
        <a href="mailto:aman@zeffo.me">email</a>.
        <br><br><br>

        <span class="site-info">
            <strong> Website Stuff: </strong><br>
            {#each site_info as [field, link, title, color]}
                <span style="color: var({color})">-></span>&nbsp;{field}: <a href={link}>{title}</a><br>
            {/each}
        </span>
        <br>

        <span class="subtext">random clone wars quote:<br> </span><i class="subtext"> "{ quote }" </i>
    </p>
</div>

