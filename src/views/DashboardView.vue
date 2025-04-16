import { ref, onMounted } from "vue"
import { useAuthStore } from "../stores/useAuthStore"
import { Home, Database, Star, User, Search, Plus, Heart } from "lucide-vue-next"

const authStore = useAuthStore()
const userAvatar = ref("/static/logo.jpg")
const activeTab = ref("discover")

// Category tabs data
const categoryTabs = [
  { id: "discover", name: "发现" },
  { id: "stylized", name: "风格化" },
  { id: "illustration", name: "插画" },
  { id: "national", name: "国风美学" },
  { id: "poster", name: "海报设计" },
  { id: "anime", name: "动漫游戏" },
  { id: "scifi", name: "未来科幻" },
]

// Gallery items data
const galleryItems = ref([
  {
    id: 1,
    title: "未来城市幻想",
    author: "陈艺术家",
    likes: 238,
    liked: false,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BD%91%E9%A1%B5%E7%99%BB%E9%99%86%E4%B8%BB%E9%A1%B5%E9%9D%A22025-0-4-12-3-IZJi1gHyF7mFgCIrVQlAxquJyNeSGd.png?height=300&width=300&crop=top",
  },
  {
    id: 2,
    title: "山水意境",
    author: "王水墨",
    likes: 186,
    liked: false,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BD%91%E9%A1%B5%E7%99%BB%E9%99%86%E4%B8%BB%E9%A1%B5%E9%9D%A22025-0-4-12-3-IZJi1gHyF7mFgCIrVQlAxquJyNeSGd.png?height=300&width=300&crop=center",
  },
  {
    id: 3,
    title: "未来战士",
    author: "林数字",
    likes: 342,
    liked: false,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BD%91%E9%A1%B5%E7%99%BB%E9%99%86%E4%B8%BB%E9%A1%B5%E9%9D%A22025-0-4-12-3-IZJi1gHyF7mFgCIrVQlAxquJyNeSGd.png?height=300&width=300&crop=bottom",
  },
  {
    id: 4,
    title: "奇幻世界",
    author: "张幻想",
    likes: 275,
    liked: false,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BD%91%E9%A1%B5%E7%99%BB%E9%99%86%E4%B8%BB%E9%A1%B5%E9%9D%A22025-0-4-12-3-IZJi1gHyF7mFgCIrVQlAxquJyNeSGd.png?height=300&width=300&crop=left",
  },
])

// Toggle like status
function toggleLike(item) {
  item.liked = !item.liked
  item.likes += item.liked ? 1 : -1
}

onMounted(() => {
  // Load user info

  // In a real app, you would fetch gallery items from an API
  // fetchGalleryItems();

  if (authStore.user) {
    userAvatar.value = authStore.user.avatar || "/static/logo.jpg"
  }
})
