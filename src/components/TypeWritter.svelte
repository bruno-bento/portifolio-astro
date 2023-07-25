<!-- TypeWriter.svelte -->
<script>
    import { onMount, onDestroy } from "svelte";

    export let texts;
    let currentText;
    let currentIndex = 0;

    const updateText = () => {
        currentText = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    };

    let interval;

    onMount(() => {
        interval = setInterval(updateText, 5000);
        updateText();
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<div class="flex w-auto">
    <h1 class="text-5xl text-white font-bold">
        Teste 
        <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-[#FFD02B] font-bold"
        >
            {currentText}
        </h1>
    </h1>
</div>
