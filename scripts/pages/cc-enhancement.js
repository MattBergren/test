var ccEnchancement=function(){var n=function(n){$(n).on("focus",function(){$(this).siblings('input[type="radio"]').prop("checked",!0),$(this).attr("aria-required","true")}),$(n).on("blur",function(){$(this).attr("aria-required","false")})};return{checkOnFocus:n}}();ccEnchancement.checkOnFocus(".js-payment-amount-input");