import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    posts: [
      {
          "id": 1,
          userProfilePicture: "",
          createTime: "Oct 22, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      },
      {
          id: 2,
          userProfilePicture: "/images/profiil.png",
          createTime: "Oct 23, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      },
      {
          id: 3,
          userProfilePicture: "/images/profiil.png",
          createTime: "Oct 24, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      },
      {
          id: 4,
          userProfilePicture: "/images/profiil.png",
          createTimfe: "Oct 24, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      },
      {
          id: 5,
          userProfilePicture: "/images/profiil.png",
          createTime: "Oct 25, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      },
      {
          id: 6,
          userProfilePicture: "/images/profiil.png",
          createTime: "Oct 25, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      },
      {
          id: 7,
          userProfilePicture: "/images/profiil.png",
          createTime: "Oct 26, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      },
      {
          id: 8,
          userProfilePicture: "/images/profiil.png",
          createTime: "Oct 27, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      },
      {
          id: 9,
          userProfilePicture: "/images/profiil.png",
          createTime: "Oct 28, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      },
      {
          id: 10,
          userProfilePicture: "/images/profiil.png",
          createTime: "Oct 29, 2022",
          postPicture: "images/skunk.jpg",
          postHeader: "Hello!",
          postContent: "Post content (description) ",
          likes: 0
      }
    ]
  },
  getters: {
    getPosts: state => {
      console.log("jou")
      var postList = state.posts.map(post => {
        return {
          id: post.id,
          userpicture: post.userProfilePicture,
          time: post.createTime,
          header: post.postHeader,
          content: post.postContent,
          likes: post.likes
        }
      });
      return postList
    }
  },
  mutations: {
    increaseLikes: state => {
    },
    resetLikes: state => {
      state.posts.forEach(post => {
        post.likes = 0
      });
    }
  },
  actions: {
    increaseLikesAct: act => {
      act.commit("increaseLikes")
    },
    resetLikesAct: act => {
      act.commit("resetLikes")
    }
  },
  modules: {
  }
})
