<template>
    <div class="custom-select">
        <slot name="title"></slot>
        <select v-model="modelValue">
            <option>1</option>
            <option class="custom-option" v-for="item in modelValue" :value="item.title">{{ item.title }}</option>
        </select>
    </div>
</template>

<script setup>
const props = defineProps({ modelValue: Array })
const emits = defineEmits(['update:modelValue'])

</script>


