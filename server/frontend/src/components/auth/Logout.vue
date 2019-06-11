<template>
    
</template>

<script>
export default {
    name: 'Logout',
    mounted() {
        this.$store.dispatch('destroyToken')
        .then(() => {
            this.$router.push('/');
        })
        .catch(() => {
            this.$router.push('/');

        });
    }
}
</script>
