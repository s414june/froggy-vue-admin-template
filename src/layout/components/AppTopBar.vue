<template>
  <div class="card shadow-lg">
    <Menubar class="px-4">
      <template #start> <h1 class="font-bold">Home</h1> </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <BadgeIcon />
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BadgeIcon from '@/components/BadgeIcon.vue'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Features',
    icon: 'pi pi-star'
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Core',
        icon: 'pi pi-bolt',
        shortcut: '⌘+S'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        shortcut: '⌘+B'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
        shortcut: '⌘+U'
      },
      {
        separator: true
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette',
            badge: 2
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette',
            badge: 3
          }
        ]
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    badge: 3
  }
])
</script>
