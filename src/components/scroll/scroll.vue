<template>
    <div class="wrapper" ref="wrapper">
        <div class="center">
        <slot></slot>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'

export default {
    name:'Scroll',
    data () {
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper,{
            click:true
        })
    }
}
</script>
<style lang="stylus" scoped>

</style>