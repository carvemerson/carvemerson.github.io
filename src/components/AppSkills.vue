<template>
    <section
        id="skills"
        class="folio-section skills"
    >
        <section-heading
            folio="04"
            kicker="Skills"
            title="Set like an index."
        />

        <div class="skills__core">
            <skill-mark
                v-for="skill in core"
                :key="skill.name"
                v-reveal
                class="reveal"
                :skill="skill"
                large
            />
        </div>

        <div class="skills__groups">
            <div
                v-for="group in groups"
                :key="group.title"
                v-reveal
                class="reveal skills__group"
            >
                <p class="skills__group-head">
                    {{ group.title }}
                    <span
                        v-if="group.note"
                        class="skills__group-note"
                    >{{ group.note }}</span>
                </p>
                <ul class="skills__list">
                    <li
                        v-for="skill in group.items"
                        :key="skill.name"
                    >
                        <skill-mark :skill="skill" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue';
import SkillMark from './SkillMark.vue';

const core = [
    { name: 'Laravel', icon: 'laravel', href: 'https://laravel.com/' },
    { name: 'Vue', icon: 'vue', href: 'https://vuejs.org/' },
];

const groups = [
    {
        title: 'Languages',
        items: [
            { name: 'PHP', icon: 'php', href: 'https://www.php.net/' },
            { name: 'TypeScript', icon: 'typescript', href: 'https://www.typescriptlang.org/' },
            { name: 'JavaScript', icon: 'javascript', href: 'https://developer.mozilla.org/docs/Web/JavaScript' },
            { name: 'Dart', icon: 'dart', href: 'https://dart.dev/' },
            { name: 'C / C++', icon: 'cpp', href: 'https://isocpp.org/' },
        ],
    },
    {
        title: 'Web Frameworks',
        items: [
            { name: 'Filament', icon: 'filament', href: 'https://filamentphp.com/' },
            { name: 'Livewire', icon: 'livewire', href: 'https://livewire.laravel.com/' },
            { name: 'Inertia', icon: 'inertia', href: 'https://inertiajs.com/' },
            { name: 'Tailwind', icon: 'tailwind', href: 'https://tailwindcss.com/' },
        ],
    },
    {
        title: 'Mobile',
        items: [
            { name: 'Flutter', icon: 'flutter', href: 'https://flutter.dev/' },
            { name: 'Firebase', icon: 'firebase', href: 'https://firebase.google.com/' },
        ],
    },
    {
        title: 'Data & Infra',
        items: [
            { name: 'PostgreSQL', icon: 'postgres', href: 'https://www.postgresql.org/' },
            { name: 'MySQL', icon: 'mysql', href: 'https://www.mysql.com/' },
            { name: 'Redis', icon: 'redis', href: 'https://redis.io/' },
            { name: 'Docker', icon: 'docker', href: 'https://www.docker.com/' },
            { name: 'Cloud', icon: 'cloud', href: 'https://cloud.google.com/' },
        ],
    },
    {
        title: 'Tooling',
        items: [
            { name: 'Git', icon: 'git', href: 'https://git-scm.com/' },
            { name: 'GitHub Actions', icon: 'githubactions', href: 'https://github.com/features/actions' },
            { name: 'Vite', icon: 'vite', href: 'https://vite.dev/' },
        ],
    },
];
</script>

<style scoped>
.skills__core {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(1.5rem, 5vw, 3.5rem);
    padding-bottom: clamp(2rem, 4vw, 3rem);
    border-bottom: 1px solid var(--hairline);
}

.skills__groups {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: clamp(2rem, 4vw, 3.5rem);
    margin-top: clamp(2rem, 4vw, 3rem);
}

.skills__group-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem 1ch;
    margin: 0 0 1.2rem;
    padding-bottom: 0.7rem;
    border-bottom: 1px solid var(--hairline);
    font-family: var(--font-mono);
    font-size: var(--fs-mono);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--ink);
}
.skills__group-note {
    text-transform: none;
    letter-spacing: 0.04em;
    color: var(--accent);
    opacity: 0.85;
}

.skills__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
}
</style>
