<script>
    let userData = null;
    let userRepo = null;
    let error = null;

    async function fetchUserProfile() {
        try {
            const response = await fetch(
                "https://api.github.com/users/bruno-bento"
            );
            if (response.ok) {
                userData = await response.json();
                console.log(userData);
            } else {
                throw new Error("Failed to fetch user profile");
            }
        } catch (err) {
            error = err.message;
        }
    }
    async function fetchUserRepo() {
        try {
            const response = await fetch(
                "https://api.github.com/users/bruno-bento/repos"
            );
            if (response.ok) {
                userRepo = await response.json();
                userRepo = userRepo.slice(1);
                console.log(userRepo);
            } else {
                throw new Error("Failed to fetch user repos");
            }
        } catch (err) {
            error = err.message;
        }
    }
    fetchUserProfile();
    fetchUserRepo();
</script>

{#if userData}
    <div class="relative w-96 group">
        <div
            class="absolute -inset-1 bg-gradient-to-r from-primary-yellow to-secondary-yellow rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        />
        <div
            class="relative px-7 py-6 bg-primary-yellow ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6"
        >
            <img
                class=" rounded-full w-16 h-16 text-primary-blue"
                src={userData.avatar_url}
                alt={userData.name}
            />

            <div class="flex flex-col justify-between">
                <p class="text-primary-blue font-bold text-xl">
                    {userData.name}
                </p>
                <a
                    href={userData.html_url}
                    class="block text-secondary-blue text-lg font-medium group-hover:text-primary-blue transition duration-200"
                    target="_blank">Github →</a
                >
            </div>
        </div>
    </div>

    {#if userRepo && userRepo.length > 0}
        <div class="text-white grid grid-cols-1 gap-8">
            {#each userRepo as repo}
                <div class="relative w-96 group">
                    <div
                        class="border border-white absolute -inset-1 rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 text-white"
                    />
                    <div
                        class="relative px-7 py-6 bg-transparent ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6"
                    >
                        <div class="flex flex-col justify-between gap-8">
                            <p class=" font-bold text-xl">
                                {repo.name}
                            </p>
                            <p class="font-medium text-base">
                                {repo.description}
                            </p>
                            <a
                                href={repo.html_url}
                                class="block text-sm font-normal  transition duration-200"
                                target="_blank">Github →</a
                            >
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {:else if error}
        <p>Error: {error}</p>
    {:else}
        <p>Loading...</p>
    {/if}
{:else if error}
    <p>Error: {error}</p>
{:else}
    <p>Loading...</p>
{/if}
