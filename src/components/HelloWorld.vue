<!-- eslint-disable-line no-use-before-define-->
<!-- eslint-disable-next-line no-console-->
<template>
<div>

<div class="container-fluid">

  <div class="row row-cols-5 g-2" style="padding-top: 10px; margin: auto;">

  <div class="col" v-for="item in CardList" :key="item.mal_id">
    <div class="card">
    <div class="card-header bg-secondary text-white " ><b class="titlesSet ">{{item.title}}</b></div>
      <img  :src="item.images.jpg.image_url" class="img-thumbnail" style="width: 90%; height: 17vw;margin: auto;"/> 
      <div class="card-body">
        <h5 class="card-title DescriptionSet" >{{ item.title }}</h5>
        <div id="summary">
         <p class="card-text collapse" id="collapseSummary">{{ item.synopsis }}</p>
        </div>
      </div>
    
   
    <div class="card-footer">
      <button v-b-modal.modal-1  v-b-modal="('modal-1' + item.mal_id)" class="btn btn-info">Read More..</button>
      
         <b-modal :id="('modal-1' + item.mal_id)" ok-only>
          <template #modal-title>
            {{ item.title }}
            </template>
          <div class="d-block text-left">
            <img  class="rounded mx-auto d-block" :src="item.images.jpg.image_url"  style="width: 70%; height: 18vw;"/> 
            <p class="my-4">{{ item.synopsis }}</p>
          </div>
        </b-modal>
     
           &nbsp;&nbsp;
           <!---<small class="text-muted">{{ item.type }}</small>-->
           <small><span class="badge rounded-pill bg-secondary">{{ item.type }}</span></small>
    
    </div>
  </div>
</div>
</div>

</div>
  </div>

 
</template>

<script>

export default {
  name: 'HelloWorld',
  data(){
    return{
    CardList: [],
    modalShow: false
     }
     
  },
  mounted(){

    fetch('https://api.jikan.moe/v4/anime')
    .then(res => res.json()) // It resolves the promise with a JSON object
    .then(res => {
        console.log(res.data);
        this.CardList = res.data;

       // console.log(res.data[0].type);
         // console.log(mal_id) 
    }) 
    
  
  }
}


</script>


<style scoped>

@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

html,
body {
  -moz-box-sizing: border-box;
       box-sizing: border-box;
  height: 100%;
  width: 100%; 
  background: #FFF;
  font-weight: 300;
  font-family: Arial, Helvetica, sans-serif;
}
 


.fostrap-logo {
  width: 100px;
  margin-bottom:15px
}
h1.heading {
  color: #fff;
  font-size: 1.15em;
  font-weight: 900;
  margin: 0 0 0.5em;
  color: #505050;
}
@media (min-width: 450px) {
  h1.heading {
    font-size: 3.55em;
  }
}
@media (min-width: 760px) {
  h1.heading {
    font-size: 3.05em;
  }
}
@media (min-width: 900px) {
  h1.heading {
    font-size: 3.25em;
    margin: 0 0 0.3em;
  }
} 
@media only screen and (max-width: 480px) {
  img {
    width: 100%;
  }
}



.card {
    display: block;
    margin-bottom: 20px;
    line-height: 1.5;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    transition: box-shadow .25s; 
}
.card:hover {
  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.img-card {
  
  width: 70%;
  height:100px;
  border-top-left-radius:2px;
  border-top-right-radius:2px;
  display:block;
    overflow: hidden;
}
.img-card img{
  padding-top: 5px;
  height: 100px;
  object-fit:cover; 
  transition: all .25s ease;

  width: 80%;
  margin: auto;
} 

img {
    max-width: 100%;
    height: auto;
    display: table;
    margin: 0 auto;
}
.card-content {
  padding:15px;
  text-align:left;
}
.card-title {
  margin-top:0px;
  font-weight: 400;
  font-size: 1.3em;
}
.card-title a {
  color: #000;
  text-decoration: none !important;
}


#summary {
  font-size: 14px;
  line-height: 1.5;
}

#summary p.collapse:not(.show) {
    height: 65px !important;
    overflow: hidden;
  
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
}

#summary p.collapsing {
    min-height: 65px !important;
}
.titlesSet {
  white-space: nowrap; 
  max-width: 250px; 
  overflow: hidden;
  text-overflow: ellipsis; 
  
}

.DescriptionSet {
  display: block;
  white-space: nowrap; 
  text-overflow: ellipsis; 
  max-width: 300px; 
  overflow: hidden;
 
  
  
}

</style>
