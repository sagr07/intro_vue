<template>
 


  <!-- <template v-if="age>1 && age<18">
    
    <h2 class="red">you are too young to drive</h2>
  

  </template>
  <template v-if="age>=18 && age<=40">
    <h2 class="green">You can drive...</h2>
  
  </template>
  <template v-if="age>=40" >
    <h2 class="red">you are too old to drive</h2>

  </template>
</div> -->
</template>
<script>
export default{
  name:"app",
  data(){
    return{
      number:0,
      age:0,
      show:true,
    
      
    }

  },
  methods:{
    increment(){
      if(number>=10){
        this.number+=1;
      }
    },
    decrement: function(){
      if(number>=1){
        this.number-=1
      }

    },

     demo:()=>{
       const a=document.getElementById("agee").value
       this.age=a
      console.log(this.age);
     }
  }
}
  

</script>
<style>
.red{
  color: red;
}
.green{
  color: green;
}
</style>