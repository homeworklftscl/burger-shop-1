function submitForm(a){a.preventDefault();var r=$(a.target);r.serialize(),r.attr("action"),r.attr("method");ajaxForm(r).done(function(a){var e=a.mes;"OK"===a.status?r.append('<p class="success">'+e+"</p>"):r.append('<p class="error">'+e+"</p>")}).fail(function(a,r){alert("Request failed: "+r)})}$("#order-form").on("submit",submitForm);var ajaxForm=function(a){var r=a.serialize(),e=a.attr("action");return $.ajax({type:"POST",url:e,dataType:"JSON",data:r})};$("#clear-btn").click(function(){$(".success").remove(),$(".error").remove()});