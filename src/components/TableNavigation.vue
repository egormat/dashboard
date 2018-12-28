<template>
  <div class="wrap">
    <!-- <button @click="back">Назад</button> -->
  <div class="nav">
  <div class="navItem" v-for="(item, index) in navItems" @click="itemClick(index)"  v-if="$store.getters.getIsTable">
      {{item}}
              \
  </div>
    <div v-if="!$store.getters.getIsTable" class="navItem">
        Данные о продажах
      </div>

  </div>
</div>
</template>

<script>
export default {
    computed: {
      navItems(){
        return this.$store.getters.getNav
      }
    },
    methods: {
      back(){
        console.log(this.$route.params)
        this.$store.dispatch('removeNavItem')
        this.$router.go(-1)
      },

      itemClick(index){
        console.log(index)
        if (this.navItems.length == 1) {
          this.$router.go();
        }
        if (this.navItems.length == 2) {
          if (index == 0){
            this.$router.go(-1)
            this.$store.dispatch('removeNavItem')
          }
        }
          if (this.navItems.length == 3) {
            if (index == 0){
              this.$router.go(-2)
              this.$store.dispatch('removeNavItem')
              this.$store.dispatch('removeNavItem')
            }
            if (index == 1){
              this.$router.go(-1)
              this.$store.dispatch('removeNavItem')
        }
    }
}
}
}
</script>

<style scoped>
.wrap{
  display: flex;
  flex-direction: column;
}

.wrap button{
  font-family: 'Roboto', sans-serif;
  align-self: center;
  height: 50%;
  border-radius: 3px;
  margin-left: 20px;
}

.nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
}

.navItem {
  color:#FFFFFF;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  cursor:pointer;
}

.navItem:hover {
  text-decoration: underline;
}

.navItem:last-of-type:hover{
  text-decoration: none;
  cursor: auto;
}

.dateNav{
  position: absolute;
  top: 70px;
  z-index: 9999;
  width: 100%;
  height: 50px;
  background: white;
}
</style>
