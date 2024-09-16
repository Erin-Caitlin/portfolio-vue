<template>
    <div class="card">
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>

        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>

<script>
    export default {
       name: 'CardComp', 
       
}
</script>

<style scoped>

.card {
    margin: 1rem;
    width: 20rem;
}
.carousel-item .card-body{
    height: 200px; 
    overflow-y: auto;
}
</style>