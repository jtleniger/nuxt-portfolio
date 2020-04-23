export const state = () => ({
  posts: [],
});

export const mutations = {
  setPosts(state, list) {
    state.posts = list;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context('~/assets/content/post/', false, /\.json$/);
    let posts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setPosts', posts);
  },
};