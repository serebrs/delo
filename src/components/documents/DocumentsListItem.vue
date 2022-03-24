<template>
  <tr class="odd:bg-white even:bg-slate-50 hover:bg-sky-50 hover:ring-1 hover:ring-inset hover:ring-sky-200">
    <td class="px-3 pl-6 py-2 whitespace-nowrap text-sm text-slate-600">
      <component :is="icon" class="h-5 w-5" />
    </td>
    <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-600">{{ item.num }}</td>
    <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-600">{{ item.date }}</td>
    <td class="px-3 py-2 whitespace-normal text-sm text-slate-600">{{ item.title }}</td>
    <td class="px-3 py-2 whitespace-nowrap text-xs text-slate-600">
      <div class="flex flex-col items-start justify-center">
        <span v-for="(pers, index) in item.person" :key="index">{{ pers }}</span>
      </div>
    </td>
    <td class="px-3 py-2 whitespace-nowrap text-sm text-slate-500">
      <div class="flex flex-row justify-between items-center">
        <a href="#" class="p-1 hover:text-amber-600 hover:bg-sky-200 rounded-md">
          <SwitchVerticalIcon class="h-5 w-5" />
        </a>
        <a href="#" class="p-1 hover:text-blue-600 hover:bg-sky-200 rounded-md">
          <PencilIcon class="h-5 w-5" />
        </a>
        <a href="#" class="p-1 hover:text-red-600 hover:bg-sky-200 rounded-md">
          <TrashIcon class="h-5 w-5" />
        </a>
      </div>
    </td>
  </tr>
</template>

<script>
import { InboxInIcon, ExternalLinkIcon, DocumentTextIcon, DocumentDuplicateIcon, DocumentIcon, PencilIcon, SwitchVerticalIcon, TrashIcon } from "@heroicons/vue/solid";

export default {
  props: {
    item: Object
  },
  computed: {
    icon() {
      switch (this.item.type) {
        case "in": return "InboxInIcon";
        case "out": return "ExternalLinkIcon";
        case "norm": return "DocumentTextIcon";
        case "konkurs": return "DocumentDuplicateIcon";
        case "dogovor": return "DocumentDuplicateIcon";
        default: return "DocumentIcon";
      }
    }
  },
  components: {
    InboxInIcon, ExternalLinkIcon, DocumentTextIcon, DocumentDuplicateIcon, DocumentIcon, PencilIcon, SwitchVerticalIcon, TrashIcon
  }
}
</script>