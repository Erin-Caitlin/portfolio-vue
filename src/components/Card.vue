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
    name: 'CardComp'
  }
  </script>
  
  <style scoped>
  .card {
    margin: 1rem;
    width: 20rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    background-color: #fff;
  }
  .card-header {
    font-weight: bold;
  }
  .card-body {
    padding: 1rem;
  }
  </style>
  