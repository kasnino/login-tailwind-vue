<template>
  <li>
    <a
      :href="href"
      :class="['block px-3 py-2 rounded-md', isActive ? 'bg-sky-500 text-white' : 'bg-gray-900 text-white']"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        required: true,
      },
      isActive: Boolean,
    },
  }
</script>