<script>
 import { onMount } from 'svelte';
 import 'whatwg-fetch'
 export let url = null;
 export  let name = null;
 var id = 1;


 function uploadFile(event) {
   var input = event.target;

   if(input.files.length > 0){
     var csrf = document
       .querySelector("meta[name=csrf]")
       .getAttribute("content");

     const fd = new FormData();
     fd.append("file", input.files[0]);
     fd.append("_csrf_token", csrf);

     fetch('/admin/upload', {
       method: 'POST',
       body: fd
     }).then(function(response) {
       return response.json()
     }).then(function(json) {
       if(json.status == "OK"){
         url = json.data.url;
         collapsed = false;
       }else{
         console.log(json.message)
       }
     }).catch(function(ex) {
       console.log('parsing failed', ex)
     });
   }
 }
</script>

<input type="hidden" value="{url}" name="{name}">
<input type="file" class="d-none" id="file-{id}" on:change="{uploadFile}">
<div>
  {#if url}
  <img src="{url}" alt="cover" class="mb-3">
  {/if}
</div>
<div class="text-center">
  <label for="file-{id}" class="btn btn-primary m-0"> <i class="fe fe-upload mr-1"></i> Choose cover</label>
</div>

