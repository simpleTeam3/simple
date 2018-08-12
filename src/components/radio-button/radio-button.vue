<template>
    <label :class="prefixs">
        <input :class="prefix + '-original'" />
        <span :class="prefix + '-inner'" >
            <slot></slot>
        </span>
    </label>
</template>
<script>
const prefix = "vut-radio-button";
export default {
    name : 'vut-radio-button',
    data() {
        return {
            
        }
    }
}
</script>

