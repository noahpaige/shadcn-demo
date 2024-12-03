<template>
    <div id="page-container" class="page-container h-full-minus-nav flex flex-col gap-2 overflow-hidden p-2">
        <div id="controls-row flex-auto" class="w-full">
            <Button @click="console.log(JSON.stringify(posts))">New Post</Button>

        </div>
        <div id="post-table" class="flex-grow h-[calc(100%-4rem)]">
            <Card class="border h-full w-full flex overflow-hidden">

                <Table class="h-full">
                    <TableHeader class="sticky top-0 bg-slate-100 dark:bg-slate-800 backdrop-blur-xl border-b-2">
                        <TableRow>
                            <TableHead class="outline-2">Feed</TableHead>
                            <TableHead>Timestamp</TableHead>
                            <TableHead>Header</TableHead>
                            <TableHead>Body</TableHead>
                            <TableHead>Footer</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody class="overflow-y-auto ">
                        <TableRow v-for="post in posts" :key="post.id">
                            <TableCell>{{ post.feed }}</TableCell>
                            <TableCell>{{ post.timestamp }}</TableCell>
                            <TableCell>{{ post.header }}</TableCell>
                            <TableCell>{{ post.body }}</TableCell>
                            <TableCell>{{ post.footer }}</TableCell>
                            <TableCell>
                                <div class="flex space-x-2">
                                    <Button variant="outline" size="icon" @click="copyPost(post)">
                                        <Copy class="h-4 w-4" />
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger as-child>
                                            <Button variant="outline" size="icon">
                                                <Trash2 class="h-4 w-4" />
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete the post.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction @click="deletePost(post.id)">Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                    <Button variant="outline" size="icon" @click="setEditingPost(post)">
                                        <Edit class="h-4 w-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </Card>
            <EditPostModal v-if="editingPost" :post="editingPost" @save="editPost" @close="setEditingPost(null)" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { Copy, Trash2, Edit } from 'lucide-vue-next'
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import EditPostModal from './EditPostModal.vue'
import { postData } from '../data'
import { Card } from '@/components/ui/card'
const posts = ref(postData)

const editingPost = ref(null)

const copyPost = (post) => {
    const newPost = { ...post, id: Math.max(...posts.value.map(p => p.id)) + 1 }
    posts.value.push(newPost)
}

const deletePost = (id) => {
    posts.value = posts.value.filter(post => post.id !== id)
}

const editPost = (updatedPost) => {
    posts.value = posts.value.map(post => post.id === updatedPost.id ? updatedPost : post)
    editingPost.value = null
}

const setEditingPost = (post) => {
    editingPost.value = post
}
</script>
