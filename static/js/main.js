$DOM = $(document)
$DOM.ready(function(){

    function call_ajax(url, type, data) {
         // this function will perform ajax calls and returns request object

         data = data || '';
         var request = $.ajax({
                             type: type,
                             url: url,
                             data:data,
                       });
         return request;
    }

    function file_upload(){
       $('#upload_exel').prop('disabled',false);
       $('#download_btn').remove();
    }

    function reset_file_ip(){
		$('#ip_exel_file').val('');
		$('#upload_exel .fa-spinner').addClass('no_display');
		$('#upload_exel .glyphicon-upload').html('Upload File');
    }

    function upload_exel(){
        $('#upload_exel .glyphicon-upload').html('Uploading')
        $('#upload_exel .fa-spinner').removeClass('no_display')
        event.preventDefault();
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
			if(this.readyState === 4  && this.status == 200 && this.responseText.includes('true')){
                reset_file_ip()
                alertify.success('File uploaded successfully');
                var down_url = JSON.parse(this.responseText)['download_url']
                var html = `<button type="button" class="btn btn-success" id="download_btn">
                                <a href="`+ down_url +`"> Download Results</a>
                            </button>`
                $('.button_div').append(html)
                $('#upload_exel').prop('disabled', true);
			}
            else if(this.responseText.includes('false')){
                if(!$(".alertify-notifier .ajs-error").is(':visible')){
                   reset_file_ip()
                   alertify.error('File uploading failed');
                }
            } 
        }
		request.open('POST', '/', true);
        var formData = new FormData(document.getElementById('file_upload_form'));
        request.send(formData);
   }

    function bindEvents() {
        $DOM.on('change', '#ip_exel_file', file_upload)
            .on('click', '#upload_exel', upload_exel)
    }
    
    alertify.set('notifier', 'position', 'top-right');
    bindEvents();

});
