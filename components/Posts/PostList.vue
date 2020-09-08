<template>
    <section class="post-list">
     <PostPreview
     id='1'
     :is-admin='isAdmin'
     thumbnail='https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
     title='Hello There!'
     previewText='First Post!'/>
     <PostPreview
     id='1'
     :is-admin='isAdmin'
     thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
     title='Hello There - Second Time'
     previewText='Second Post!'/>
     <PostPreview
     id='1'
     :is-admin='isAdmin'
     thumbnail='https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
     title='Hello There - Third Time'
     previewText='Third Post!'/>
     
    </section>
</template>

<script>
export default {
    name: 'PostList',
    props: {
      isAdmin: { type: Boolean, default: false }
    }
}
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>