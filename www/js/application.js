$M = {
  initialize: function() {

  },
  save: function(r) {
    $('#text').val("test")
    $('#text').val(r)
    $('img#captured').src = "data:image/jpeg;base64," + r
    $('img#captured').show()
  }
}
