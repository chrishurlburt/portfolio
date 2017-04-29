<template>
  <section class="contact-form">
    <form class="contact-form-wrap">
      <Text-input placeholder="Name" :value.sync="name" />
      <Text-input placeholder="Email" :value.sync="email" />
      <Text-input placeholder="Message" :value.sync="message" :textarea="true" />
    </form>
    <div class="contact-form-submit">
      <a href="" class="contact-form-send">send</a>
    </div>
  </section>
</template>

<script>
import TextInput from '../lib/TextInput'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  components: {
    TextInput
  }
}
</script>
