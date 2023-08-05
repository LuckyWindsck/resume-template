module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "globals": {
    "defineProps": "readonly"
  },
  "extends": [
    'plugin:vue/vue3-recommended',
    "eslint:recommended"
  ],
  reportUnusedDisableDirectives: true,
  "rules": {
    "vue/multi-word-component-names": "off"
  }
}
