<template>
    <div class="app-container">
      <div class="sidebar">
        <!-- Sidebar content goes here -->
        <router-link to="/">Home</router-link>
        <router-link to="/customers">Customers</router-link>
        <router-link to="/products">Products</router-link>
      </div>
  
      <div class="content">
        <!-- Main content goes here -->
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <style scoped>
  .app-container {
    display: flex;
  }
  
  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  </style>