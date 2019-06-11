export default {

    data() {
        return {
            
        };
    },
    methods: {      
      showToast: function(text, type = "success") {
        this.$swal({
          text: text,
          type: type,
          toast: true,
          timer: 3000,
          position: "top-end",
          showConfirmButton: false
        });
      },
      showLoading: function() {
        this.$swal({ showConfirmButton: false });
        this.$swal.showLoading();
      }    
    }
    
};
