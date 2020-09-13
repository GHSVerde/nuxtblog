import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post);
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost;
            },
        },
        actions: {
            // Get blog posts on init
            nuxtServerInit(vuexContext, context) {
                return context.$axios.get('posts.json')
                .then(res => {
                    const postsArray = [];

                    for (const key in res.data) {
                        postsArray.push( { ...res.data[key], id: key });
                    }

                    vuexContext.commit('setPosts', postsArray)
                })
                .catch(e => context.error(e));
            },

            addPost(vuexContext, post) {
                const createdPost = {...post, updatedDate: new Date() };

                return this.$axios.post('/posts.json', createdPost)
            .then(result => {
                vuexContext.commit('addPost', { ...createdPost, id: result.data.name });
            })
            .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {

                return this.$axios.put('/posts/' + editedPost.id + '.json', {...editedPost, updatedDate: new Date() })
                .then(res => {
                    vuexContext.commit('editPost', editedPost)
                })
                .catch(e => console.log(e))

            },

            // Set posts to store
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            },
        },
        getters: {
            // Retrieve posts
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore;