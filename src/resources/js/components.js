import { createApp } from 'vue'
import ArticleLike from './components/ArticleLike'
import CreateModal from './components/articles/CreateModal'
import DeleteModal from './components/articles/DeleteModal'
import EditModal from './components/articles/EditModal'
import ArticleTagsInput from './components/ArticleTagsInput'
import AuthModal from './components/auth/AuthModal'
import CountAnimation from './components/CountAnimation'
import FollowButton from './components/FollowButton'
import HeaderNav from './components/HeaderNav'
import HeaderUserModal from './components/HeaderUserModal'
import Modal from './components/Modal'
import ThemeToggle from './components/ThemeToggle'
import AppTimeline from './components/timeline/AppTimeline'
import AppTweet from './components/tweets/AppTweet.vue'
import AppTweetUsername from './components/tweets/AppTweetUsername.vue'
import AvatarZoom from './components/users/AvatarZoom'
import EditUserModal from './components/users/EditUserModal'
import FollowModal from './components/users/FollowModal'
import ThumbnailZoom from './components/users/ThumbnailZoom'

createApp({
    components: {
        AppTweetUsername,
        AppTweet,
        AppTimeline,
        ThumbnailZoom,
        FollowModal,
        AvatarZoom,
        AuthModal,
        DeleteModal,
        CreateModal,
        CountAnimation,
        HeaderUserModal,
        ThemeToggle,
        EditModal,
        EditUserModal,
        ArticleLike,
        ArticleTagsInput,
        FollowButton,
        HeaderNav,
        Modal
    },
}).mount('#app')