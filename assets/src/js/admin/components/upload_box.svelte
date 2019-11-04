<script>
 import 'whatwg-fetch'
 let count = 0;
 let files = [];
 let collapsed = true;

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
         files = [json.data, ...files];
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

<div class="card {collapsed ? 'card-collapsed' : ''}">
  <div class="card-header p-4">
    <div class="card-options m-0 w-100">

        <form method="post" action="/uploads" class="mr-5">
          <input type="file" class="d-none" name="file" id="file-select" on:change={uploadFile}>
          <label for="file-select" class="btn btn-primary btn-sm m-0"> <i class="fe fe-upload mr-1"></i> Upload file</label>
        </form>

      <a href="#" class="card-options-collapse ml-auto" on:click={e => collapsed = !collapsed}><i class="fe fe-chevron-up"></i></a>
    </div>
  </div>
  <div class="card-body p-2" style="max-height: 150px; overflow-y: auto;">
    <table class="table card-table table-vcenter">
      <tbody>
        {#each files as file }
        <tr>
        <td class="p-1"><img src="{file.url}" alt="" class="h-6"></td>
        <td class="p-1">
          <input type="text" class="form-control" value="{file.url}" onClick="this.setSelectionRange(0, this.value.length)"> 
        </td>
      </tr>
      {/each}
      </tbody></table>
  </div>
</div>
