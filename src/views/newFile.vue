
<template>
    <h1 style="text-align: center;">Counter</h1>
    <div style="text-align: center;" :class="red">
  <h1  style="font-size: 50px;">{{ number }}</h1>
  
  <div>
  
  <button @click="number+=1" v-bind:disabled="number==10" style="margin: 10px;">increase</button>
  
  <button @click="number-=1" v-bind:disabled="number==1">decrease</button>
  </div>
  </div>
  <div>
    <h1>v-if and v-model </h1>
  <h2>Check your age for Driving</h2>
    <input v-model="age" type="text" id="agee" placeholder="Enter your age here"> 
   <template v-if="age==0">
  
   </template>
    <template v-if="age>1 && age<18">
      
      <h2 class="red">you are too young to drive</h2>
    
  
    </template>
    <template v-if="age>=18 && age<=40">
      <h2 class="green">You can drive...</h2>
    
    </template>
    <template v-if="age>=40" >
      <h2 class="blue">you are too old to drive</h2>
  
    </template>
  </div>
  <RouterView/>
  </template>
  
  <script>
  import { RouterView } from 'vue-router';
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
  .blue{
    color: blue;
  }
  </style>