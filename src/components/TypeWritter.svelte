<!-- TypeWriter.svelte -->
<script>
import { onMount, onDestroy } from 'svelte';
  
  export let texts ;

  let currentTextIndex = 0;
  let text = '';
  let typingInterval;

  onMount(() => {
    startTyping();
  });

  onDestroy(() => {
    clearInterval(typingInterval);
  });

  function startTyping() {
    const fullText = texts[currentTextIndex];
    let currentIndex = 0;

    typingInterval = setInterval(() => {
      if (text.length === fullText.length) {
        // Delete phase
        clearInterval(typingInterval);
        setTimeout(() => {
          typingInterval = setInterval(() => {
            text = text.slice(0, -1);
            if (text.length === 0) {
              clearInterval(typingInterval);
              currentTextIndex = (currentTextIndex + 1) % texts.length;
              setTimeout(() => {
                startTyping();
              }, 80); // Delay before starting the next text typing
            }
          }, 80); // Adjust delete speed by changing the interval value
        }, 2000); // Delay before starting the delete phase
      } else {
        // Typing phase
        text += fullText[currentIndex];
        currentIndex++;
      }
    }, 100); // Adjust typing speed by changing the interval value
  }
</script>


<!-- Child Component -->
<div class="flex w-auto gap-4">
    <div class="h-24 flex flex-col text-white items-center bg-transparent"> 
      <h1 class="sm:text-5xl text-4xl font-bold">Bruno <span class="text-[#FFD02B] ">Bento</span></h1>
      <span class="sm:text-3xl text-2xl underline decoration-[#FFD02B] font-bold after:content-['|']  after:animate-blink after:text-">
        {text}
      </span>
    </div>
</div>
  
