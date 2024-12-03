<template>
    <Dialog :open="true" @update:open="onClose">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Post</DialogTitle>
            </DialogHeader>
            <form @submit.prevent="handleSubmit">
                <div class="grid gap-4 py-4">
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="feed" class="text-right">Feed</Label>
                        <Input id="feed" name="feed" v-model="editedPost.feed" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="timestamp" class="text-right">Timestamp</Label>
                        <Input id="timestamp" name="timestamp" v-model="editedPost.timestamp" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="header" class="text-right">Header</Label>
                        <Input id="header" name="header" v-model="editedPost.header" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="body" class="text-right">Body</Label>
                        <Input id="body" name="body" v-model="editedPost.body" class="col-span-3" />
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="footer" class="text-right">Footer</Label>
                        <Input id="footer" name="footer" v-model="editedPost.footer" class="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"

const props = defineProps({
    post: {
        type: Object,
        required: true
    },
    onSave: {
        type: Function,
        required: true
    },
    onClose: {
        type: Function,
        required: true
    }
})

const editedPost = ref({ ...props.post })

const handleSubmit = () => {
    props.onSave(editedPost.value)
}
</script>