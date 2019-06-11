<template>
    <div id="private-inbox">
      <div class="chat-box">

      </div>
      <div class="form">
          <input type="text" placeholder="write message" class="write-msg-field">
          <button class="btn btn-primary send-msg" style="width: 1000px;">send</button>
      </div> 
    </div>
</template>
<script>

export default {
    name:'PrivateInbox',
    data:{
      messages:[],
      message: {},
    },
     sockets:{
        
    },
    mounted(){

    }  
}
</script>
<style scoped>
.chat-box{
 background-color: white;

}
.form{
    display: flex;
    flex-direction: row;
    margin: 1%;
}


</style>
