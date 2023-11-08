<!-- Menu.svelte -->
<script>
    let sections;
    let navLinks;

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const inViewSectionId = entry.target.id;
                navLinks.forEach((link) => {
                    const dotSpan = link.querySelector("span"); 
        
                    if (link.getAttribute("href") === `#${inViewSectionId}`) {
                        dotSpan.classList.add("bg-yellow-500");
                    } else {
                        dotSpan.classList.remove("bg-yellow-500");
                    }
                });
            }
        });
    }, observerOptions);

    import { onMount } from "svelte";

    onMount(() => {
        sections = document.querySelectorAll("section");
        navLinks = document.querySelectorAll("nav a");
        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    });
</script>

<div class="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
    <nav class="fixed top-1/2 right-10 transform -translate-y-1/2 p-4">
        <ul class="flex flex-col space-y-4">
            <li>
                <a href="#home" class="flex items-center"
                    ><span class="w-4 h-4 bg-white rounded-full mr-2" /></a
                >
            </li>
            <li>
                <a href="#about" class="flex items-center"
                    ><span class="w-4 h-4 bg-white rounded-full mr-2" /></a
                >
            </li>
            <li>
                <a href="#project" class="flex items-center"
                    ><span class="w-4 h-4 bg-white rounded-full mr-2" /></a
                >
            </li>
            <li>
                <a href="#contact" class="flex items-center"
                    ><span class="w-4 h-4 bg-white rounded-full mr-2" /></a
                >
            </li>
        </ul>
    </nav>
</div>
