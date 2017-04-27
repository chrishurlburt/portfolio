<template>
  <section class="contact-page">
    <div class="contact-page-inner">
      <h2 class="contact-page-cta">Lets talk</h2>
      <ContactForm />
    </div>
  </section>
</template>

<script>
import ContactForm from '../lib/ContactForm'

export default {
  components: {
    ContactForm
  }
}
</script>
