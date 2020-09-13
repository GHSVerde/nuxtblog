<template>
    <div class="posts-page">
        <PostList :posts='blogPosts' />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Gabriel Verde | Blog'
        }
    },
    computed: {
        blogPosts() {
            return this.$store.getters.loadedPosts;
        }
    }
}
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>